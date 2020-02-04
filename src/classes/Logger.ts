import chalk from "chalk";

import { Config, LogLevels, LogPrefix } from "../interfaces";

import { Provider } from "./Provider";

/**
 * A logger function which only logs only is the level of the message is greater than
 * or equal to the log level specificd in the config. Strings support Chalk template literals.
 * @param {Config} config The application config object generated at runtime.
 */

export class Logger extends Provider {
    /**
     *
     * @param {Config} config Creates an instance of `Logger`.
     */
    constructor(config: Config) {
        super(config);
    }

    /**
     * The is the internal print function used by the logger to check the `logLevel` and print messages to the terminal.
     * @param {any|any[]} message An object to print to the terminal.
     * @param {number} level The level of the log.
     */
    private print(
        message: any | Array<any>,
        level?: LogLevels,
        prefix?: LogPrefix
    ): void {
        if (level >= this.config.logLevel) {
            if (!Array.isArray(message)) {
                console.log(chalk`[${prefix}] ${message}`);
            } else {
                console.log(chalk`[${prefix}] ${message.join(" ")}`);
            }
        }
    }

    fatal(message: any | Array<any>): void {
        this.print(message, LogLevels.FATAL, LogPrefix.FATAL);
    }

    error(message: any | Array<any>): void {
        this.print(message, LogLevels.ERROR, LogPrefix.ERROR);
    }

    warn(message: any | Array<any>): void {
        this.print(message, LogLevels.WARN, LogPrefix.WARN);
    }

    info(message: any | Array<any>): void {
        this.print(message, LogLevels.INFO, LogPrefix.INFO);
    }

    debug(message: any | Array<any>): void {
        this.print(message, LogLevels.DEBUG, LogPrefix.DEBUG);
    }
}
