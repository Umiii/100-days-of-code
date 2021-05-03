/// <reference types="Cypress" />


describe('Link validation tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name', { timeout: 5000 })
        .type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
      })

    it('Validation working \'CONTINUE SHOPPING\' link', () => {
        let rand = new Set();
        while(rand.size<2){
            rand.add(Math.floor(Math.random() * 5));
        }

        rand.forEach((value) => {
            cy.get('.inventory_list').find('.inventory_item').eq(value).contains('Add to cart', { timeout: 6000 }).click()
          })
        
          cy.get('.shopping_cart_badge').should('have.text', rand.size)
          cy.get('.shopping_cart_link').click()
          cy.url().should('eq','https://www.saucedemo.com/cart.html')
          cy.get('#continue-shopping').click()
          cy.url().should('eq','https://www.saucedemo.com/inventory.html')

    })

    it('Validate working \'cancel\' button', () => {
        let rand = new Set();
        while(rand.size<2){
            rand.add(Math.floor(Math.random() * 5));
        }

        rand.forEach((value) => {
            cy.get('.inventory_list').find('.inventory_item').eq(value).contains('Add to cart', { timeout: 6000 }).click()
          })
        
          cy.get('.shopping_cart_badge').should('have.text', rand.size)
          cy.get('.shopping_cart_link').click()
          cy.get('#checkout').click()
          cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
          cy.get('#cancel').click()
          cy.url().should('eq', 'https://www.saucedemo.com/cart.html')

    })

    it('Add to cart and complete checkout', () => {
        let rand = new Set();
        let randomLength = Math.floor(Math.random() * 5)
        //Add unique random numbers to a set
        
        while(rand.size<randomLength){
            rand.add(Math.floor(Math.random() * 5));
        }
            
        rand.forEach((value) => {
            cy.get('.inventory_list').find('.inventory_item').eq(value).contains('Add to cart', { timeout: 6000 }).click()
          })

          cy.get('#shopping_cart_container .shopping_cart_badge').should('have.text', rand.size)
          cy.get('.shopping_cart_link').click()
          cy.get('#checkout').click()
          cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
          cy.get('#first-name').type('Zaza')
          cy.get('#last-name').type('Pelinka')
          cy.get('#postal-code').type('234')
          cy.get('#continue').click()
          cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html')
          cy.get('#finish').click()
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')

    })
})