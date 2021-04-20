/// <reference types="Cypress" />

describe('Add to Cart Scenarios', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name', { timeout: 5000 })
        .type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
      })

    it('Add 1st item in list to cart & logout', () => {
        
    })
})