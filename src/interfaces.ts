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

export enum WatcherEvents {
    onBeforeStart = "onBeforeStart",
    onStart = "onStart",
    onBeforeChange = "onBeforeChange",
    onChange = "onChange",
    onBeforeStop = "onBeforeStop",
    onStop = "onStop"
}

export type WatcherEvent = keyof typeof WatcherEvents;

export type WatcherListeners = {
    [event in WatcherEvent]?: Function;
};

export enum LogLevels {
    FATAL = 0,
    ERROR = 1,
    WARN = 2,
    INFO = 3,
    DEBUG = 4
}

export enum LogPrefix {
    FATAL = "fatal",
    ERROR = "error",
    WARN = "warn",
    INFO = "info",
    DEBUG = "debug"
}
