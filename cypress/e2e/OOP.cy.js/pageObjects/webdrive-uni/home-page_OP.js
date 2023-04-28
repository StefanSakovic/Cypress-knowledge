
class HomePage {

    visitHomepage(){

        cy.visit(Cypress.env("webdriverUrl"))
    }
    clickOn_ContuctUsButton(){
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })


    }

}

export default HomePage
