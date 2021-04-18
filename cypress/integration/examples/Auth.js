/// <reference types="Cypress" />

describe('Auth Tests', () => {
    it('Login with valid username & password', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name', { timeout: 5000 })
        .type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#react-burger-menu-btn')
        .should('be.visible')
    })
})