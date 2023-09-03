describe("Iterate over elements", () => {

    it("Log in information of all Hair Care products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('a[href*="https://automationteststore.com/index.php?rt=product/category&path="]').contains('Hair Care').click();
    });

    it.only("make specific assertions on product ", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('a[href*="https://automationteststore.com/index.php?rt=product/category&path="]').contains('Hair Care').click();

        cy.get("div.thumbnails.grid.row.list-inline").find('.fixed_wrapper').each((el, index,) => {

            if (index === 0) {
                expect(el.text()).to.include('Seaweed Conditioner');
            }
            cy.log(`index of element ${el.text()} is ${index}`);
        });
    });
});