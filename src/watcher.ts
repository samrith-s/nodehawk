import chokidar from "chokidar";
import { Config, WatcherOptions } from "./interfaces";

export class Watcher {
    private config: Config;
    private options: WatcherOptions;

    constructor(config: Config, options?: WatcherOptions) {
        this.config = config;

        this.options = {
            onBeforeStart: null,
            onStart: null,
            onBeforeRestart: null,
            onRestart: null,
            onBeforeChange: null,
            onChange: null,
            onBeforeStop: null,
            onStop: null,
            ...options
        };
    }
}
