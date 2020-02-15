export default {
    // basic configuration
    paths: {
        type: "string|[string]",
        default: "./src"
    },
    root: {
        type: "string",
        default: "."
    },
    ignored: {
        type: "string|regexp",
        default: /node_modules/
    },
    exec: {
        type: "string",
        default: "echo No execution command specified!"
    },
    port: {
        type: "number",
        default: 4000
    },
    logLevel: {
        type: "number",
        default: 3
    },

    // performance
    buffer: {
        type: "number",
        default: 300
    },
    watcher: {
        type: "object",
        default: {}
    },
    "watcher.usePolling": {
        type: "boolean",
        default: false
    },
    "watcher.interval": {
        type: "number",
        default: 100
    },
    "watcher.binaryInterval": {
        type: "number",
        default: 300
    },
    "watcher.followSymlinks": {
        type: "boolean",
        default: true
    },
    "watcher.disableGlobbing": {
        type: "boolean",
        default: false
    },
    "watcher.depth": {
        type: "number|undefined"
    },
    "watcher.alwaysStat": {
        type: "boolean",
        default: false
    },
    "watcher.awaitWriteFinish": {
        type: "boolean|number|object",
        default: false
    },
    "watcher.awaitWriteFinish.stabilityThreshold": {
        type: "number"
    },
    "watcher.awaitWriteFinish.pollInterval": {
        type: "number"
    },

    // display
    display: {
        type: "object"
    },
    "display.onBeforeStart": {
        type: "string|boolean",
        default: "Starting..."
    },
    "display.onStart": {
        type: "string|boolean",
        default: "Started"
    },
    "display.onBeforeRestart": {
        type: "string|boolean",
        default: "Restarting..."
    },
    "display.onRestart": {
        type: "string|boolean",
        default: "Restarting..."
    },
    "display.onBeforeStop": {
        type: "string|boolean",
        default: "Stopping..."
    },
    clearScreen: {
        type: "boolean",
        default: true
    }
};
