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

        cy.get('.inventory_list').each(($el, $index, $list) => {
            $el
            .first()
            .find('.inventory_item_description > .inventory_item_label > #item_4_title_link .inventory_item_name').click()
        })
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('span.shopping_cart_badge').should('have.text', '1')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()

    })

    it('Add last item in list to cart & logout', () => {
        cy.get('.inventory_list').each(($el, $index, $list) => {
            $el
            .last()
            .find('.inventory_item_description > .inventory_item_label > #item_4_title_link .inventory_item_name')
            .click()
        })
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('span.shopping_cart_badge').should('have.text', '1')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link', { timeout: 5000 }).click()
    })

    it('Add 3 random items to cart from homepage & logout', () => {
        const $el = Cypress.$('.inventory_list')
        console.log($el.get(4))
        
        
    })
    
}) 