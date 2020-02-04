import { ConfigAndChecks, Checks } from "interfaces";

import { Watcher } from "./Watcher";
import { Provider } from "./Provider";

import {
    loadConfiguration,
    getDefaultConfigAndChecks,
    validateLoadedConfig
} from "../utils";

/**
 * The entry Nodehawk class.
 */
export class Nodehawk extends Provider {
    private watcher: Watcher;
    private checks: Checks;

    /**
     * Create an instance of Nodehawk which
     */
    constructor() {
        const { config, checks }: ConfigAndChecks = getDefaultConfigAndChecks();
        super(loadConfiguration(config));

        this.checks = checks;

        validateLoadedConfig({ config: this.config, checks: this.checks });
    }
}
