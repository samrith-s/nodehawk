import path from "path";
import { cursorTo, clearScreenDown } from "readline";
import rc from "rc";
import flatten, { unflatten } from "flat";

import {
    Config,
    ConfigValue,
    ConfigDefault,
    ConfigFlat,
    ConfigCheck
} from "./interfaces";

import DEFAULT_CONFIG from "./default-config";

/**
 * Loads a configuration object. Merging .nodehawkrc (if it exists) and the default configuration file. Otherwise returns the default configuration.
 */
export function loadConfiguration(): Config {
    const defaultConfig: Config = unflatten(
        Object.entries(DEFAULT_CONFIG).reduce<ConfigFlat>(function(
            flatConfig: ConfigFlat,
            [key, value]: [string, ConfigDefault]
        ): ConfigFlat {
            return {
                ...flatConfig,
                [key]: value.default
            };
        },
        {} as ConfigFlat)
    ) as Config;

    return rc("nodehawk", defaultConfig) as Config;
}

/**
 * Checks whether the configuration object types match the ones expected.
 * @param {Config} config The configuration object to check.
 */
export function checkConfig(config: Config): ConfigCheck {
    const configFlat: ConfigFlat = flatten(config);
    const entries: [string, ConfigValue][] = Object.entries(configFlat);

    for (const entry of entries) {
        const [key, entryValue]: [string, ConfigValue] = entry;
        const defaultValueObject: ConfigDefault = DEFAULT_CONFIG[key];

        if (!defaultValueObject) {
            return {
                success: false,
                keyError: true,
                key
            };
        }

        const { type: desiredType }: ConfigDefault = defaultValueObject;
        const availableTypes: string[] = desiredType.split("|");
        const arrayTypes: string[] = availableTypes.filter(type =>
            /\[*\]/.test(type)
        );
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const providedType: string = resolveTypeof(entryValue);

        if (
            !availableTypes.includes(providedType) ||
            (Array.isArray(entryValue) &&
                !arrayTypes.some(arrayType => {
                    entryValue.every(
                        value =>
                            typeof value === arrayType.replace(/\[|\]/g, "")
                    );
                }))
        ) {
            return {
                success: false,
                key,
                desiredType,
                providedType
            };
        }
    }

    return {
        success: true
    };
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

export function resolveTypeof(value: any): string {
    if (Array.isArray(value)) {
        return "array";
    }

    if (typeof value === "object" && value instanceof RegExp) {
        return "regexp";
    }

    if (typeof value === "undefined" || value === null) {
        return "undefined";
    }

    return typeof value;
}
