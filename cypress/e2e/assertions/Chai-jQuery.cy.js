describe("Test Conntact US form via automationteststore.com", () => {

    it("Should be able to enter text into input", () => {
      cy.visit("https://automationteststore.com/");
      cy.xpath("//a[contains(@href,'contact')]").click()
      cy.get('[name="first_name"]').type("Joe");
      cy.get('#ContactUsFrm_email').type("joe@gmail.com");

      cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')

      cy.get('#ContactUsFrm_enquiry').type("This is some coment");
      cy.get('.col-md-6 > .btn').click();//after submit we need to assert id with should have text example down :
      cy.get(".mb40 > :nth-child(3)").should('have.text', 'Your enquiry has been successfully sent to the store owner!')//assert for msg after submit
    });

  });