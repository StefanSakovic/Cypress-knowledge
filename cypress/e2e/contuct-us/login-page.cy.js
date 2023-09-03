
describe("Test suit for login-page", () => {
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        //disabling xhr logs;
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get("#login-portal").invoke('removeAttr', 'target').click();
        cy.url().should("eq", "http://www.webdriveruniversity.com/Login-Portal/index.html");

    });
    // In this example,
    //i will make only negative test cases because there is no valid one
    it("test case with failed pass", () => {
        cy.get("#text").type("Stefan");
        cy.get("#password").type("hire me");
        cy.get("#login-button").click();

        cy.on('window:alert', (str) => {//handling pop Alert
            expect(str).to.equal('validation failed');
        });
    });
});