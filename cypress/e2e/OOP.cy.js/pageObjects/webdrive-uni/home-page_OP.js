
class HomePage {

    visitHomepage(){

        cy.visit(Cypress.env("webdriver-url"))
    }
    clickOn_ContuctUsButton(){
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })


    }

}

export default HomePage
