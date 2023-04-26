
describe("Handling data-tables on webdriver-uni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("Calculate and assert total age of users", () => {

        const userDetails = [];//ovde smo stavili array kak bi svaki td tabele bio pod indexom
        let numb = 0;

        cy.get('#thumbnail-1').find('tr>td').each((el, index) => {
            // cy.log(index)
            userDetails[index] = el.text()//userdetails od [0] bice dzon//pa user od 1 bice Smith to radimo sa each
            // i tako smo napunili userdetails sa tekstovima od td, svaki je dobio svoj index
            cy.log(userDetails[index])

        }).then(() => {
            for (let i = 0; i < userDetails.length; i++) {// pa smo zatim prosli kroz ceo array userDetails 
                //da bi mogli forpetljom naci samo one koji su broj

                //sada je array pun stringova pa cak i stringova brojeva pa number te brojeve pod stringom pretvara u broj tipa number                                                  
                if (Number(userDetails[i]))

                    numb += Number(userDetails[i])
            }
            cy.log(numb)
            expect(numb).to.eq(322)
        })
    })

    it.only("Calculate and assert the age of a given user based on last name", () => {

        cy.get('#thumbnail-1').find('tr>td:nth-child(2)').each((el, index) => {

            const text = el.text()
            cy.log(text)
            if (text === "Woods") {
                cy.get('#thumbnail-1').find('tr>td:nth-child(2)').eq(index).next().then(el => {

                    const age = el.text()
                    expect(age).to.be.eq('80')

                })
            }
        })
    })
})  