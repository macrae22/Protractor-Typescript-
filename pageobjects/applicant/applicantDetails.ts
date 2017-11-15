import { element, by, browser, until, ExpectedConditions } from "protractor/built";
import ApplicantOverview from "./applicantOverview";


export default class ApplicantDetailsPage {

    private elements = {
        firstNameField: element(by.css('input[formcontrolname*="foreName"]')),
        middleNamesField: element(by.css('input[formcontrolname*="middleNames"]')),
        lastNameField: element(by.css('input[formcontrolname*="surname"]')),
        emailAddressField: element(by.css('input[formcontrolname*="email"]')),
        mobileField: element(by.css('input[formcontrolname*="mobile"]')),
        finishButton: element(by.css('button.btn.btn-md.btn-save')),
      }

      public async enterFirstName(){
        //Wait for and enter 'First Name'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.firstNameField), 10000);
        await this.elements.firstNameField.sendKeys('Applicant');
        return this;
      }

      public async enterMiddleName(){
        //Wait for and enter 'Middle Name'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.middleNamesField), 10000);
        await this.elements.middleNamesField.sendKeys('Williams');
        return this;
      }

      public async enterLastName(){
        //Wait for and enter 'Last Name' (Time Stamped)
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.lastNameField), 10000);
        await this.elements.lastNameField.sendKeys(`${new Date().toUTCString()}`);
        return this;
      }

      public async enterEmailAddress(){
        //Wait for and enter 'Email Address' (Time Stamped)
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.emailAddressField), 10000);
        await this.elements.emailAddressField.sendKeys(`${Math.floor(Math.random() * 10000) + 1}@smoketests.com`);
        return this;
      }

      public async enterMobileNumber(){
        //Wait for and enter 'Mobile No.'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.mobileField), 10000);
        await this.elements.mobileField.sendKeys('07795674322');
        return this;
      }

      public async clickFinish(){
        //Wait for and click 'Finish'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.finishButton), 10000);
        await this.elements.finishButton.click();
        return new ApplicantOverview;
      }

      public async enterApplicantDetails(){
        //Wait for and enter 'Email Address' (Time Stamped)
        await this.enterFirstName();
        await this.enterMiddleName();
        await this.enterLastName();
        await this.enterEmailAddress();
        await this.enterMobileNumber();
        await this.clickFinish();
        return new ApplicantOverview;
      }

    }