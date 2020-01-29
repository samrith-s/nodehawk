import { cursorTo, clearScreenDown } from "readline";
import rc from "rc";

import DEFAULT_CONFIG from "./default-config.json";

/**
 * Returns the loaded configuration object. Either from a .nodehawkrc or the default configuration file.
 */
export function loadConfiguration(): object {
    return rc("nodehawk", DEFAULT_CONFIG);
}

/**
 * A simple function to clear the screen.
 */
export function clearScreen(): void {
    const blank = "\n".repeat(process.stdout.rows);
    console.log(blank);
    cursorTo(process.stdout, 0, 0);
    clearScreenDown(process.stdout);
}
