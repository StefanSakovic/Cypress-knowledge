//loaduje podatki iz fajla u nas framework...mozemo da ga ubacimo preko patha foldera takodje mozemo da ga encode ....
///takodje mozemo da ucitavamo podatke iz users.json tj baratanje za json fajlovima 
///takodje mozemo da ubacujemo slike///
///moze da enkoduje razne fajlove binarne(datoteke ili programo koji ili druge netekstualni datike) ili ascii(eski fajl)tj tekstulne poruke sa extenzijom txt
// moze da encoduje utf-8 , mozemo uploudovati fajlove preko njega itd

//u ovom primeru cemo pokazati kako da informacije poput firstname lastname email mozemo ubaciti u externi fajl(inostran/spoljasnji fajl)



describe("Test Contact Us form via WebdriverUni", () => {
    before(function() {
        cy.fixture('example').then((data) =>{
            //this.data = data;
            globalThis.data = data; // cy.fixture je kao parametar 'example' uzeo example json jer u fixture folderu imamo example.json
        })
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type(data.first_name);// na ovaj nacin smo pristupili firstnameu iz example.json fajla iz fixtures foldera
        cy.get('[name="last_name"]').type(data.last_name);// sto nam omogucava optimizaciju samog koda
        cy.get('[name="email"]').type(data.email);
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
})
