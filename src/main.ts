import { Config, ConfigAndChecks, Checks } from "interfaces";

import { Watcher } from "watcher";
import {
    loadConfiguration,
    getDefaultConfigAndChecks,
    validateLoadedConfig
} from "./utils";

/**
 * The entry Nodehawk class.
 */
export class Nodehawk {
    private watcher: Watcher;
    private config: Config;
    private checks: Checks;

    constructor() {
        const { config, checks }: ConfigAndChecks = getDefaultConfigAndChecks();
        this.config = loadConfiguration(config);
        this.checks = checks;

        validateLoadedConfig({ config: this.config, checks: this.checks });
    }
}
