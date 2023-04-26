
// U Sajpresu nam je potrebna nekad da izracunam koliko elemenata sadrzi neki element goga smo
//dohvatili preko klase i na taj naci nacin napravimo logiku tj optimizaciju da uradi click na sve ostale projekte
// kao sto smo objasnili u primerima ispod


// LOGIKA ZA LENGTH:

//  cy.get('.prdocutname').then(element=>{
//     const bla = Cypress.$(element).length
//     cy.log(bla, "NEKI TEKST");

// })

// Primer na sajtu automationstore.com:


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
    })

});

