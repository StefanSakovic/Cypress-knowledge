
describe("Handling data-pickers on webdriver-uni", () => {

    it("Select date from the datepicker", () => {

        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
        //setting date:

        //   let date = new Date;
        //   date.setDate(date.getDate());
        //   cy.log(date.getDate())  //tranutno je 16.dan u mesecu ali to moz

        //   let date2 = new Date;
        //   date2.setDate(date2.getDate() - 5)// za mesec mozemo koristiti metodu setMonth() i zvati je sa getMonth()

        //   cy.log(date2.getDate())

        let date = new Date();
        date.setDate(date.getDate())

        let futureYear = date.getFullYear() + 1//p.s we added one year for a reason
        cy.log(futureYear)

        let futureMonth = date.toLocaleString('default', { month: "long" });//we convert the month number to a string so we can do the logic
        cy.log(futureMonth)

        let day = date.getDate()
        cy.log(day)

        cy.get('.input-group-addon').click()

        const selectMonthAndYear = () => {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) => {

                cy.log(`Now its : ${currentDate.text()}`)
                cy.log(`Now its : ${futureMonth}`)

                if (!currentDate.text().includes(futureYear)) {//always goes first logic for the year
                    // cy.wait(1000)
                    cy.get('.next').first().click()
                    cy.get('.input-group-addon').click()

                    selectMonthAndYear()
                };
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) => {

                    cy.log(`Now its : ${currentDate.text()}`)

                    if (!currentDate.text().includes(futureMonth)) { //so then the logic for the month returns us to the current month and then the circle ends.. the year will be one more because we added it

                        cy.wait(2000)
                        cy.get('.next').first().click()
                        cy.get('.input-group-addon').click()

                        selectMonthAndYear()
                    };
                });
            });
        };
        selectMonthAndYear()
    });
});      