
describe("Handling Checkboxes", () => {

    /// cy.on WINDOWS ALERT se koristi za :
    it("check all boxes and make assertions", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#checkboxes').find('label').then(el=>{

            const checkboxLength = el.length;
            cy.log(el.length)
            
            cy.get('input[value="option-1"]').check().should('be.checked')
            
            cy.get('input[value="option-3"]').uncheck().should('not.be.checked')


            // //jedno od resenja za chekovanje svih check boxa je :

            // cy.get("input[type=checkbox]").check(["option-1","option-2","option-3","option-4"]).should('be.checked')

            // // DOK JE DRUGO RESENJE FOR PETLJA ILI MATRICA KAO U /checkboxOptimize.cy.js
            // for (let i = 1; i <= checkboxLength; i++) {
            //     cy.get(`input[value="option-${i}"]`).check()
            //     cy.wait(2000)
                
            //     if(i === 1){
            //         cy.get('#checkboxes label').eq(i-1).then((el)=>{

            //             const text = el.text()
            //             cy.log(text)
            //                 expect(el).to.have.text('Option 1')
            //         })
            //     }
            //     else if(i === 2){
            //         cy.get('#checkboxes label').eq(i-1).then((el)=>{

            //             const text = el.text()
            //             cy.log(text)
            //                 expect(el).to.have.text('Option 2')
            //         })
            //     }
            //     else if(i === 3){
            //         cy.get('#checkboxes label').eq(i-1).then((el)=>{

            //             const text = el.text()
            //             cy.log(text)
            //                 expect(el).to.have.text('Option 3')
            //         })
            //     }
            //     else if(i === 4){
            //         cy.get('#checkboxes label').eq(i-1).then((el)=>{

            //             const text = el.text()
            //             cy.log(text)
            //                 expect(el).to.have.text('Option 4')
            //         })
            //     }
            // }
        })


       
    }) 



});
 
