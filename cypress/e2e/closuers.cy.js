


describe("Chaininig and closuers", ()=>{

it("Closures on autmationstore.com/contuctus", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    // cy.get("#field_11").text().should('contain', 'First name:') ovo ne bi radilo jer je text()jQuery funkkcija i mora da stoji kao closure unutar then-a

   cy.get("#field_11").then((el)=> {

    const elText = el.text();
    
    expect(elText).to.contain('First name:')//u ovom slucaju koristimo expect kao closure thena
    cy.log(el.text())// takodje closure expect moze koristiti promenljivu koja pripada funkciji cy.get.then()
    
})
    
   
    
})

})











