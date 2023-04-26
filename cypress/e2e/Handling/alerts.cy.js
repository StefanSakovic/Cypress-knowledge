
describe("Handling Pop Alerts", () => {

        /// cy.on WINDOWS ALERT se koristi za :
    it("Click on the button and make assertions for alert msg", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#button1').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!');
        })
    })

        /// cy.on WINDOWS CONFIRM se koristi za :
    it("Assertion of Confirmation for press OK on Pop Alert MSG ", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#button4').click()

        cy.on('window:confirm', () => {//WINDOWS CONFIRM 
            return true;

        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')

        
    })
            /// cy.on WINDOWS CONFIRM se koristi za :
    it("Assertion of Confirmation for press CANCEL on Pop Alert MSG ", ()=>{

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#button4').click()

        cy.on('window:confirm', () => {//WINDOWS CONFIRM 
            return false;

        })

        cy.get('#confirm-alert-text').contains('You pressed Cancel!')

    })

    it("Assertion of Confirmation using cy.stub()", ()=>{
        // cy.stub koristimo kako bi na neki nacin napravili mesto 'window:confirm'
        // tj u primeru smo rekli stavi mi window:confirm u stub da bi mogli sa njim manuipulisati i 
        //na taj nacin uradili potvrdu da nam wind:confirm poruka ide sa pratecom porukom: "Press a button"
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });

        const stub = cy.stub()

        cy.get('#button4').click()

        cy.on('window:confirm',stub)

        cy.get('#button4').click().then( () => {

            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }
        )

       

    })
});

