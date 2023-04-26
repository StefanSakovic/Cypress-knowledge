
//Chaining nam omogucava da tvrdnje(obecanja) kao sto su should i assert vezujemo za isti kod



describe("testing with chaining mode ", () => {

    it("Test where we use chaining comands for assertions", () => {
        cy.visit("http://www.webdriveruniversity.com/");

        //asertions via attribute and his name:
        cy.get('#contact-us > .thumbnail > .section-title ').should('have.attr', 'class').and('eq', 'section-title')

        // DOUBLE asertions(its enough to choose just 1of them) via text name:
        cy.get('#contact-us > .thumbnail > .section-title > h1').should('have.text', 'CONTACT US').contains('CONTACT US')

        //assertions url
        cy.url().should('eq', 'http://www.webdriveruniversity.com/') // => true
    })

    it("Assertions via index", () => {

        cy.visit('https://automationteststore.com/');


        /// na ovaj nacin smo nasi div unutar diva pod rednim brojem 1 sto mozemo videti u inspect elementu
        // ukoliko bi u eq.(2) prebacio bi nas na sledeci detediv od ".fixed_wrappera"i to je moc find-a i eq-a u kombinaciji

        cy.get('.fixed_wrapper').find('.prdocutname').eq(1).click();

        /*DOLE JE PRIMER GDE SMO UBACILI U FOR PETLJU DA NE BI KUCALI ZA SVAKI ELEMENT ODVOJENO */

        // for (let i = 0; i < 3; i++) {
        //     cy.get('.fixed_wrapper').find('.prdocutname').eq(i).click();
        //     cy.visit('https://automationteststore.com/');
        // }
        
    
    }

    )

});

