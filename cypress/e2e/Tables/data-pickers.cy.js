
describe("Handling data-pickers on webdriver-uni", () => {

    it("Select date from the datepicker", () => {

        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
        //LOGIKA ZA SETOVANJA DATUMA

        //   let date = new Date;
        //   date.setDate(date.getDate());
        //   cy.log(date.getDate())  //tranutno je 16.dan u mesecu ali to moz

        //   let date2 = new Date;
        //   date2.setDate(date2.getDate() - 5)// za mesec mozemo koristiti metodu setMonth() i zvati je sa getMonth()

        //   cy.log(date2.getDate())


        let date = new Date();
        date.setDate(date.getDate())

        let futureYear = date.getFullYear() + 1//dodali smo jednu godinu
        cy.log(futureYear)

        let futureMonth = date.toLocaleString('default', {month:"long"});//pretvaramo broj od meseca u string da bih mogli raditi logiku
        cy.log(futureMonth)

        let day = date.getDate()
        cy.log(day)

        cy.get('.input-group-addon').click()

        const selectMonthAndYear = () => {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) => {

                cy.log(`Now its : ${currentDate.text()}`)
                cy.log(`Now its : ${futureMonth}`)

                if (!currentDate.text().includes(futureYear)) {//uvek ide prvo lokiga za godinu

                    // cy.wait(1000)
                    cy.get('.next').first().click()
                    cy.get('.input-group-addon').click()

                    selectMonthAndYear()
                }
            }).then(() => {
                 cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then((currentDate) => {

                     cy.log(`Now its : ${currentDate.text()}`)
    
                     if (!currentDate.text().includes(futureMonth)) { //pa onda logika za mesec nas vraca na trenutan mesec i tad prestaje krug..godina ce biti veca za jednu jer smo tako dodali
    
                         cy.wait(3000)
                         cy.get('.next').first().click()
                         cy.get('.input-group-addon').click()
    
                         selectMonthAndYear()
                     }
                 })
                
             })
        }
        selectMonthAndYear()
    });
});      