import { WatchOptions } from "chokidar";

export interface Config {
    paths?: string | [string];
    root?: string;
    exec?: string;
    port?: number;
    ignored?: string;
    logLevel?: number;
    bufferInterval?: number;
    clearScreen?: boolean;
    watcher?: WatchOptions;
    display?: {
        startMessage?: string;
        restartMessage?: string;
        stopMessage?: string;
    };
    /**
     * These values have been added in the config to avoid our config validation failing.
     * They are attached to the config by the `rc` package, which is used to load a merged
     * version of .nodehawkrc and default config.
     */
    _?: object;
    config?: string;
    configs?: string[];
}

export interface Checks {
    [key: string]: string[];
}

export interface ConfigAndChecks {
    config: Config;
    checks: Checks;
}

export interface WatcherListeners {
    onBeforeStart?: Function;
    onStart?: Function;
    onBeforeChange?: Function;
    onChange?: Function;
    onBeforeStop?: Function;
    onStop?: Function;
}
