
describe("est Conntact US form via automationteststore", () => {

    it("Invoke through attribute", () => {

        cy.visit('https://automationteststore.com/');

        cy.get('.thumbnail').then((el) => {
            const lengtH = el.length;
            cy.log(lengtH);//16
        }) // ovo nam je samo da bi izracnuali koliko divova imamo sa klasom ".thumbnail"

        cy.get('.thumbnail').as('AllProducts');//Alies koristimo kako bi dali ime elementu sa kojim manipulisemo
        cy.get('@AllProducts').should('have.length', 16);//potvrda da ima 16 elementa sa klasom .thumbnail

        cy.get('@AllProducts').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
        //koriscenje invoke() za manipulisanje
        // u ovo primeru smo getovali ".thumbnail" i nasli njegov child element ".productcart" sa kojim smo pomocu invoka manipulisali sa njegovim atributom
        // i zbog toga je invoke dobara kada zelimo da npr assertujemo zeljeni element preko atributa


    })

});


///Takodje invoke mozemo korsitit za ubacivaj funkcija

//takodje invoke mozemo korsitii za new tab disebli ili kao da neki element ne bude
