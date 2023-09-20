import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { defineConfig } from "cypress";
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: '**/*.cy.ts',
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
// import { defineConfig } from "cypress";

// export default defineConfig({
//   component: {
//     devServer: {
//       framework: "angular",
//       bundler: "webpack",
//     },
//     specPattern: "**/*.cy.ts",
//   },
// });
