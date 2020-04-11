import LoginPage from '../pages/login.page'
import {} from 'dotenv/config'
class BaseTest{
  
    preCondition(){
     const usrname = process.env.USERNAME
     const passwd = process.env.PASSWORD
     LoginPage.open(process.env.URL_HOST)
     LoginPage.setUsername(usrname)
     LoginPage.setPassword(passwd)
     LoginPage.submit()
   }
}

export default new BaseTest()