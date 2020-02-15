import chalk from "chalk";

import { Config, LogLevels, LogPrefix } from "../interfaces";

/**
 * A logger function which only logs only is the level of the message is greater than
 * or equal to the log level specificd in the config. Strings support Chalk template literals.
 * @param {Config} config The application config object generated at runtime.
 */

export class Logger {
    /**
     * The `Config` object provided to this instance.
     */
    private config: Config;

    /**
     *
     * @param {Config} config Creates an instance of `Logger`.
     */
    constructor(config: Config) {
        this.config = config;

        process.on("unhandledRejection", reason => {
            this.fatal(reason);
        });

        process.on("uncaughtException", error => {
            this.fatal(error);
        });
    }

    /**
     * The is the internal print function used by the logger to check the `logLevel` and print messages to the terminal.
     * @param {any|any[]} message An item to be printed to the terminal.
     * @param {number} level The level of the log.
     * @param {string} prefix The string to prefix the log message with.
     */
    private print(
        message: any | Array<any>,
        level: LogLevels,
        prefix: string
    ): void {
        if (level <= this.config.logLevel) {
            const chalkFunction: Function = this.chalk(level);
            console.log(
                prefix,
                chalkFunction(
                    ...(!Array.isArray(message) ? [message] : message)
                )
            );
        }
    }

    private chalk(level: LogLevels): Function {
        switch (level) {
            default: {
                return chalk.white.bold;
            }

            case 2: {
                return chalk.yellow.dim;
            }

            case 3: {
                return chalk.white;
            }

            case 4: {
                return chalk.grey;
            }
        }
    }

    /**
     * Log a critical message. This exits the process.
     * @argument {any} error - Any valid error instance.
     */
    fatal(error: any | Array<any>): void {
        console.log("");
        error.name = `${LogPrefix.FATAL} ${error.name}`;
        console.log(error.stack);
        console.log("");
        process.exit(1);
    }

    /**
     * Logs a critical message. Does not exit the process.
     * @argument {any|any[]} messages
     */
    error(...messages: any | Array<any>): void {
        this.print(messages, LogLevels.ERROR, LogPrefix.ERROR);
    }

    /**
     * Logs a warning. Used to highlight cause of problems.
     * @argument {any|any[]} messages
     */
    warn(...messages: any | Array<any>): void {
        this.print(messages, LogLevels.WARN, LogPrefix.WARN);
    }

    /**
     * Logs an informative message. Useful for general logging purposes.
     * @argument {any|any[]} messages
     */
    info(...messages: any | Array<any>): void {
        this.print(messages, LogLevels.INFO, LogPrefix.INFO);
    }

    /**
     * Logs all messages useful while debugging specially. Useful for providing more context to advanced users.
     * @argument {any|any[]} messages
     */
    debug(...messages: any | Array<any>): void {
        this.print(messages, LogLevels.DEBUG, LogPrefix.DEBUG);
    }
}
