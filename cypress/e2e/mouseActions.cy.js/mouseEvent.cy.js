describe("Handling mouse-actions", () => {

    /// cy.on WINDOWS ALERT se koristi za :
    it("Sroll element into view ", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });

    }) 

    it("should be able to drag and drop a draggable item", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });

        cy.get('#draggable').trigger('mousedown', {which: 1})// dohvatili smo mali prozor i sa mousedown drzimo klick(mouse down znavi holdovati tj drzati levi klik)
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})//zatim smo dohvatili veliki prozor i cursorom mali sa mousemove prebacili na veliki,zatim smo 
    })                                                                             //sa mouseup pustili klik na njega


    
    it("should be able to make dblclick on element", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });

        cy.get('#double-click').dblclick()
        
        });


        it.only("should be able to click and hold", () => {

            cy.visit('http://www.webdriveruniversity.com');
            cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
    
            cy.get('#click-box').trigger('mousedown',{which:1}).then(el =>{//nismo uradili mouseup polse mouse downa sto naci da drzimi kursor na elementu

                expect(el).to.have.css('background-color', 'rgb(0, 255, 0)')
            })
            
            });
    });