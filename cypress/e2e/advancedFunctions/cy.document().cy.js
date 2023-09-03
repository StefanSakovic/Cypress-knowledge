describe("Test Conntact US form via automationteststore.com", () => {

  it("Should be able to enter text into input", () => {
    cy.visit("https://automationteststore.com/");
    //after every visit of the link. We need to assert something like charset=utf-8 which means charset equal character -set
    //which means that our document supports all characters
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');// and() we use when we want another confirmation to connect with should

    cy.title().should('eq', 'A place to practice your automation skills!');

    cy.url().should('eq', 'https://automationteststore.com/');
    console.log("ASDASDASDASDASDASDASDASDASSD", cy.title());
  });

});