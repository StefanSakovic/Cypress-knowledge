describe("Test Conntact US form via WebdriverUni", () => {

    it("Should be able to enter text into input", () => {
        cy.visit("https://automationteststore.com/");
        // cy.get(".info_links_footer > :nth-child(5) > a").click(); // preko cypress recomendovanog tool
        cy.xpath("//a[contains(@href,'contact')]").click()

            .then((el) => {
                cy.log("tekst ovog elementa je " + el.text())
            });
           
    });

});