describe("Handling Checkboxes", () => {

    /// cy.on WINDOWS ALERT se koristi za :
    it("check all boxes and make assertions(da programeer moze ubaciti for petlju)", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#checkboxes').find('label').then(el => {

            const checkboxLength = el.length;
            cy.log(el.length)

            const assertions = (el, option) => {
                return expect(el).to.have.text(option)
            }
            for (let k = 1; k <= checkboxLength; k++) {
                cy.get(`input[value="option-${k}"]`).check()
                cy.wait(2000)

                for (let i = 1; i <= checkboxLength; i++) {

                    if (i === k) {
                        cy.get('#checkboxes label').eq(i - 1).then((el) => {
                            assertions(el, `Option ${k}`)
                        })
                    }
                }
            }
        })
    })
});
