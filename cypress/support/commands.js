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

Cypress.Commands.add('selectProduct', prodcutName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if ($el.text().includes(prodcutName)) {
            cy.wrap($el).click()
        }
    });

})

Cypress.Commands.add('userForm', (firstName, lastName, email, comment, selector, msg) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(comment)
    cy.get('[type="submit"]').click();
    cy.get(selector).contains(msg)

})
Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
    cy.wait(5000)
    cy.get('div .h-0 > .origin-top > .screenshot-height-container')
        .then($iframe => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body)
                .find('#textCaprtcha')
                .should('be.visible')
                .click();
        });
});

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
import 'cypress-file-upload';
