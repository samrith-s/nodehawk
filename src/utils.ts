import path from "path";
import { cursorTo, clearScreenDown } from "readline";
import rc from "rc";

import { Config } from "./interfaces";

import DEFAULT_CONFIG from "./default-config.json";

/**
 * Returns the loaded configuration object. Either from a .nodehawkrc or the default configuration file.
 */
export function loadConfiguration(): Config {
    return rc("nodehawk", DEFAULT_CONFIG);
}

/**
 * Handles the cleanup and restart of the command executer.
 *
 * Kills the spawned process, kills the process running on the port to avoid conflicts and restarts a clean process.
 * @param {boolean} initial Determines if this is the first time the process is running.
 * @param {boolean} restart Determines if the process should restart after cleanup.
 */
export function processHandler(initial: boolean, restart: boolean): void {
    if (initial) {
        // do something
    }

    if (restart) {
        // do something
    }
}

/**
 * Returns a root-relative joined paths to with the supplied paths.
 *
 * @param {string} root A path string resolving to the root directory.
 * @param {(string|string[])} paths A string or an array of paths to resolve with respect to root.
 */
export function generateBasePathRelativeToRoot(
    root: string,
    paths: string | string[]
): string | string[] {
    if (Array.isArray(paths)) {
        return paths.reduce(
            (updatedPaths: string[], currentPath: string): string[] => [
                ...updatedPaths,
                path.join(root, currentPath)
            ],
            []
        );
    } else {
        return path.join(root, paths);
    }
}

/**
 * Clears the terminal screen.
 */
export function clearScreen(): void {
    const blank = "\n".repeat(process.stdout.rows);
    console.log(blank);
    cursorTo(process.stdout, 0, 0);
    clearScreenDown(process.stdout);
}
