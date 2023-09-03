describe("purpose of using text()", () => {

    it("Should be able to enter text into input", () => {
        cy.visit("https://automationteststore.com/");
        // cy.get(".info_links_footer > :nth-child(5) > a").click(); 
        cy.xpath("//a[contains(@href,'contact')]").click()

            .then((el) => {
                cy.log("text of this element is " + el.text());
            });
    });
});