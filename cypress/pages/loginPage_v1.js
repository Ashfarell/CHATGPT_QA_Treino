class LoginPage {

  acessar() {
    cy.visit("https://www.saucedemo.com")
  }

  preencherUsuario(username) {
    cy.get("#user-name").type(username)             //usado no login
  }

  preencherSenha(password) {                    //usado no login
    cy.get("#password").type(password)
  }

  clicarLogin() {                               //usado no login
    cy.get("#login-button").click()
  }

  login(username, password) {
    this.preencherUsuario(username)
    this.preencherSenha(password)
    this.clicarLogin()
  }

  verificarLoginComSucesso() {
    cy.url().should("include", "/inventory")
    cy.get(".inventory_list").should("be.visible")
  }

  verificarErroLogin(mensagem) {
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", mensagem)
  }
}
export default new LoginPage()

//por que usamos preencherUsuario, preencherSenha e clicarLogin se temos o método login?
//O método login é uma abstração que combina as ações de preencher o usuário, preencher a senha e clicar no login em um único método. Ele é útil para simplificar o processo de login em testes, permitindo que você chame apenas um método para realizar todas essas ações. No entanto, os métodos preencherUsuario, preencherSenha e clicarLogin ainda são úteis para casos em que você deseja realizar essas ações de forma independente, como em testes que verificam apenas a funcionalidade de preenchimento de campos ou clique no botão de login.