describe("Testing tabs on web-driver-uni", () => {


    it("Links in new tab", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
        
// koriscenje invoke-a za new tab

    })
});

