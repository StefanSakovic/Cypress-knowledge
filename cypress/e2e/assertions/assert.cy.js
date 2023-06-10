
/* On sluzi za stanje  sajta aplikacije sa
očekivanim rezultatom, na primer, da li je naslov odgovarajući, da je neko polje popunjeno i
slično..Kao na primer tvrdim da ce se pojaviti greska posle unosa u login formu ili suprotno..
tvrdim da ce taj tekst biti visible sto nam daje dodatnu potvrdu na test jer ce se desiti nekad da test 
radi a da ne pokazuje poruku koju treba ...Chai biblioteka koristi 
SHOULD
EXPECT I
ASSERT



*Takodje kao tvrdnju nekada mozemo koristiti contains()..Kada ne mozemo naci element ili njegov tekst unutar vise elemnata
sto je objasnjeno u foldery webdriver-uni/contains().cy.js

takodje mozemo koristiti i and() kada zelimo da izvrsimo vise tvrdnji u jednom kodu..[NAPISI DODATNO KAKO]
*/


describe("Test Conntact US form via WebdriverUni", () => {

  it("Should be able to enter text into input", () => {
    cy.visit("https://automationteststore.com/");
    cy.xpath("//a[contains(@href,'contact')]").click()
    cy.get('[name="first_name"]').type("Joe");
    cy.get('#ContactUsFrm_email').type("joe@gmail.com");
    cy.get('#ContactUsFrm_enquiry').type("This is some coment");
    cy.get('.col-md-6 > .btn').click();//after submit we need to assert id with should have text example down :

    // I NACIN: Using should()

    //   cy.get(".mb40 > :nth-child(3)").should('have.text', 'Your enquiry has been successfully sent to the store owner!')

    //II NACIN: Using should() and expect

    cy.get(".mb40 > :nth-child(3)").should((el) => {
      expect(el).to.have.text('Your enquiry has been successfully sent to the store owner!')
    }
    )
  });

}); 