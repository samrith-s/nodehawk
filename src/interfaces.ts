export interface Config {
    basePath: string | [string];
    root: string;
    exec: string;
    port: number;
    bufferInterval: number;
    ignored: string;
    logLevel: number;
    watcher: {
        usePolling: boolean;
        interval: number;
        binaryInterval: number;
        followSymlinks: boolean;
        disableGlobbing: boolean;
    };
    display: {
        startMessage: string;
        restartMessage: string;
        stopMessage: string;
    };
}

export interface WatcherOptions {
    onBeforeStart?: Function;
    onStart?: Function;
    onBeforeRestart?: Function;
    onRestart?: Function;
    onBeforeChange?: Function;
    onChange?: Function;
    onBeforeStop?: Function;
    onStop?: Function;
}
