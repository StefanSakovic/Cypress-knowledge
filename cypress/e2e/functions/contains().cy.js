
/*Contains je jako mocna stvar iz raloga sto moze duboko da zadje za kod i nadje elemnt vrlo lako
preko teksta a sta to znaci:
Contains mozemo koristiti cak i za pronalazenje elemnta po vrednosti po ovom primeru 
tj ukoliko trazimo izmedju dosta tagova element koji ima vrednost "submit the form":/*

//PRIME
/* <div id="main">
  <form>
    <div>
      <label>name</label>
      <input name="name" />
    </div>
    <div>
      <label>age</label>
      <input name="age" />
    </div>
    <input type="submit" value="submit the form!" />
  </form>
</div> */

//RESENJE:
// cy.get('form').contains('submit the form!').click()

// ----------------------------------JOS JEDAN NACIN GDE CONTAINS MOZEMO ISKORISTITI KAO TVRDNJU(ASSERTIONS)-------------------------------------------------

describe("Test Conntact US form via WebdriverUni", () => {

    it("Should be able to enter text into input", () => {

        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("Matrix");
        cy.get('[name="email"]').type("blablabal");//namerno smo pogresili da bi nam izbacio gresko koju tvrdimo dole sa contains();
        cy.get('textarea.feedback-input').type("This is some coment");
        cy.get('[type="submit"]').click();

            //assertions
        cy.get('body').contains('Error: Invalid email address')

    })
});