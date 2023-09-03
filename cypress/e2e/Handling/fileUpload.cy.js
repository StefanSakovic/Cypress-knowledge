//npm install --save-dev cypress-file-upload

describe("Handling file uplouds", () => {

    it("Test for uploud file", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true });
        cy.fixture("laptop.png", "base64").then(fileContent => {//we locate(encode) png format with cy.fixture() (also like json.file)

            cy.get('#myFile').attachFile( /*with cy.get() we find the input for "choose file" 
                and chain with the function attachFile()*/
                {
                    fileContent,
                    fileName: "laptop.png",
                    mimeType: "image/png"

                },
                {
                    uploadType: "input"//we won do it vie a input
                }
            );
        });
        cy.get("#submit-button").click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your file has now been uploaded!');
        })
        //assert for uploud file ALERT
    })

    it("Test for  NO uploud file", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true });
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
        // })

        /* If we remove the logic for uploading the file, then we can make a test case "if no files are uploaded.
        Also we can  make an assertion for no upload file ALERT*/
        cy.get("#submit-button").click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!');
            //assert for no uploud file ALERT
        });
    });
});
