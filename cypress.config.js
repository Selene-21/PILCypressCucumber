const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/Features/**/**.feature",
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },

    env: {
      TAGS: "not @ignore",

      //Template.env
      E2E_TESTING_APLICATION_USERNAME_ACCESS: "xxxxxxx@gamil.com",
      E2E_TESTING_APLICATION_PASSWORD_ACCESS_DEV: "ZZZZZZZZ",
      E2E_TESTING_APLICATION_PASSWORD_ACCESS_TST: "LALALALALA",

      //URLs
      YVYTU_URL: "https://vientosdelaselva.com.ar/",
      EDEN_URL: "https://www.edenentradas.com.ar/sitio/contenido/inicio",
      CLARO_URL: "",
      ORBELY_URL: "https://orbely.com/",
    },
  },

  viewportHeight: 960,
  viewportWidth: 1536,
  video: false,
  retries: {
    openMode: 0,
    runMode: 0,
  },
  defaultCommandTimeout: 8000,
});
