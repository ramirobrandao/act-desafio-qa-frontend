const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //acesso ao site/ambiente
    baseUrl: 'https://front.serverest.dev/',
    reporter: 'mochawesome',
    screenshotOnRunFailure: true,
    "reporterOptions": {
      "reportDir": "cypress/reports/mochawesome-report",
      "overwrite": false,
      "html": true,
      "json": true,
      "charts": true,
      "reportFilename": "report",
      "timestamp": "ddmmyyyy_HHMMss",
      "inlineAssets": true,
      "autoOpen": true,
      "reportPageTitle": "Relatório de execução de testes frontend",
      "embeddedScreenshots": true
    }
  },
});
