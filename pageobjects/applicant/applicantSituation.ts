import { element, by, browser, until, ExpectedConditions } from "protractor/built";
import ApplicantSelectSector from "../applicant/applicantSelectSector";

export default class ApplicantSituation {

    private elements = {
      //  workbasedStartLink: 
        workbasedStartButton: element(by.css('a.btn.btn-md.pull-right'))
    }

    public async isOnPage() {
        return (await browser.getTitle()) === "Applicant situation";
    }

    public async clickWorkbasedStart() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.workbasedStartButton), 10000);
        await this.elements.workbasedStartButton.click();
        return new ApplicantSelectSector
    }
}