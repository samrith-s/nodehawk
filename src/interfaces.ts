/**
 * @packageDocumentation
 * @module Interfaces
 */

import chalk from "chalk";

export interface Config {
    paths?: string | [string];
    root?: string;
    exec?: string;
    port?: number;
    ignored?: string;
    logLevel?: number;
    buffer?: number;
    bufferPoll?: number;
    clearScreen?: boolean;
    display?: {
        onBeforeStart?: string;
        onStart?: string;
        onBeforeRestart?: string;
        onRestart?: string;
        onBeforeStop?: string;
    };
    env?: {
        [key: string]: string | number | boolean;
    };
    /**
     * These values have been added in the config to avoid our config validation failing.
     * They are attached to the config by the `rc` package, which is used to load a merged
     * version of `.nodehawkrc` and default config.
     */
    r?: any[];
    _?: any;
    config?: string;
    configs?: string[];
}

export type ConfigValue =
    | string
    | string[]
    | number
    | number[]
    | boolean
    | boolean[];

export interface ConfigFlat {
    [key: string]: ConfigValue;
}

export interface ConfigDefault {
    type: string;
    default: ConfigValue;
}

export interface ConfigCheck {
    success: boolean;
    keyError?: boolean;
    key?: string;
    desiredType?: string;
    providedType?: string;
}

export enum WatcherEvents {
    onBeforeStart = "ON_BEFORE_START",
    onStart = "ON_START",
    onBeforeChange = "ON_BEFORE_CHANGE",
    onChange = "ON_CHANGE",
    onBeforeStop = "ON_BEFORE_STOP",
    onStop = "ON_STOP"
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

export const LogPrefix = {
    FATAL: chalk.redBright.bold("[fatal]"),
    ERROR: chalk.red.bold("[error]"),
    WARN: chalk.yellow.bold("[warn]"),
    INFO: chalk.cyan.bold("[info]"),
    DEBUG: chalk.grey.bold("[debug]")
};
