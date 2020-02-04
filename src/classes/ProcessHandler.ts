import { spawn, ChildProcessWithoutNullStreams } from "child_process";

import { Config } from "../interfaces";

import { Provider } from "./Provider";

/**
 * Handles the cleanup and restart of the command executer.
 *
 * Kills the spawned process, kills the process running on the port to avoid conflicts and restarts a clean process.
 * @param {boolean} initial Determines if this is the first time the process is running.
 * @param {boolean} restart Determines if the process should restart after cleanup.
 */
export class ProcessHandler extends Provider {
    private childProcess: ChildProcessWithoutNullStreams = null;

    constructor(config: Config) {
        super(config);
    }
}
