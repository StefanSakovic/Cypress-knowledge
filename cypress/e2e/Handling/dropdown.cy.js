describe("Handling DropDown", () => {

    it("Select specific values via select dropdownlist", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#dropdowm-menu-1').select('java').should('have.value', 'java');
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value', 'testng');
        cy.get('#dropdowm-menu-3').select('JQuery').should('have.value', 'jquery');

    });
});   