//npm install --save-dev cypress-file-upload

describe("Handling file uplouds", () => {


    it("Test for uploud file", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});

        cy.fixture("laptop.png", "base64").then(fileContent =>{//sa cyfixture smo locirali sliku

            cy.get('#myFile').attachFile( //sa cy get smo nasli input za choose file i 
                                        //dodelil my funkciji  attachFIle koja prima 2 objekta
                {
                    fileContent,
                    fileName: "laptop.png",
                    mimeType: "image/png"

                },
                {
                    uploadType : "input"// zelimo da byde upload preko inputa
                }
            )
        })
        cy.get("#submit-button").click();
        
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your file has now been uploaded!');
        })
                    //assert za  uploud file ALERT

    })

    it("Test for  NO uploud file", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});

        // cy.fixture("laptop.png", "base64").then(fileContent =>{

        //     cy.get('#myFile').attachFile( 
        //         {
        //             fileContent,
        //             fileName: "laptop.png",
        //             mimeType: "image/png"

        //         },{
        //             uploadType : "input"
        //         }
        //     )
        // }) // ukoliko uklonimo logiku za uploudovanje fajla onda mozemo napraviti test case ukoliko nije uploudovan fajli tj napraviti assert za no uploud file ALERT
        cy.get("#submit-button").click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!');
            //assert za no uploud file ALERT
        })
    })
});
