

describe("Test Conntact US form via WebdriverUni", () => {

  it("Should be able to submit a succsseful submission via contact us", () => {
    
    cy.visit('http://www.webdriveruniversity.com')
    cy.get("#contact-us > .thumbnail").click() // pronadjen element preko cypress meta
    // cy.get('a[href*="Contact-Us/contactus.html"]').click() // pronadjen elemet preko inspect elementa(href taga)
    // cy.get("#contact-us").click() // pronadjen elemet preko unique id-a

    // postoje elementi kojima se ne moze pridji iz nekih programerskih razloga(strukture html ili samog koda),
    //tada mozemo koristiti click({force:true})

  //   it("Should not be able to submit as successful submission via contact us form as all fields are required", () => {
  //     //cypress code
  // });
  })

})