// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillTheFields', () => {
    cy.fixture("users").as("user").then(user => {
        //using data from users.json to fill the fields with the fillTheFields() function as u can see 
        //inside web-uni.cy.js file
        cy.get("input[name=first_name").type(user.name)
        cy.get("input[name=last_name").type(user.last_name)
        cy.get("input[name=email").type(user.email)
        cy.get("textarea[name=message").type(user.comment)
    });
});
Cypress.Commands.add('invalidEmail', (email) => {
    cy.fixture("users").as("user").then(user => {
        //using data from users.json to fill the fields with the fillTheFields() function as u can see 
        //inside web-uni.cy.js file
        cy.get("input[name=first_name").type(user.name)
        cy.get("input[name=last_name").type(user.last_name)
        cy.get("input[name=email").type(email)
        cy.get("textarea[name=message").type(user.comment)
    });
});
Cypress.Commands.add('assertion', (firstName, lastName, email, comment) => {
    cy.get('input[name=first_name]').should('have.value', firstName);
    cy.get('input[name=last_name]').should('have.value', lastName);
    cy.get('input[name=email]').should('have.value', email);
    cy.get('textarea[name=message]').should('have.value', comment);
});
