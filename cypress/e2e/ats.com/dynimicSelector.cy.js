describe("Test Conntact US form via automationteststore", () => {

    it("Should be able to enter text into input", () => {
      cy.visit("https://automationteststore.com/");
      // cy.get(".info_links_footer > :nth-child(5) > a").click(); // preko cypress recomendovanog tool-a
    //   cy.xpath("//a[contains(@href,'contact')]").click()//pronadjen element preko xpatha koji smo sami kreirali putem renorex-a

    //ONO STO U OVOJ LEKCIJI UCIMO JE Dynamicki CSS selektor koristeci "$";
      cy.get('a[href$="contact"]').click()
      //sto znaci nadji mi sve a tagove(tj linkove koristeci href kao atribut i njegovu vrednost koja se zavrsava stringom "stringom contact")
      cy.get('[name="first_name"]').type("Joe");
      cy.get('#ContactUsFrm_email').type("joe@gmail.com");
      cy.get('#ContactUsFrm_enquiry').type("This is some coment");
      // cy.get('.col-md-6 > .btn').click(); via cypress tool
      cy.get("button[title='Submit']").click() // preko css direktnog selektora koristeci tag button
      
    });

  });

  
