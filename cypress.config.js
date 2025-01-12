const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    blockHosts: ["*mc.yandex.ru"],
    baseUrl:"https://www.testograf.ru/ru/blog/feedback-form-template"
  },
});

// Все параметры конфига: https://docs.cypress.io/guides/references/configuration
