describe("Test Conntact US form via automationteststore", () => {

    it("Should be able to enter text into input", () => {
      cy.visit("https://automationteststore.com/");
      // cy.get(".info_links_footer > :nth-child(5) > a").click(); // preko cypress recomendovanog tool
      cy.xpath("//a[contains(@href,'contact')]").click()
      //pronadjen element preko xpatha koji smo sami kreirali putem 
      cy.get('[name="first_name"]').type("Joe");
      cy.get('#ContactUsFrm_email').type("joe@gmail.com");
      cy.get('#ContactUsFrm_enquiry').type("This is some coment");
      cy.get('.col-md-6 > .btn').click();
    });

  });