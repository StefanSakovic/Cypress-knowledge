//traversal ili obilazak


describe("Traversing DOM elements in Cypress", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });

      it("children() to get the children of DOM elements", () => {

        cy.get('.traversal-breadcrumb').children('.active').click();
        //we access children via the name of the selector as opposed to eq() where we access the element via number.
      });
    
      it("closest() to validate the closest ancestor DOM element", () => {//ancestor means that we are looking for the element's closest ancestor, i.e. its parent
        cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group');
      });
    
      it("find() to retrieve DOM elements that match a specific selector", () => {
        cy.get('.btn-group-toggle').find('.active').should('contain', 'Button-1');  //find me all elements with '.active' class name
      });
    
      it("first() to retrieve the first DOM element within elements ", () => {
        cy.get('.traversal-table > tbody > tr > td').first().should('contain', 'Andy');//we entered all tds of which there are 6 and hit only the first one with first();
      });
    
      it("last() to retrieve the last DOM element within elements", () => {
        cy.get('.traversal-table > tbody > tr > td').last().should('contain', 'Scott');//we entered all tds of which there are 6 and hit only the last one with last();
      });
    
      //////// SIBLING (sibling u bkv prevodu znaci brat ili sestra dok u programiranju znaci isti element pored)



      it("nextAll() to get all of the next sibling DOM elements within elements", () => {
      
        cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', '3')//sto znaci svi posle Tea(ne racunajuci Tea)pa do kraja imace length 3
    });                                                                                 //
    
      it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {

        cy.get('.traversal-drinks-list').contains('Coffee').nextUntil('Espresso').should('have.length', '4')//sto znaci uradi mi length od Coffe do Espresso =4;

      });
    
      it("prev() to get the previous sibling DOM element within elements", () => {

        cy.get('.traversal-drinks-list').contains('Tea').prev().should('have.text', 'Coffee')//sto znaci text prethodnog li je Coffe

      });
    
      it("prevAll() to get all previous sibling DOM elements within elements", () => {

        cy.get('.traversal-drinks-list').contains('Sugar').prevAll().should('have.length', '4')//sto znaci da ima 4elementa pre "Suggara"

      });
    
      it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {

        cy.get('.traversal-drinks-list').contains('Espresso').prevUntil('Tea').should('have.length', '3')//sto znaci uradi mi length od Espressa  do Tea = 3;
      });
    
      it("siblings() To get all sibling DOM elements of elements", () => {

        cy.get('.traversal-button-other-states .active').siblings().should('have.length', '3')//sto znaci daj mi duzinu svih brace i sestara(istih elemenata)
      });

      it("not() to remove DOM element(s) from the set of elements", () => {

        cy.get('.traversal-button-states').not('disabled').should('not.have.class', 'disabled')    //sto znaci daj mi sve buttone koji nisu disabled
      });
    
      it("parent() To get parent DOM element of elements", () => {

        cy.get('.traversal-mark').parent().should('contain','Lorem ipsum dolor sit amet')// sto znaci nas roditel bi trebao da sadrzi tekst lorem ipsum
      });
    
      it("parents() to get parents DOM element of elements", () => { //sto znaci matchuj mi roditelja sa tagom footer(ima ih sve ukupno 8 sto mozemo videti o command logu)
        cy.get('.traversal-cite').parents().should('match','footer')
      });
    
  })