describe("Verify Autocomplite dropdown", () => {

    /// cy.on WINDOWS ALERT se koristi za :
    it("Select specific products  via autocomplete list", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list').find('div').then((el) => {
            const lengthDiv = el.length;
            
            for (let i = 0; i < lengthDiv; i++) {

                cy.get('#myInputautocomplete-list div').eq(i).then((el) => {
                    const products = el.text()
                    const product = ['Avacado', 'Asparagus', 'Almond','Artichoke','Apple'];

                    if (products === product[i]) {
                        
                        cy.get(el).click()
                        cy.get('#submit-button').click()
                        cy.url().should('include', `http://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html?food-item=${product[i]}`)
                        cy.get('#myInput').type('A')
                        
                    }
                })
            }
            cy.get('#myInput').type('{backspace}')
        })

    })
})  
