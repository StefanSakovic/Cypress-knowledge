const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'uuxb4o',
  e2e: {
    hideXHRInCommandLog: true,////////THIS IS FOR REMOVING XHR Requests
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    // excludeSpecPattern: "cypress/e2e/Traversal/Traversal.cy.js",
    // novi nacin za ignorisanje fajla
    env: {
      first_name: "Milos",// sada mozemo pozvati environment sa   Cypress.env('first_name') gde god zelimo tj da ubacimo ime Stefan
      webdriverUrl: "http://www.webdriveruniversity.com/index.html",

    },
    
    // retries :  2, // stavili smo retries i za cypress openn i za cypress rub

    //takodje ovde mozemo menjati PageLoadout, folder SS, folder VIdea itd
    baseUrl : "http://www.webdriveruniversity.com/index.html", // ovde mozemo ukucati base url (za pristpuanje mozemo korstiti Cypress.config('baseUrl'))
    chromeWebSecurity: false,

    
  },
    

})


