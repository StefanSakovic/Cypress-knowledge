describe("Test Conntact US form via automationteststore.com", () => {

  it("Should be able to enter text into input", () => {
    cy.visit("https://automationteststore.com/");
    //after every visit of link.We need to assert something like charset=utf-8 which means charset equal character -set sto
    //znaci da nas document podrzava sve karaktere
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');// and() koristimo kada hocemo jos neku potvrdu da povezemo uz should

    cy.title().should('eq', 'A place to practice your automation skills!');


    
    cy.url().should('eq','https://automationteststore.com/')

    console.log("ASDASDASDASDASDASDASDASDASSD",cy.title())
  });

});