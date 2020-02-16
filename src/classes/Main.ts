/**
 * The primary class which triggers the instatiation of all other classes.
 *
 * @packageDocumentation
 * @module Main
 * @preferred
 * @extends Provider
 */

import Watcher from "./Watcher";
import Provider from "./Provider";

import { Config, ConfigCheck, WatcherListeners } from "interfaces";

import {
    loadConfiguration,
    checkConfig,
    assignEnvironmentVariables,
    clearScreen
} from "../utils";

/**
 * Nodehawk is a hyper configurable watcher for all of your Node server development needs.
 * @example
 * ```
 * import Nodehawk from 'nodehawk';
 * const nodehawk = new Nodehawk();
 * ```
 */
export default class Main extends Provider {
    /**
     * Instance of `Watcher` created for this instance.
     */
    private watcher: Watcher;

    /**
     * Create an instance of `Nodehawk` which reads the configuration file and spawns a watcher to execute commands.
     * @param {Config} [userConfig] Part of a custom config, to override defaults. Useful while running Nodehawk programmatically.
     * @param {WatcherListeners} [watcherListeners] A list of custom listeners to run against certain events.
     */
    constructor(userConfig?: Config, watcherListeners?: WatcherListeners) {
        userConfig = userConfig ?? {};

        const {
            config: configPath,
            configs: configsPath,
            _,
            ...config
        } = loadConfiguration();

        super({
            ...config,
            ...userConfig
        });

        const {
            success,
            key,
            keyError,
            desiredType,
            providedType
        }: ConfigCheck = checkConfig(this.config);

        if (this.config.clearScreen) {
            clearScreen();
        }

        if (!success) {
            if (keyError) {
                this.log.fatal(
                    `Key ${key} is not valid. Please refer to the configuration document and provide a valid key.`
                );
            } else {
                this.log.fatal(
                    `Key ${key} in configuration has a type mismatch. Expected ${desiredType
                        .split("|")
                        .join(", ")} but instead got ${providedType}.`
                );
            }
        }

        this.log.info(
            configPath
                ? `Configuration loaded from ${configPath}`
                : "No configuration found. Using default configurations."
        );
        this.log.debug("Configuration verified.");

        assignEnvironmentVariables(this.config);

        /**
         * Create an instance of the watcher. This also starts the watch server.
         */
        this.watcher = new Watcher(this.config, watcherListeners);
    }
}
