/// <reference types="cypress" />

describe("Login - SauceDemo", () => {
  it("Deve exibir formulário de login", () => {
    cy.visit("https://www.saucedemo.com")

    //cy.get("#user-name").should("be.visible")
    //cy.get("#password").should("be.visible")
    //cy.get("#login-button").should("be.visible")

    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()

    cy.url().should("include", "/inventory")
    cy.get(".inventory_list").should("be.visible")

  })
})
