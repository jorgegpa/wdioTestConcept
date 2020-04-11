// login.page.js
import Page from './page'
import {} from 'dotenv/config'

class LoginPage extends Page {

    get username() { return $('#email') }
    get password() { return $('#password') }
    get loginBtn() { return $('.submit_btn') }

    open(url) {
        super.open(url)
    }

    async setUsername(value){
        this.username.setValue(value)
    }

    async setPassword(value){
        this.password.setValue(value)
    }

   async submit() {
        this.loginBtn.click()
    }

}

export default new LoginPage()