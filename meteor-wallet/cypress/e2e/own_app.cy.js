describe('Testing My App', () => {
    it('successfully loads and creates a contact', () => {
        cy.visit('/')

        cy.get('#name').type('Mr Krabs')
        cy.get('#email').type('money@money.money')
        cy.get('#imageUrl').type('images/mrkrabs.jpg')

        cy.contains('Save Contact').click()

        cy.contains('Mr Krabs')
    })

    it('deletes previously created contact', () => {
        cy.get('[data-test="archive Mr Krabs"]').click()
        cy.contains('Mr Krabs').should('not.exist')
    })
})