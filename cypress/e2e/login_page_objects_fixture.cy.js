import LoginPage from "../pages/loginPage_v1"

describe("Login com Page Object + Fixture", function () {

  beforeEach(function () {                      //n funciona c/ before
    cy.fixture("usuarios").then((usuarios) => {
      this.usuarios = usuarios
    })
  })

  it("Deve fazer login com sucesso", function () {
    LoginPage.acessar()

    LoginPage.login(
      this.usuarios.usuarioValido.username,
      this.usuarios.usuarioValido.password
    )

    LoginPage.verificarLoginComSucesso()
  })

  it("Deve mostrar erro com senha inválida", function () {
    LoginPage.acessar()

    LoginPage.login(
      this.usuarios.usuarioSenhaInvalida.username,
      this.usuarios.usuarioSenhaInvalida.password
    )

    LoginPage.verificarErroLogin("Username and password do not match")
  })

})
