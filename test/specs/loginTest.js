import BaseTest from '../../test/baseTest'
import DashboardPage from '../../pages/dashboard.page'


  describe('Login Test', () => {
     beforeEach(() => {
         BaseTest.preCondition()
     })
      it('Succesfully Test Case', () => {
          expect(DashboardPage.todayHeader).toBeDisplayed()
      })
  })

