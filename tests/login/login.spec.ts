//Page objects required and initiated
import LoginPage from "../../pageobjects/login/loginPage";
import { element, by, browser } from "protractor/built";

function loginAsAnAssessor() {
    return new LoginPage().loginAsAssessor();
}

//Test suite and specs
describe('Login Smoke Tests - ', () => {

    it("Login as an 'Assessor'", async () => {
        const homepagePage = await
            loginAsAnAssessor()

        //Confirm user navigated to 'Dashboard' page
        //expect(await HomepagePage.isOnPage()).toBeTruthy()
    });
});