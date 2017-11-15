import { element, by, browser, until, ExpectedConditions } from "protractor/built";
import ApplicantSelectEmployer from "../applicant/applicantSelectEmployer";


export default class ApplicantSelectSector {
    
    private elements = {
        sectorRadioButtons: element.all(by.css('span.radioTitle')),
        nextButton: element(by.css("button.btn.btn-md")),

      }
      public async isOnPage() {
        return (await browser.getTitle()) === "Select sector";
    }

    public async selectSector(){
        //0 = First, 1 = Second, 2 = Third etc
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.sectorRadioButtons.get(0)), 10000);
        await this.elements.sectorRadioButtons.get(0).click();
        return this;
    }

    public async clickNext(){
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.nextButton), 10000);
        await this.elements.nextButton.click();
        return new ApplicantSelectEmployer
    }

    public async completeSectorPage(){
        await this.selectSector();
        await this.clickNext();
        return new ApplicantSelectEmployer
    }

}