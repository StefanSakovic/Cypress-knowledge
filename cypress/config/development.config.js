const { defineConfig } = require("cypress");

module.exports = defineConfig({

    e2e: {
        setupNodeEvents(on, config) {
        },
     baseUrl :  "http://www.WEB.com/index.html"
    },
    env: {
        "first_name" : "Stefan"
    }

});

/*Komanda za pokretanje svojeg config fila je:
npx cypress open --config-file cypress/config/development.config.js */


//kada nam otvori cypress tool mozemo videti promene i razliku u odnosu na difoltni
//cypress.config.js 

//Takodje mozemo i koristiti Cypress.env("first_name") kako bi proverili da je Stefan a ne Milos kao u cypress.config.js