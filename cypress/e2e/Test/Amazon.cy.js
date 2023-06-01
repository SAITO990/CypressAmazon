import { loginPage } from "../../support/pages/Login.Page";
const pathLogin = Cypress.env('endpoint').pathLogin
const {email, password} = Cypress.env('dataRegister')

describe('User Login Amazon',{testIsolation:false},()=>{
   before(()=>{
    cy.visit(pathLogin)
   });

   it('validate Login User', () => {
    loginPage.enterEmail(email)
    loginPage.clickContinue()
    loginPage.enterPassword(password)
    loginPage.clickLogin()
   });

   it('Home', () => {
        cy.visit('/')
        cy.url().should('contain', 'https://www.amazon.com/')
   });
}) 


















