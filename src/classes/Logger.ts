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
    }

    /**
     * The is the internal print function used by the logger to check the `logLevel` and print messages to the terminal.
     * @param {any|any[]} message An object to print to the terminal.
     * @param {number} level The level of the log.
     */
    private print(
        message: any | Array<any>,
        level?: LogLevels,
        prefix?: string
    ): void {
        if (level <= this.config.logLevel) {
            if (!Array.isArray(message)) {
                console.log(prefix, message);
            } else {
                console.log(prefix, ...message);
            }
        }
    }

    /**
     * Log a critical message. This exits the process.
     * @param {any|any[]} message
     */
    fatal(message: any | Array<any>): void {
        this.print(message, LogLevels.FATAL, LogPrefix.FATAL);
        throw new Error(message);
    }

    /**
     * Logs a critical message. Does not exit the process.
     * @param {any|any[]} message
     */
    error(message: any | Array<any>): void {
        this.print(message, LogLevels.ERROR, LogPrefix.ERROR);
    }

    /**
     * Logs a warning. Used to highlight cause of problems.
     * @param {any|any[]} message
     */
    warn(message: any | Array<any>): void {
        this.print(message, LogLevels.WARN, LogPrefix.WARN);
    }

    /**
     * Logs an informative message. Useful for general logging purposes.
     * @param {any|any[]} message
     */
    info(message: any | Array<any>): void {
        this.print(message, LogLevels.INFO, LogPrefix.INFO);
    }

    /**
     * Logs all messages useful while debugging specially. Useful for providing more context to advanced users.
     * @param {any|any[]} message
     */
    debug(message: any | Array<any>): void {
        this.print(message, LogLevels.DEBUG, LogPrefix.DEBUG);
    }
}
