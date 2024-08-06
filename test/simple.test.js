import { test as baseTest } from "vitest";

baseTest("this works", async () => {
  await allure.attachment("testing", "base", "text/plain");
});

export const testFixture = baseTest.extend({
  async dummy({}, use) {
    await use("it works");
  },
});

testFixture("attachment works", async ({ dummy }) => {
  await allure.attachment("testing", dummy, "text/plain");
});
