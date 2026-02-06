import LoginPage from "../pages/loginPage_v1"

describe("Login negativo - Page Object", () => {

  it("Deve mostrar erro com senha inválida", () => {
    LoginPage.acessar()

    LoginPage.login(
      "standard_user",
      "senha_errada"
    )

    LoginPage.verificarErroLogin(
      "Username and password do not match"
    )
  })

})
