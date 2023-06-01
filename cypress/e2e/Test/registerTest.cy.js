import { registerPage } from "../../support/pages/Register.Page";
const pathRegister = Cypress.env('endpoint').pathRegister
const {name, email, password, confirmPassword} = Cypress.env('dataRegister')


describe('User Register',()=>{
  beforeEach(()=>{
    cy.visit(pathRegister)
  });

  it('validate regiter successful', () => {
    registerPage.enterName(name)
    registerPage.enterEmail(email)
    registerPage.enterPassword(password)
    registerPage.checkPassword(confirmPassword)
    registerPage.submit()
  });
})