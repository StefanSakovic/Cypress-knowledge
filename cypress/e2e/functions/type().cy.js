describe("Test Conntact US form via WebdriverUni", () => {

    it("Should be able to enter text into input", () => {
      
      cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
      cy.get('[name="first_name"]').type("Joe");
      cy.get('[name="last_name"]').type("Matrix");
      cy.get('[name="email"]').type("joe@gmail.com");
      cy.get('textarea.feedback-input').type("This is some coment");
      cy.get('[type="submit"]').click();

      //assertions
      cy.url().should('eq', 'http://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html') // => true

  
    });

    it("Should NOT be able to enter text into input", () => {
      
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Tom");
        cy.get('[name="last_name"]').type("Blog");
        cy.get('textarea.feedback-input').type("This is some coment by fail test");
        cy.get('[type="submit"]').click();

        //assetions

        cy.url().should('eq', 'http://www.webdriveruniversity.com/Contact-Us/contact_us.php') // => true

        



    
      });
      
    
    
  
    // it("Should NOT be able to submit a succsseful submission via contact us as all field are required", () => {
  
    // })
  });