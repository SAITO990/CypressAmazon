class register{
    //Propiedades y elementos
    get = {
       nameInput: ()=> cy.get('[name="customerName"]'),
       emailInput: ()=> cy.get('[name="email"]'),
       passwordlInput: ()=> cy.get('[name="password"]'),
       confirmationPassword: ()=> cy.get('[name="passwordCheck"]'),
       submitButton: ()=> cy.get('#continue')
    }

    //Funciones / Methods
    enterName(name){
        this.get.nameInput().type(name)
    }

    enterEmail(email){
        this.get.emailInput().type(email)
    }

    enterPassword(password){
        this.get.passwordlInput().type(password)
    }

    checkPassword(cPassword){
        this.get.confirmationPassword().type(cPassword)
    }
    submit(){
        this.get.submitButton().click()
    }
}

export const registerPage = new register;