
describe("Calculating and making assertion", () => {

    it("Invoke through attribute", () => {

        cy.visit('https://automationteststore.com/');

        cy.get('.thumbnail').then((el) => {
            const lengtH = el.length;
            cy.log(lengtH);//16
        }); // calculate how many divs we have with the class ".thumbnail"

        cy.get('.thumbnail').as('AllProducts');//We use Alias to give the name to the element that we are manipulating
        cy.get('@AllProducts').should('have.length', 16);//assertion for caluclating how many divs we have with class .thumbnail

        cy.get('@AllProducts').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
        /*
         In this example we got div with the class ".thumbnail" and found its child element ".productcart".With the help of invoke() we can  manipulate with attributes of element.
        That's why invoke() is useful when we want, for example, to assert the desired element via attributes.
          */
    });
});


