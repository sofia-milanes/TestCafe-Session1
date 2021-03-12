import { Selector, t } from 'testcafe'

class LoginPage {
    constructor (){
        this.usernameField = Selector('input[name="login.username"]')
        this.passwordField = Selector('input[name="login.password"]')
        this.loginButton = Selector('.btn-lg.btn-primary').withExactText('Login')
        this.errorMessage = Selector('#login-error-message')
    }

    async submitLoginForm(username, password){

        await t.typeText(this.usernameField, username, {paste:true})
        await t.typeText(this.passwordField, password, {paste:true})
        await t.click(this.loginButton)
    }
}

export default new LoginPage()