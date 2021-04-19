/// <reference types="Cypress" />

describe('Auth Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
      })
    
    it('Validate error message when password is empty', () => {
        cy.get('#user-name', { timeout: 4000 })
        .type('standard_user')
        cy.get('#login-button').click()
        cy.get('h3[data-test="error"]').should('exist').and('have.text', 'Epic sadface: Password is required')
    })  


    it('Validate error message when password is invalid', () => {
        cy.get('#user-name', { timeout: 4000 })
        .type('standard_user')
        cy.get('#password').type('secret_sauce100')
        cy.get('#login-button').click()
        cy.get('h3[data-test="error"]').should('exist').and('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })


    it('Login with valid username & password', () => {
        cy.get('#user-name', { timeout: 5000 })
        .type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#react-burger-menu-btn')
        .should('be.visible')
    })


})