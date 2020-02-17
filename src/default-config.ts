/**
 * @hidden
 * @packageDocumentation
 */

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
        default: 1500
    },
    bufferPoll: {
        type: "number",
        default: 100
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
        default: "Restarted"
    },
    "display.onBeforeStop": {
        type: "string|boolean",
        default: "Stopping..."
    },
    clearScreen: {
        type: "boolean",
        default: true
    },
    env: {
        type: "object",
        default: {}
    }
};
