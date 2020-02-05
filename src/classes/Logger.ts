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
        level: LogLevels,
        prefix: string
    ): void {
        if (level <= this.config.logLevel) {
            console.log(prefix, ...message);
        }
    }

    /**
     * Log a critical message. This exits the process.
     * @argument {any|any[]} messages
     */
    fatal<IArguments>(...messages: any | Array<any>): void {
        throw new Error([LogPrefix.FATAL, messages].join(" "));
    }

    /**
     * Logs a critical message. Does not exit the process.
     */
    error<IArguments>(...messages: any | Array<any>): void {
        this.print(messages, LogLevels.ERROR, LogPrefix.ERROR);
    }

    /**
     * Logs a warning. Used to highlight cause of problems.
     * @argument {any|any[]} messages
     */
    warn<IArguments>(...messages: any | Array<any>): void {
        this.print(messages, LogLevels.WARN, LogPrefix.WARN);
    }

    /**
     * Logs an informative message. Useful for general logging purposes.
     * @argument {any|any[]} messages
     */
    info<IArguments>(...messages: any | Array<any>): void {
        this.print(messages, LogLevels.INFO, LogPrefix.INFO);
    }

    /**
     * Logs all messages useful while debugging specially. Useful for providing more context to advanced users.
     * @argument {any|any[]} messages
     */
    debug<IArguments>(...messages: any | Array<any>): void {
        this.print(messages, LogLevels.DEBUG, LogPrefix.DEBUG);
    }
}
