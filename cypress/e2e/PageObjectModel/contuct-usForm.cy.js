import HomePage from "./home-page_OP.js";
import Login_Form from "./contuct-us_OP.js";

describe("Test Contact Us form via WebdriverUni", () => {
  const home_page = new HomePage();
  const login_form = new Login_Form();

  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    //cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
    //cy.visit("http://webdriveruniversity.com/")
    //cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
    home_page.visitHomepage();
    home_page.clickOn_ContuctUsButton();
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    //cy.get('#contact-us').click({force: true})
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('[name="email"]').type(data.email)
    // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
    // cy.get('[type="submit"]').click();
    // cy.get('h1').should('have.text', 'Thank You for your Message!')

    //I example
    // cy.userForm(Cypress.env("first_name"), data.last_name, data.email,
    //   "How can I learn Cypress?", "h1", "Thank You for your Message!"
    // );

    //II example

    login_form.contuctUsLogin(Cypress.env("first_name"), data.last_name, data.email,
      "How can I learn Cypress?", "h1", "Thank You for your Message!");
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
    // cy.get('[type="submit"]').click();
    // cy.get('body').contains('Error: all fields are required');
    login_form.contuctUsLogin(data.first_name, data.last_name, " ", "How can I learn Cypress?",
      "body", "Error: Invalid email address");
  });
});
