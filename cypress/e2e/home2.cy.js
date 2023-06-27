describe('primera_prueba', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  
  it('segunda_prueba', () => {

    cy.getByData('success-message')
    cy.getByData('email-input')
    cy.getByData('submit-button')
  })


})