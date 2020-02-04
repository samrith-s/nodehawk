import { ConfigAndChecks, Checks } from "../interfaces";

import { Watcher } from "./Watcher";
import { Provider } from "./Provider";

import {
    loadConfiguration,
    getDefaultConfigAndChecks,
    validateLoadedConfig
} from "../utils";

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
    private checks: Checks;

    /**
     * Create an instance of `Nodehawk` which reads the configuration file and spawns a watcher to execute commands.
     */
    constructor() {
        const { config, checks }: ConfigAndChecks = getDefaultConfigAndChecks();
        super(loadConfiguration(config));

        this.checks = checks;

        this.log.info(
            this.config.config
                ? `Configuration loaded from ${this.config.config}`
                : "No configuration found. Using default configurations."
        );
        validateLoadedConfig({ config: this.config, checks: this.checks });
        this.log.debug("Configuration verified.");

        this.watcher = new Watcher(this.config);
    }
}
