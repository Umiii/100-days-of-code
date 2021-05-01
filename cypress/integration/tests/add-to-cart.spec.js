/// <reference types="Cypress" />

describe('Add to Cart Scenarios', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name', { timeout: 5000 })
        .type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
      })

    it('Add 1st item in list to cart', () => {

        cy.get('.inventory_list').each(($el, $index, $list) => {
            $el
            .first()
            .find('.inventory_item_description > .inventory_item_label > #item_4_title_link .inventory_item_name').click()
        })
        cy.contains('Add to cart').click()
        cy.get('span.shopping_cart_badge').should('have.text', '1')

    })

    it('Add last item in list to cart', () => {
        cy.get('.inventory_list').each(($el, $index, $list) => {
            $el
            .last()
            .find('.inventory_item_description > .inventory_item_label > #item_4_title_link .inventory_item_name')
            .click()
        })
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('span.shopping_cart_badge').should('have.text', '1')
        
    })

    it('Add 3 random items to cart from homepage', () => {
       
        let rand = new Set();
        //Add unique random numbers to a set
        while(rand.size<3){
            rand.add(Math.floor(Math.random() * 5));
        }
        
        //Click on 3 random Add to Cart buttons on the homepage
        rand.forEach((value) => {
            cy.get('.inventory_list').find('.inventory_item').eq(value).contains('Add to cart', { timeout: 6000 }).click()
          })
        
        cy.get('#shopping_cart_container .shopping_cart_badge').should('have.text', '3')
        
    })

    it('Add items to cart & validate count', () => {
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
    })
    

    it('Add item and View item in Cart', () => {
        
        let rand = Math.floor(Math.random() * 6)
        cy.get('.inventory_list').find('.inventory_item').eq(rand).contains('Add to cart', { timeout: 6000 }).click()
        cy.get('.shopping_cart_link').click()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')

    })

    it('Navigate to product detail page, Add & View item in Cart', () => {
        let rand = Math.floor(Math.random() * 6)
        cy.get('.inventory_item_label').eq(rand).find('a').click()
        cy.contains('Add to cart').click()
        cy.get('.shopping_cart_link').click()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
    })


}) 