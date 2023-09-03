describe("Test Conntact US form via automationteststore", () => {

    it("Calculate all non-Sale and Sale products", () => {
        cy.visit("https://automationteststore.com/");

        cy.get('.fixed_wrapper')
            .find('.prdocutname')
            .then(el => {
                const AllElementsLength = el.length;
                cy.log(AllElementsLength)

                cy.get('.thumbnail').find('.sale').as('SaleProducts');
                cy.get('@SaleProducts').then(el => {

                    const SaleLength = el.length;
                    cy.log(SaleLength)

                    const nonSaleElements = AllElementsLength - SaleLength;
                    cy.log(`Produkta koji nisu na popustu ima tacno ${nonSaleElements}`)
                });
            });
    });
});