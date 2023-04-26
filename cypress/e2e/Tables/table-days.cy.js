describe("Handling data-pickers on webdriver-uni", () => {

    it("Select date from the datepicker", () => {

        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
     
        let date = new Date;
        date.setDate(date.getDate())

        let futureYear = date.getFullYear()//dodali smo jednu godinu
        cy.log(futureYear)

        let futureMonth = date.toLocaleString('default', {month:"long"});//pretvaramo broj od meseca u string da bih mogli raditi logiku
        cy.log(futureMonth)

        let futureDay = date.getDate()
        cy.log(futureDay)

        cy.get('.input-group-addon').click()

        cy.log(futureDay)
        const selectFutureDay = () => {
            cy.get('[class="today day"]').contains(futureDay).click()

            }

            selectFutureDay()    
    });
});      