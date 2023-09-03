//In cypress, we have the possibility to create more configuration folders as you can see in the model below.

const { defineConfig } = require("cypress");

module.exports = defineConfig({

    e2e: {
        setupNodeEvents(on, config) {
        },
        baseUrl: "http://google.com"
    },
    env: {
        "first_name": "Stefan"
    }

});

/*We use terminal command for applying our configuration:
npx cypress open --config-file cypress/config/development.config.js 

When we open our tool(Cypress dashboard) we can see the changes of our config(settings)
(cypress.config.js) 

U can easly check this with Cypress.env(because they are not the same in different configs) like :

Cypress.env("first_name")

*/
