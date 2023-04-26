describe("Iterate over elements", () => {

    it("Log in information of all Hair Care products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('a[href*="https://automationteststore.com/index.php?rt=product/category&path="]').contains('Hair Care').click();

    });


    it.only("Add specific product to basket", () => {
        
        cy.visit("https://automationteststore.com/");
        cy.get('a[href*="https://automationteststore.com/index.php?rt=product/category&path="]').contains('Hair Care').click();


      

        cy.get("div.thumbnails.grid.row.list-inline").find('.fixed_wrapper').each((el,index,) =>{
            

            if(index === 0){
                expect(el.text()).to.include('Seaweed Conditioner');//PROBAJ DA KLIKNES NA SVE ILI ODRADIS ASSERT
            }

            cy.log(`index elementa ${el.text()}je  ${index}  `);
            
        });
;
    });

});