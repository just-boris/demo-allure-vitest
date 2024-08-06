import AllureReporter from "allure-vitest/reporter";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["allure-vitest/setup"],
    globalSetup: ["./allure-generate.js"],
    reporters: ["default", new AllureReporter({})],
  },
});
