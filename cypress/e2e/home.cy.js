describe('template spec', () => {
 /* it('primera_prueba', () => {
    cy.visit('http://localhost:3000/')
  })

    it('segunda_prueba', () => {
      cy.visit('https://example.cypress.io')
    })

    
    it('tercera_prueba', () => {
      cy.visit('http://localhost:3000/')
    })*/

    //********En e2e.js esta el comando para permitir comandos tipo xpath*****//
    it('xpath_test', () => {
      cy.visit('https://example.cypress.io')
      cy.xpath('//h1').contains("Kitchen Sink") //------(docs.cypress.io/guides/references/assertions)
      cy.xpath('//h1').should('have.length', 1);
      cy.xpath('//h1').should('equal', "Kitchen Sink")
    });

    it.only("Las caracteristicas son correctas", () => {
      cy.visit('http://localhost:3000/')
      cy.get("dt") /* GET: Obtiene elementos del DOM para un selector: (https://docs.cypress.io/api/commands/get#docusaurus_skipToContent_fallback)*/
    })
  
})