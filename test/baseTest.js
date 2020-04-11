import LoginPage from '../pages/login.page'
import {} from 'dotenv/config'
class BaseTest {
  preCondition () {
    const usrname = process.env.TODOIST_USERNAME
    const passwd = process.env.TODOIST_PASSWORD
    LoginPage.open(process.env.URL_HOST)
    LoginPage.setUsername(usrname)
    LoginPage.setPassword(passwd)
    LoginPage.submit()
  }
}

export default new BaseTest()
