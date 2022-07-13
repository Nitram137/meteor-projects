describe('My First E2E Test', () => {
  it('Visits some kitchen\'s sink', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .type('beans@beans.beans')
      .should('have.value', 'beans@beans.beans')
  })
})