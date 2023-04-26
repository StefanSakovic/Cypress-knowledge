/* <iframe> tag unutar html nam omogucava da pristupimo drugom sajtu unutar naseg sajta u vidnom prikazu tj mozemo uzeti bili
kojki kontent iz nekog drugok sajta(naravno sa dozvolom) i staviti u nas sajt,
ako nas sajt ima ugradjen tag <iframe>, Sajpres nece moci da automatizujeili ili komunicira sa istim,
sajpres trenutno ne podrzava pristum elementim unutar iframe-a.
Zapravo je moguce prihvatiti ovu situaciji i resiti je ali nikada necemo imati izvorni pristup informacijama iz Sajpresa
Posto Sajpres ima integrisan jQery mi mozemo manipuisati sa dom-om */


describe("Handling Iframes & Modals", () => {

    /// cy.on WINDOWS ALERT se koristi za :
    it("Handle webdriver-uni iframe & modal", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true });
        //sada kada smo na strani gde je iframe unutar body-a,sada cemo naci iframe tag i manipulisati na sledeci nacin

        cy.get('#frame').then((iframe) => {
            const body = iframe.contents().find('body')//na ovaj nacin smo dohvatili contente iframa-a

            cy.log(body) // ovde smo namerno consol logovali body kako bi videli kakonam rvraa sam tag ukoliko ga ne otpakujemo
            cy.log(cy.wrap(body))//cy wrap body tj raspakivanje koristimo kako bi mogyli koristiti cypress komande nad njim

            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click()//takodje sada kada smo kliknuli na module ne mozemo mu direktno pristupiti
        
        
        // cy.get('#myModal') ovo je nepravilno pristupanje jer opet trebamo da pristupimo logici zadatuju u aliasu @ifram zbog wrapa

        cy.get('@iframe').find('#myModal').as('modal')//sada smo logici za dohvatanje modala dodeli @modal

        cy.get('@modal').find('h4.modal-title').then((modal=>{
            const modalText = modal.text()
            expect(modalText).to.include('Welcome to webdriveruniversity.com')
        }))
        cy.get('@modal').find('p').then((modal=>{
            const modalText = modal.text()
            expect(modalText).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')
        }))
        cy.wait(3000);
        cy.get('@modal').contains('Find Out More').click()
    })

});

