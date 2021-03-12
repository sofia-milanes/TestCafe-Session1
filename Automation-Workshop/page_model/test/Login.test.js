import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import MyNotesPage from '../pages/MyNotesPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Login feature testing')
    .page `http://testapp.galenframework.com/`
    .beforeEach(async t => {
        await t.click(WelcomePage.loginButton)
    })

//You can add .only in order to execute only 1 specific test. Example test.only(...)
test('Users can login using valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(MyNotesPage.pageTitle.exists).ok()    
})

test('Users can not login using invalid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    
    await t.expect(LoginPage.errorMessage.innerText).eql('The username or password are incorrect')
    await t.expect(LoginPage.errorMessage.exists).ok()
})

