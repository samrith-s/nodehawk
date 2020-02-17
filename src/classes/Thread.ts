/**
 * @packageDocumentation
 * @module Thread
 */

import { spawn, ChildProcessWithoutNullStreams } from "child_process";
import cliCursor from "cli-cursor";
import killPort from "kill-port";

import { Config } from "../interfaces";

import Provider from "./Provider";

import { clearScreen } from "../utils";

/**
 * Handles the cleanup and restart of the command executer.
 *
 * Kills the spawned process, kills the process running on the port to avoid conflicts and restarts a clean process.
 * @param {boolean} initial Determines if this is the first time the process is running.
 * @param {boolean} restart Determines if the process should restart after cleanup.
 */
export default class Thread extends Provider {
    /**
     * The child process generated using `child_process.spawn`.
     */
    private childProcess: ChildProcessWithoutNullStreams = null;

    /**
     * The main command derived from `config.exec` which is passed to `childProcess` of this instance.
     */
    private command: string = null;

    /**
     * The arguments derived from `config.exec` which is passed to `childProcess` of this instance.
     */
    private args: string[] = [];

    /**
     * Create an instance of `Thread` which is responsible for managing the entire child process spawning and management.
     * @param {Config} config The configuration object.
     */
    constructor(config: Config) {
        super(config);
        [this.command, ...this.args] = config.exec.split(/\s/);
    }

    /**
     * Kill the process if it has been spawned. If not, fail silently.
     */
    private async killProcess(): Promise<void> {
        try {
            await this.childProcess.kill();
            this.log.debug(
                "Process with pid",
                this.childProcess.pid,
                "terminated successfully."
            );
        } catch (error) {
            this.log.error(error);
            this.log.debug(
                "Process with pid",
                this.childProcess.pid,
                "has already been terminated."
            );
        }
    }

    /**
     * Try to kill the process running on the port specified in `config.port`. If not, fail silently.
     */
    private async killPort(): Promise<void> {
        try {
            await killPort(this.config.port);
            this.log.debug(
                `Process running on port ${this.config.port} killed.`
            );
        } catch {
            this.log.debug(`No process running on port ${this.config.port}`);
        }
    }

    /**
     * Start the thread, executing the command specified in `config.exec`.
     * @param {string} root The root path to start the process.
     * @param {boolean} [restart] Whether this is a restart or not.
     */
    public async start(root: string, restart = false): Promise<void> {
        if (restart && this.config.clearScreen) {
            clearScreen();
        }

        await this.killPort();

        if (restart) {
            await this.killProcess();
        }
        if (restart) {
            this.display.onBeforeRestart();
        } else {
            this.display.onBeforeStart();
        }

        this.childProcess = await spawn(this.command, this.args, {
            cwd: root,
            env: process.env
        });

        if (restart) {
            this.display.onRestart();
        } else {
            this.display.onStart();
        }

        this.childProcess.stdout.on("data", chunk => {
            cliCursor.hide();
            console.log(chunk.toString());
            console.log("");
        });
        this.childProcess.stderr.on("data", error => {
            cliCursor.hide();
            console.log(error.toString());
            console.log("");
        });
    }

    /**
     * Restart the thread, executing the command specified in `config.exec`.
     * @param {string} root The root path to start the process.
     */
    public async restart(root: string): Promise<void> {
        await this.start(root, true);
    }
}
