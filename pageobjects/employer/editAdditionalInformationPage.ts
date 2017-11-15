import { element, by, browser, until, ExpectedConditions } from "protractor/built";
import EmployerRecordPage from "./employerRecordPage";

export default class EditAdditionalInformationPage {
    
        private readonly elements = {
            employerReferenceNumberField: element(by.css('input[formcontrolname="ern"]')),
            employerLevyFundedRadioButtons: element.all(by.css('.radioTitle')),
            saveAndCloseButton: element(by.css('button.btn.btn-save')),
        }
        
            public async enterEmployerReferenceNumber(){
                await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employerReferenceNumberField), 10000);
                await this.elements.employerReferenceNumberField.clear();
                await this.elements.employerReferenceNumberField.sendKeys('111111119');
                return this;
            }

            public async selectEmployerLevyPayer(){
                //Wait for and select 'No' to 'Is the employer a levy payer'
                //0 = Yes - 1 = No
                await this.elements.employerLevyFundedRadioButtons.get(1).click();
                return this;
            }

            public async saveAndClose(){
                await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.saveAndCloseButton), 10000);
                await this.elements.saveAndCloseButton.click();
                return new EmployerRecordPage;
            }

            public async editAdditionalInformation(){
                await this.enterEmployerReferenceNumber();
                await this.selectEmployerLevyPayer();
                await this.saveAndClose();
                return new EmployerRecordPage;
            }

    }