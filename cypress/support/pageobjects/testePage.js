/// <reference types="cypress"/>

import testeElementos from '../ElementosPage/testeElementos'

const Elementos = new testeElementos

const URL = Cypress.config("baseUrl")

const API = Cypress.config("baseAPI")

class testePage {

  openUrl(){
    cy.visit(URL, { timeout: 60000 })
    cy.get(Elementos.sectionForm()).matchImageSnapshot('register-form')
  }

  verifyHeader(){
    cy.get(Elementos.header()).should('be.visible')
      .should('contain','Automation Demo Site')
  }

  verifyTitle(){
    cy.get(Elementos.title()).should('be.visible')
    .and('have.text', 'Register')
  }

  inputFirstName(){
    cy.get(Elementos.firstName()).focus().type('Emanuele Amanda',  {delay: 100})
      .should('have.value', 'Emanuele Amanda')
  }

  inputLastName(){
    cy.get(Elementos.lastName()).focus().type('Marques',  {delay: 100})
      .should('have.value', 'Marques')
  }

  inputAddress(){
    cy.get(Elementos.address()).type('Rua dos Alfeneiros, nº 4', {delay: 100})
      .should('have.value', 'Rua dos Alfeneiros, nº 4')
      .and('have.class', 'ng-valid-parse')
  }

  inputEmail(){
    cy.get(Elementos.email()).type('teste@gmail.com',  {delay: 100})
      .should('have.value', 'teste@gmail.com')
      .and('have.class','ng-valid-email')
  }

  inputPhone(){
    cy.get(Elementos.phone()).type('9999999999',  {delay: 100})
      .should('have.value', '9999999999')
      .and('have.class', 'ng-valid-required')
  }

  selectGender(){
    cy.get(Elementos.genderF()).not('[disabled]')
      .check().should('be.checked')
      .should('be.checked')

    cy.get(Elementos.genderM()).should('not.be.checked')
  }

  selectHobbies(){
    cy.get(Elementos.allHobbies()).not('[disabled]').check()
      .should('have.value', 'Cricket', 'Movies', 'Hockey')
      .and('be.checked')
  }

  chooseLanguage(){
    cy.get(Elementos.languages()).click({force: true, delay: 200})
    cy.get(Elementos.optionsLanguages()).contains('Estonian').click()

    //assertion
    cy.get(Elementos.languages()).should('contain','Estonian')
    cy.get(Elementos.languages()).should('have.length', 1)
  }

  chooseSkill(){
    cy.get(Elementos.skill()).select('Javascript', {force:true})
      .should('have.value', 'Javascript')
  }

  chooseCountry(){
    cy.get(Elementos.country()).select('Brazil')
      .should('have.value', 'Brazil')
      .and('have.length', 1)
  }

  selectCountry(){
    cy.get(Elementos.selectCountry()).select('New Zealand', {force: true})
      .should('have.value', 'New Zealand')
      .and('have.length', 1)
  }

  dateOfBirth(){
    cy.get(Elementos.yearOfBirth()).select('1994')
    cy.get(Elementos.monthOfBirth()).select('September')
    cy.get(Elementos.dayOfBirth()).select('13')

    //assertion
    cy.get(Elementos.yearOfBirth()).should('have.value', '1994')
    cy.get(Elementos.monthOfBirth()).should('have.value', 'September')
    cy.get(Elementos.dayOfBirth()).should('have.value', '13')
  }

  inputPassword(){
    cy.get(Elementos.password()).type('autt123.LL')
      .should('have.class','ng-valid-minlength')
      .invoke('val').should('not.be.empty')
  }

  confirmPassword(){
    cy.get(Elementos.confPassword()).type('autt123.LL')
      .invoke('val').should('not.be.empty')

    cy.get(Elementos.password()).invoke('val').then(passwords => {
    cy.get(Elementos.confPassword()).should('have.value', passwords)
    })
  }

  submitForm(){
    cy.intercept(
      'POST',
      API
    ).as('res')
    cy.get(Elementos.btnSubmit()).click()
  }

  validateRegistered(){
    cy.wait('@res').then(res => {
      expect(res.status).be.eq(200)
    })
  }

  refreshForm(){
    cy.get(Elementos.btnRefresh()).click()
  }

  validateRefreshForm(){
    cy.get(Elementos.sectionForm()).matchImageSnapshot('register-form')
  }
}
export default testePage;
