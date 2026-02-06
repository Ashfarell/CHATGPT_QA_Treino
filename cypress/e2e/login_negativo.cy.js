/// <reference types="cypress" />

describe("Login - Cenário negativo", () => {

  it("Deve mostrar erro ao logar com senha inválida", () => {

    // Ação
    cy.visit("https://www.saucedemo.com")

    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("senha_errada")
    cy.get("#login-button").click()

    // Validações
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Username and password do not match")

    cy.url().should("include", "/")
  })
})

