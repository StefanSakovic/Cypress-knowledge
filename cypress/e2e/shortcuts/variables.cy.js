
describe("Test Conntact US form via WebdriverUni", () => {

    it("Verifying variables,cypress comands and jquery commands", () => {
        const url = "https://automationteststore.com/";
        cy.visit(url)

        const makeUpNav = cy.get('a[href*="https://automationteststore.com/index.php?rt=product/category&path=').contains("Makeup");
        const skinCareNav = cy.get('a[href*="https://automationteststore.com/index.php?rt=product/category&path=').contains("Skincare");
        
        makeUpNav.click();
        skinCareNav.click()

        cy.visit(url)
    });



    it.only("Verifying text of the header with using variables", () => {

        const url = "https://automationteststore.com/";
        cy.visit(url)

        const makeUpNav = cy.get('a[href*="https://automationteststore.com/index.php?rt=product/category&path=').contains("Makeup");
        makeUpNav.click();

        cy.get("h1 .maintext").contains("Makeup").should('have.text', "Makeup").then((el) => {//should assertions
            const textOfheader = "Header text is "+el.text()

            cy.log(textOfheader);  /// najbolje je variable deklarisati unutar thena kada se ispisuje tekst
            
        });
        
        cy.url().should('eq', "https://automationteststore.com/index.php?rt=product/category&path=36")//assertions for url
    });

});
