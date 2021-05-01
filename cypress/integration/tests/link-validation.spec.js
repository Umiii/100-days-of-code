/// <reference types="Cypress" />

describe('Link validation tests', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name', { timeout: 5000 })
        .type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
      })

    it('Validate that \'ALL ITEMS\' link in sidebar menu works', () => {
        let rand = Math.floor(Math.random() * 6)
        cy.get('.inventory_item_label').eq(rand).find('a').click()
        cy.url().should('include', '?id=')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#inventory_sidebar_link').click()
        cy.url().should('not.include','?id=')
    })

    it('Validate that \'ABOUT\' link in sidebar menu works', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#about_sidebar_link').click()
        cy.url().should('eq', 'https://saucelabs.com/')
    })

    it('Validate that close button in sidebar menu works', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('.bm-menu-wrap').should('not.have.attr', 'hidden')
        cy.get('#react-burger-cross-btn').click()
        cy.get('.bm-menu-wrap').should('have.attr', 'hidden')
    })
    
    it('Validate working \'reset app state\' link', () => {
        let rand = new Set();
        //Add unique random numbers to a set
        while(rand.size<3){
            rand.add(1 + Math.floor(Math.random() * 6));
          }

          rand.forEach((value) => {
            cy.get('.inventory_list').find('.inventory_item').eq(value).contains('Add to cart', { timeout: 6000 }).click()
          })

       
        cy.get('.shopping_cart_link').should('have.descendants', 'span')
        cy.get('#react-burger-menu-btn', { timeout: 5000 }).click()
        cy.get('#reset_sidebar_link').click()
        cy.get('.shopping_cart_link').should('not.have.descendants','span')
    })
})