import Spinner, { Ora } from "ora";

import { Config } from "../../interfaces";

/**
 * The Display class is the primary class responsible for providing spinner visualisations.
 * @category Higher Order
 */
export default class Display {
    /**
     * The configuration object passed to this instance.
     */
    private config: Config;

    /**
     * The `Ora` spinner instance which is useful for display purposes.
     */
    protected spinner: Ora;

    /**
     * A boolean to indicate if the process has started or not.
     */
    private started = false;

    /**
     * Create an instance of `Display` to handle all messages broadcasted on the terminal.
     * @param {Config} config The confguration object.
     */
    constructor(config: Config) {
        this.config = config;
        this.spinner = Spinner({
            prefixText: "[Nodehawk]"
        });
    }

    /**
     * Display the `config.display.onBeforeStart` message with the spinner before executing.
     */
    public onBeforeStart(): void {
        console.log("");
        if (this.config.display.onBeforeStart) {
            this.spinner = this.spinner.start(
                this.config.display.onBeforeStart
            );
            this.started = true;
        }
    }

    /**
     * Display the `config.display.onStart` message with the spinner after executing.
     */
    public onStart(): void {
        if (this.started && this.config.display.onStart) {
            this.spinner = this.spinner.succeed(this.config.display.onStart);
        }
    }

    /**
     * Display the `config.display.onBeforeRestart` message with the spinner before restarting.
     */
    public onBeforeRestart(): void {
        console.log("");
        if (this.started && this.config.display.onBeforeRestart) {
            this.spinner = this.spinner.start(
                this.config.display.onBeforeRestart
            );
        }
    }

    /**
     * Display the `config.display.onRestart` message with the spinner after restarting.
     */
    public onRestart(): void {
        if (this.started && this.config.display.onRestart) {
            this.spinner = this.spinner.succeed(this.config.display.onRestart);
        }
    }
}
