import homePage from "../pages/homePage"

describe('HOME 2', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  context("seccion 1", () => {
    it('PRIMERA_PRUEBA', () => {

      cy.getByData('email-input')
      cy.getByData('submit-button')
      cy.getByData('success-message')
    })  
  })

  context("seccion 2", () => {
    it('SEGUNDA_PRUEBA', () => {

      homePage.elements.emailInput.type("prueba@mail.com")
      homePage.clickOnSubmitBtn()
      homePage.elements.successMessage().should("exist").contains("prueba@mail.com")
        
        
  context("seccion 3", () => {
    it('TERCERA PRUEBA', () => {
    
      cy.getByData('email-input')
      cy.getByData('submit-button')
      cy.getByData('success-message')
        })  
      })

  })

  context("seccion 4", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })  
  })
  
  })

})
