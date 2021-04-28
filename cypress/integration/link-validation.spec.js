/// <reference types="Cypress" />

describe('Link validation tests', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name', { timeout: 5000 })
        .type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
      })

    it('Validate that \'all items\' link works', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#inventory_sidebar_link').click()

    })


})