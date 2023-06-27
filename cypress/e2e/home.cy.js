describe('template spec', () => {
  it('primera_prueba', () => {
    cy.visit('http://localhost:3000/')
  })

    it('segunda_prueba', () => {
      cy.visit('https://example.cypress.io')
    })

    
    it('tercera_prueba', () => {
      cy.visit('http://localhost:3000/')
    })

    it('xpath_test', () => {
      cy.visit('https://example.cypress.io')
      cy.xpath('//h1').contains("Kitchen Sink")
      cy.xpath('//h1').should('have.length', 3);
    });
  
})