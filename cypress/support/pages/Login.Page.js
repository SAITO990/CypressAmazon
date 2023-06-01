class login{
    get = {
        emailInput: ()=> cy.get('#ap_email'),
        passwordInput: ()=> cy.get('#ap_password'),
        btnContinue: ()=> cy.get('#continue'),
        btnLogin: ()=> cy.get('#signInSubmit')
    }

    enterEmail(email){
        this.get.emailInput().type(email)
    }

    enterPassword(password){
        this.get.passwordInput().type(password)
    }

    clickContinue(){
        this.get.btnContinue().click()
    }

    clickLogin(){
        this.get.btnLogin().click()
    }
}

export const loginPage = new login;