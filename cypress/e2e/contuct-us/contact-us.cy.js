
describe('test suit for contact us page', () => {

  beforeEach(() => {
    // cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    //disabling xhr logs
    cy.visit('http://www.webdriveruniversity.com/');
    cy.get("#contact-us").invoke('removeAttr', 'target').click()
    cy.url().should("eq", "http://www.webdriveruniversity.com/Contact-Us/contactus.html")
  })

  it('passes', () => {
    cy.fillTheFields()//function from  support/contact-us-optimization.js which fill the fields with correct data(data from users.json).
    cy.wait(1000);
    cy.get("input[type=reset]").click();
    cy.assertion("", "", "", "");//function from  support/contact-us-optimization.js which make asssertion on empty fields after reset button.
    cy.fillTheFields()//function from  support/contact-us-optimization.js which fill the fields with correct data(data from users.json).
    cy.assertion("Stefan", "Sakovic", "stefansakovic49@gmail.com", "Just(do it)hire the right one(me)");
    //function from  support/contact-us-optimization.js which make asssertion on filled fields.
    cy.wait(1000);
    cy.get("input[type=submit]").click();;
    cy.get('h1').contains("Thank You for your Message!");;
    cy.url().should('eq', 'http://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html');
  });

  it("1st failed case where all fields are required", () => {
    cy.get("input[type=submit]").click();
    cy.get('body').contains("Error: all fields are required");
    cy.get('body').contains("Error: Invalid email address");
    cy.url().should('eq', 'http://www.webdriveruniversity.com/Contact-Us/contact_us.php');
  });

  it("2nd failed case with Invalid email address", () => {
    cy.invalidEmail("s");
    cy.get("input[type=submit]").click();
    cy.get('body').contains("Error: Invalid email address");
    cy.url().should('eq', 'http://www.webdriveruniversity.com/Contact-Us/contact_us.php');
  });
});

