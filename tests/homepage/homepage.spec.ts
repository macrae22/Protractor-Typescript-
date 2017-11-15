//Page objects required and initiated
import LoginPage from "../../pageobjects/login/loginPage";
import { element, by, browser } from "protractor/built";

function loginAsAnAssessor() {
    return new LoginPage().loginAsAssessor();
}

//Test suite and specs
describe('Homepage Smoke Tests -', () => {  

    it("Login & logouts", async () => {
        const loginPage = await
            loginAsAnAssessor()
                .then(HomepagePage => HomepagePage.logout())

        //Confirm user navigated to 'Dashboard' page
        //expect(await loginPage.isOnPage()).toBeTruthy()
    });
});
