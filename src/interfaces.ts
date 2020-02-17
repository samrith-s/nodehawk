/**
 * @packageDocumentation
 * @module Interfaces
 */

import chalk from "chalk";

/**
 * @category Configuration
 */
export interface Config {
    /**
     * @default `src`
     */
    paths?: string | [string];

    /**
     * @default `.`
     */
    root?: string;

    /**
     * @default `echo No execution command specified!`
     */
    exec?: string;
    /**
     * @default 4000
     */
    port?: number;
    /**
     * @default /node_modules/
     */
    ignored?: string | RegExp;
    /**
     * @default 3
     */
    logLevel?: number;
    /**
     * @default 1500
     */
    buffer?: number;
    /**
     * @default 100
     */
    bufferPoll?: number;
    /**
     * @default true
     */
    clearScreen?: boolean;
    display?: {
        /**
         * @default Starting..
         */
        onBeforeStart?: string;
        /**
         * @default Started
         */
        onStart?: string;
        /**
         * @default Restarting..
         */
        onBeforeRestart?: string;
        /**
         * @default Restarted
         */
        onRestart?: string;
        /**
         * @default Stopping..
         */
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
    /**
     * @ignore
     */
    r?: any[];
    /**
     * @ignore
     */
    _?: any;
    /**
     * @ignore
     */
    config?: string;
    /**
     * @ignore
     */
    configs?: string[];
}

/**
 * @ignore
 */
export type ConfigValue =
    | string
    | string[]
    | number
    | number[]
    | boolean
    | boolean[];

/**
 * @ignore
 */
export interface ConfigFlat {
    [key: string]: ConfigValue;
}

/**
 * @ignore
 */
export interface ConfigDefault {
    type: string;
    default: ConfigValue;
}

/**
 * @ignore
 */
export interface ConfigCheck {
    success: boolean;
    keyError?: boolean;
    key?: string;
    desiredType?: string;
    providedType?: string;
}

/**
 * @category Configuration
 */
export enum WatcherEvents {
    onBeforeStart = "ON_BEFORE_START",
    onStart = "ON_START",
    onBeforeChange = "ON_BEFORE_CHANGE",
    onChange = "ON_CHANGE",
    onBeforeStop = "ON_BEFORE_STOP",
    onStop = "ON_STOP"
}

/**
 * @ignore
 */
export type WatcherEvent = keyof typeof WatcherEvents;

/**
 * @ignore
 */
export type WatcherListeners = {
    [event in WatcherEvent]?: Function;
};

/**
 * @category Configuration
 */
export enum LogLevels {
    FATAL = 0,
    ERROR = 1,
    WARN = 2,
    INFO = 3,
    DEBUG = 4
}

/**
 * @category Configuration
 */
export const LogPrefix = {
    FATAL: chalk.redBright.bold("[fatal]"),
    ERROR: chalk.red.bold("[error]"),
    WARN: chalk.yellow.bold("[warn]"),
    INFO: chalk.cyan.bold("[info]"),
    DEBUG: chalk.grey.bold("[debug]")
};
