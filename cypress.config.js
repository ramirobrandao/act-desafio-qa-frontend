const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //acesso ao site/ambiente
    baseUrl: 'https://front.serverest.dev/'
  },
});
