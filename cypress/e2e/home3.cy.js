describe('Subscripcion al correo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it("Suscribirse a la lista", () => {
    cy.getByData("hero-heading")
    })

  it("Permitir al usuario suscribirse a la lista de correo", () => {
    cy.getByData('email-input').type("prueba@mail.com")
    cy.getByData('submit-button') .click()
    cy.getByData('success-message').should("exist").contains("prueba@mail.com")
    })

  it("No Permitir al usuario direcciones de correo invalidas", () => {
    cy.getByData('email-input').type("prueba")
    cy.getByData('submit-button') .click()
    cy.getByData('success-message').should("not.exist")
    })  

  it("No permitir direcciones ya subscritas", () => {
    cy.getByData("email-input").type("prueba@mail.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
     .should("exist")
     .contains("already exist. Please use a different email address.")
    })  
  
})