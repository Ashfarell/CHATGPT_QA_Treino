class LoginPage {
  acessar() {
    cy.visit("https://www.saucedemo.com")
  }

  preencherUsuario(username) {
    cy.get("#user-name").type(username)
  }

  preencherSenha(password) {
    cy.get("#password").type(password)
  }

  clicarLogin() {
    cy.get("#login-button").click()
  }

  login(username, password) {
    this.preencherUsuario(username)
    this.preencherSenha(password)
    this.clicarLogin()
  }

  validarLoginComSucesso() {
    cy.url().should("include", "/inventory")    //estava no arquivo de teste
  }

  validarErro(mensagem) {                       //estava no arquivo de teste
    cy.get('[data-test="error"]').should("contain", mensagem)
  }
}
 	export default new LoginPage()
