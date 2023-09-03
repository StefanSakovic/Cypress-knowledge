describe("testing with chaining mode ", () => {

    it("Assertions via index", () => {

        cy.visit('https://automationteststore.com/');

        /* Inside of parrent div, we find child div under serial number 1(eq(1)).
        If we put eq(2) it would transfer us to the next detector from ".fixed_wrapper" and that is the power of find and eq in combination*/
        cy.get('.fixed_wrapper').find('.prdocutname').eq(1).click();

        /*Now we can use some of the loops and make iteration through all child elements*/

        /*   for (let i = 0; i < 3; i++) {
            cy.get('.fixed_wrapper').find('.prdocutname').eq(i).click();
            cy.visit('https://automationteststore.com/');
        }
        */
        });
});

