import { element, by, browser, until, ExpectedConditions } from "protractor/built";


export default class ApplicantOverview {

    private elements = {
        firstNameField: element(by.css('input[formcontrolname*="foreName"]')),
      }

      public async enterFirstName(){
        //Wait for and enter 'First Name'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.firstNameField), 10000);
        await this.elements.firstNameField.sendKeys('Applicant');
        return this;
      }

    }