import allure from "allure-commandline";

export const teardown = () => {
  const generation = allure([
    "generate",
    "--clean",
    "--report-dir",
    "allure-report",
    "allure-results",
  ]);

  return new Promise((resolve, reject) =>
    generation.on("exit", (exitCode) =>
      exitCode
        ? reject(
            new Error(
              `Allure report generation is finished with code: ${exitCode}`,
            ),
          )
        : resolve(),
    ),
  );
};
