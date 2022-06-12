// All Cypress taken from: https://docs.cypress.io/api/table-of-contents
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    
    cy.wait(1000)
    cy.get('#index-btn').click()

    cy.wait(2000)

    cy.visit('http://localhost:3000/memory')
    
    cy.get('.1').click({ multiple: true, force: false })
    cy.wait(2500)
    cy.get('.2').click({ multiple: true, force: false })
    cy.wait(2500)

    cy.visit('http://localhost:3000/dyk')

    cy.wait(1000)
    cy.get('#dyk-btn').click()
    cy.wait(2000)

    cy.get('#dyk-btn').click()
    cy.wait(5000)
    
    cy.visit('http://localhost:3000/update')
    cy.visit('http://localhost:3000/about')
  })
})