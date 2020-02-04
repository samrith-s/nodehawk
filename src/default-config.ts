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
        type: "string",
        default: ""
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
        type: "number"
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
        type: "object",
        default: {}
    },
    "display.startMessage": {
        type: "string",
        default: "Starting"
    },
    "display.restartMessage": {
        type: "string",
        default: "Restarting"
    },
    "display.stopMessage": {
        type: "string",
        default: "Stopping"
    },
    clearScreen: {
        type: "boolean",
        default: true
    }
};
