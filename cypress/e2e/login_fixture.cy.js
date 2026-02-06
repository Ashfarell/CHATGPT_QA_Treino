/// <reference types="cypress" />

describe("Login usando fixture", function () {

  before(function () {
    cy.fixture("usuarios").then((usuarios) => {                 //1º  pegue os usuários do fixture usuarios.json
      this.usuarios = usuarios                                  //2ºPegue o usuário c/ senha inválida
    })
  })

  it("Deve mostrar erro com senha inválida", function () {
    cy.visit("https://www.saucedemo.com")

    cy.get("#user-name").type(
      this.usuarios.usuarioSenhaInvalida.username
    )

    cy.get("#password").type(
      this.usuarios.usuarioSenhaInvalida.password
    )

    cy.get("#login-button").click()

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "do not match")
  })

})
