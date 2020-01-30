import chalk from "chalk";
import { Config } from "./interfaces";

/**
 * A logger function which only logs only is the level of the message is greater than
 * or equal to the log level specificd in the config. Strings support Chalk template literals.
 * @param {Config} config The application config object generated at runtime.
 */
export default function Log(config: Config): Function {
    return function Logger(message: any | Array<any>, level?: number): void {
        if (level >= config.logLevel) {
            if (!Array.isArray(message)) {
                console.log(chalk`${message}`);
            } else {
                console.log(chalk`${message.join(" ")}`);
            }
        }
    };
}
