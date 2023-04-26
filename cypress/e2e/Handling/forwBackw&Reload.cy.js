describe("Validate links on webdriver-uni", () => {


    it("Confrim links redirect to the correct pages", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true});

        cy.url().should('include', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.wait(2000)
        
        cy.go('back');//vraca nas korak unazad
        cy.url().should('include', 'http://www.webdriveruniversity.com')

        cy.wait(2000)

        cy.reload()//reload the page
        // cy.reload(true)//reload the pabe without using cache
        cy.wait(2000)

        cy.go('forward')//vraca nas na korak unapred
        cy.url().should('include', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html')

    })
});

