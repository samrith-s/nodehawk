import Spinner, { Ora } from "ora";

import { Config } from "../interfaces";

import { Logger } from "./Logger";

export abstract class Provider {
    protected config: Config;
    protected log: Logger;
    protected spinner: Ora;

    constructor(config: Config) {
        this.log = new Logger(config);
        this.spinner = Spinner({
            prefixText: "[Nodehawk]"
        });
    }
}
