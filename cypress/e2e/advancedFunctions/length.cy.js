
/*
 In Cypress, we sometimes need to calculate how many elements an element of our object contains
We can catch it through the class and in this way we create the logic, i.e. optimization  to click on all other projects
as we explained in the examples below */

// Logic for the  LENGTH:

//  cy.get('.prdocutname').then(element=>{
//     const bla = Cypress.$(element).length
//     cy.log(bla, "NEKI TEKST");

// })
// Example on automationstore.com:

describe("Test web-uni", () => {

    it("Assertions via index", () => {

        cy.visit('https://automationteststore.com/');

        cy.get('.fixed_wrapper')
            .find('.prdocutname')
            .then(divElement => {////SA THEN SE IZRACUNAVA LENGTH SA EACH() se KLIKCE NA SVE ILI SLICNO
                const divCount = divElement.length;
                cy.log(divCount)

                // for (let i = 0; i < divCount; i++) {
                //     cy.get('.fixed_wrapper').find('.prdocutname').eq(i).click();
                //     cy.visit('https://automationteststore.com/');
                // }
            });
    });
});

