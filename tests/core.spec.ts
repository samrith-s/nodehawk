import path from "path";
import "mocha";
import * as Util from "../src/utils";
import { expect } from "chai";

describe("Core", () => {
    const {
        _,
        r,
        config: rootConfig,
        configs,
        ...config
    } = Util.loadConfiguration();

    describe("Configuration", () => {
        it("Configuration should have loaded.", () => {
            expect(config).to.be.an("object");
        });

        it("Configuration should be valid.", () => {
            const result = Util.checkConfig(config);
            expect(result.success).to.be.true;
        });

        it("Should properly generate paths successfully.", () => {
            const { root, paths } = config;
            const trueRoot = path.resolve(process.cwd(), root);
            const generatedPaths = Util.generateBasePathRelativeToRoot(
                trueRoot,
                paths
            );

            if (Array.isArray(generatedPaths)) {
                expect(generatedPaths).to.be.an(
                    "array",
                    "Generated paths is an array."
                );
                expect(generatedPaths).to.satisfy(
                    paths => paths.every(path => path.includes(trueRoot)),
                    "Generated paths contain proper root."
                );
            } else {
                expect(generatedPaths).to.include(trueRoot);
            }
        });
    });

    describe("Environment Variables", () => {
        Util.assignEnvironmentVariables(config);

        it("Should properly assign PORT environment variable.", () => {
            expect(process.env.PORT).to.satisfy(port => port == config.port);
        });

        it("Should properly assign custom environment variables.", () => {
            expect(process.env).to.satisfy(() =>
                Object.entries(config.env).every(
                    ([key, value]) => process.env[key] == value
                )
            );
        });
    });
});
