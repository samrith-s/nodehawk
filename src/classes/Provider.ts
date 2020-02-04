import Spinner, { Ora } from "ora";

import { Config } from "../interfaces";

import { Logger } from "./Logger";

/**
 * The base provider class that all other classes extend from. This helps to share the configuration, loggers and spinners.
 */
export abstract class Provider {
    /**
     * The `Config` object provided to this instance.
     */
    protected config: Config;

    /**
     * The `Logger` instance which allows various log types based on level.
     */
    protected log: Logger;

    /**
     * The `Ora` spinner instance which is useful for display purposes.
     */
    protected spinner: Ora;

    /**
     * The `Provider` acts as a base class to extend from. By itself, it does nothing. It's useful for initialising and sharing useful things to it's child class.
     * @param {Config} config The configuration object passed from the derived class to `Provider`.
     */
    constructor(config: Config) {
        this.config = config;
        this.log = new Logger(config);
        this.spinner = Spinner({
            prefixText: "[Nodehawk]"
        });
    }
}
