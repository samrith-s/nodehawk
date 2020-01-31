import path from "path";
import { cursorTo, clearScreenDown } from "readline";
import rc from "rc";

import { Config, ConfigAndChecks } from "./interfaces";

import DEFAULT_CONFIG from "./default-config.json";

/**
 * Recursively strips the `Config` of `type` and `default` and resolves it to a sane default config matching the interface.
 *
 * Returns an object with `Config` and checks for validation against it.
 */
export function getDefaultConfigAndChecks(): ConfigAndChecks {
    function runConfigAccumulator(valueKey: string, entry?: object): object {
        const object: object = entry || DEFAULT_CONFIG;
        return Object.entries(object).reduce(
            (accumulator, [key, value]: [string, any]) => {
                accumulator[key] =
                    typeof object[key].default === "object"
                        ? runConfigAccumulator(valueKey, object[key].default)
                        : valueKey === "type"
                        ? value?.[valueKey].split("|")
                        : value?.[valueKey];

                return accumulator;
            },
            {}
        );
    }

    function runChecksAccumulator(
        accumulator: object = {},
        entry?: object
    ): object {
        const object: object = entry || DEFAULT_CONFIG;
        Object.entries(object).forEach(([key, value]: [string, any]) => {
            accumulator[key] = value?.type.split("|");

            if (typeof object[key].default === "object") {
                runChecksAccumulator(accumulator, object[key].default);
            }
        });

        return accumulator;
    }

    return {
        config: runConfigAccumulator("default"),
        checks: runChecksAccumulator()
    } as ConfigAndChecks;
}

export function validateLoadedConfig(configAndChecks: ConfigAndChecks): void {
    const { config, checks } = configAndChecks;

    function checker(key: string, configValue: any): boolean {
        const check: string[] = checks[key];
        let isVerified = false;

        if (!check) {
            return isVerified;
        }

        console.log("check", check);

        if (
            check.includes(typeof configValue) ||
            (check.includes("array") && Array.isArray(configValue))
        ) {
            isVerified = true;
        } else {
            const arrayChecks = check.filter(c => /\[/.test(c));

            if (arrayChecks.length) {
                for (const arrayCheck of arrayChecks) {
                    isVerified = configValue.every(
                        (value: string) =>
                            typeof value === arrayCheck.replace(/\[*\]*/g, "")
                    );
                }
            }
        }

        return isVerified;
    }

    function runChecker(currentConfig?: object): void {
        const configObj = currentConfig || config;

        for (const key in configObj) {
            if (!checker(key, configObj[key])) {
                if (checks[key]) {
                    throw new Error(
                        [
                            key,
                            "expected of type",
                            `'${checks[key].join(" | ")}'`,
                            "got",
                            `'${typeof configObj[key]}'`
                        ].join(" ")
                    );
                }

                throw new Error(key + " is not a valid key in the config.");
            } else if (
                typeof configObj[key] === "object" &&
                !Array.isArray(configObj[key])
            ) {
                runChecker(configObj[key]);
            }
        }
    }

    runChecker();
}

/**
 * Returns the loaded configuration object. Either from a .nodehawkrc or the default configuration file.
 */
export function loadConfiguration(defaultConfig: Config): Config {
    return rc("nodehawk", defaultConfig);
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
