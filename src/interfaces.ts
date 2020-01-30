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
}

export interface WatcherListeners {
    onBeforeStart?: Function;
    onStart?: Function;
    onBeforeChange?: Function;
    onChange?: Function;
    onBeforeStop?: Function;
    onStop?: Function;
}
