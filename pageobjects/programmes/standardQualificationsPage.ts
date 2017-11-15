import { element, by, browser, until, ExpectedConditions } from "protractor/built";
import ApprenticeshipStandard from "../programmes/ApprenticeshipStandard";

export default class StandardQualificationsPage {

    private readonly elements = {
        qualificationResults: element.all(by.css('span.checkboxTitle')),
        confirmAndCreateProgrammeButton: element(by.css('button.btn.btn-save')),
    }

    public async isOnPage() {
        return (await browser.getTitle()) === "Select standard qualifications";         
    }

    public async selectQualificationResult() {
            await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.qualificationResults.get(0)), 10000);
            await this.elements.qualificationResults.get(0).click();
            return this;
    }

    public async clickConfirmAndCreateProgramme() {
        browser.pause();
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.confirmAndCreateProgrammeButton), 10000);
        await this.elements.confirmAndCreateProgrammeButton.click();
        return this;
    }

    public async chooseQualifications() {
        this.selectQualificationResult();
        this.clickConfirmAndCreateProgramme();
        return this; //Need to return a new page 'ProgrammeRecord' for example
    }

}