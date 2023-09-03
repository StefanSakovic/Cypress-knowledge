
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
            userDetails[index] = el.text();//userdetails of [0] will be dzon//so user of 1 will be Smith we do that with each
            //and so we filled userdetails with texts from td, each got its own index
            cy.log(userDetails[index]);

        }).then(() => {
            for (let i = 0; i < userDetails.length; i++) {//so we then went through the entire userDetails array
                //in order to be able to find only those that are numbers

                //ow the array is full of strings and even strings of numbers, so number converts those numbers under the string into a number of type number                                  
                if (Number(userDetails[i]))

                    numb += Number(userDetails[i])
            };
            cy.log(numb);
            expect(numb).to.eq(322);
        });
    });

    it.only("Calculate and assert the age of a given user based on last name", () => {

        cy.get('#thumbnail-1').find('tr>td:nth-child(2)').each((el, index) => {
            const text = el.text();
            cy.log(text);

            if (text === "Woods") {
                cy.get('#thumbnail-1').find('tr>td:nth-child(2)').eq(index).next().then(el => {

                    const age = el.text();
                    expect(age).to.be.eq('80');

                });
            };
        });
    });
});