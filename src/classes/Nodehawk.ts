import { Watcher } from "./Watcher";
import { Provider } from "./Provider";

import { loadConfiguration, checkConfig } from "../utils";
import { Config, ConfigCheck, WatcherListeners } from "interfaces";

/**
 * Nodehawk is a hyper configurable watcher for all of your Node server development needs.
 * @example
 * ```
 * import Nodehawk from 'nodehawk';
 * const nodehawk = new Nodehawk();
 * ```
 */
export class Nodehawk extends Provider {
    private watcher: Watcher;

    /**
     * Create an instance of `Nodehawk` which reads the configuration file and spawns a watcher to execute commands.
     */
    constructor(userConfig?: Config, watcherListeners?: WatcherListeners) {
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

        /**
         * Create an instance of the watcher. This also starts the watch server.
         */
        this.watcher = new Watcher(this.config, watcherListeners);
    }
}
