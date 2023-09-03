
/* <iframe> tag inside html allows us to access another site within our site in visible view, ie we can take either
any content from someone else's site (of course with permission) and put it in our site,
if our site has an embedded <iframe> tag, Cypress will not be able to automate or communicate with it,
cypress currently does not support accessing elements inside iframes.
It is actually possible to accept this situation and solve it, but we will never have the original access to information from Cypress
Since Cypress has integrated jQery, we can manipulate dom */

describe("Handling Iframes & Modals", () => {

    it("Handle webdriver-uni iframe & modal", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true });
        //now that we are on the page where the iframe is inside the body, now we will find the iframe tag and manipulate it in the following way

        cy.get('#frame').then((iframe) => {
            const body = iframe.contents().find('body');//this is how we got the contents of the iframe

            cy.log(body); //here we make console log() of the body in order to see how the tag itself looks to us if we do not unpack it with cy.wrap()
            cy.log(cy.wrap(body));//now we use cy.wrap() to wrap  body so we can use cypress commands on it
            cy.wrap(body).as('iframe');
        });

        cy.get('@iframe').find('#button-find-out-more').click();//also now that we have clicked on the modules we cannot access it directly so we will repeat the action

        // cy.get('#myModal') this is incorrect access because again we need to access the logic assigned in the alias @iframe because of the wrap

        cy.get('@iframe').find('#myModal').as('modal');//now we assign @modal to the modal fetch logic

        cy.get('@modal').find('h4.modal-title').then((modal => {
            const modalText = modal.text();
            expect(modalText).to.include('Welcome to webdriveruniversity.com');
        }));
        cy.get('@modal').find('p').then((modal => {
            const modalText = modal.text();
            expect(modalText).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...');
        }));
        cy.wait(3000);
        cy.get('@modal').contains('Find Out More').click();
    });
});

