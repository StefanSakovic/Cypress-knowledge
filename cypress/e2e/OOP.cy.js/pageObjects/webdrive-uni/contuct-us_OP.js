class Login_Form {

    contuctUsLogin(firstname,lastname, email,comment,selector, msg){

      cy.userForm(firstname, lastname,
        email,comment,selector,msg)
        cy.screenshot()
    }


}

export default Login_Form