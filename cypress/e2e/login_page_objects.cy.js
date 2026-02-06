//import LoginPage from "../pages/LoginPage" 	

        //TESTE ANTIGO
//describe("Login", () => {

  //it("Login com sucesso", () => {
    //LoginPage.acessar()
    //LoginPage.login("standard_user", "secret_sauce")
    //LoginPage.validarLoginComSucesso()
  //})

  //it("Login com senha inválida", () => {
    //LoginPage.acessar()
    //LoginPage.login("standard_user", "senha_errada")
    //LoginPage.validarErro("Username and password do not match")        })   })

        //TESTE NOVO COM PAGE OBJECTS
        import LoginPage from "../pages/loginPage_v1"

describe("Login com Page Object", () => {

  it("Deve fazer login com sucesso", () => {
    LoginPage.acessar()
    LoginPage.preencherUsuario("standard_user")
    LoginPage.preencherSenha("secret_sauce")
    LoginPage.clicarLogin()

    cy.url().should("include", "/inventory")
  })
})
