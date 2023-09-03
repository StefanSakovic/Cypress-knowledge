describe("Handling RadioButtons", () => {

    it("Check specific radio buttons", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });

        // cy.get('#radio-buttons input').first().check() one of the options to clik on the first radio bittons

        cy.get('#radio-buttons input').eq(0).check().should('be.checked');
        //make a check and aseertions for all radio buttons:

        // const checks = (index) => {
        //     return cy.get('#radio-buttons input').eq(index).check().should('be.checked')
        // }
        // cy.get('#radio-buttons input').then(el =>{
        //     const lengthRB = el.length
        //     cy.log(lengthRB)

        //     for (let i = 0; i < lengthRB; i++) {
        //         checks(i)

        //     }
        // })
    })
    it("Validate a state of specific radio buttons", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });

        // cy.get('#radio-buttons input').first().check() one of the options to clik on the first radio bittons

        cy.get('#radio-buttons-selected-disabled input').eq(0).check().should('be.checked');
        cy.get('#radio-buttons-selected-disabled input').eq(1).should('be.disabled'); ////BE DISABLED
        cy.get('#radio-buttons-selected-disabled input').eq(2).check().should('be.checked');

    });
});
