import { element, by, browser, until, ExpectedConditions } from "protractor/built";
import TypeOfProgramme from "../programmes/typeOfProgramme";

export default class ProgrammeRecordPage {

    private readonly elements = {
        qualificationsTab: element(by.cssContainingText('span.program-options-nav','Qualifications')),
        functionalSkillsTab: element(by.cssContainingText('span.program-options-nav','Functional Skills')),
        activitiesSkillsTab: element(by.cssContainingText('span.program-options-nav','Activities')),
        gapsTab: element(by.cssContainingText('span.program-options-nav','Gaps')),
       confirmTab: element(by.cssContainingText('span.program-options-nav','Confirm')),
    }

    public async isOnPage() {
        return (await browser.getTitle()) === "Programme summary";
    }

    public async clickQualificationsTab() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.qualificationsTab), 10000);
        await this.elements.qualificationsTab.click();
        return this;
    }

    public async clickFunctionalSkillsTab() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.functionalSkillsTab), 10000);
        await this.elements.functionalSkillsTab.click();
        return this;
    }

    public async clickActivitiesTab() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.activitiesSkillsTab), 10000);
        await this.elements.activitiesSkillsTab.click();
        return this;
    }

    public async clickGapsTab() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.gapsTab), 10000);
        await this.elements.gapsTab.click();
        return this;
    }

    public async clickConfirmTab() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.confirmTab), 10000);
        await this.elements.confirmTab.click();
        return this;
    }

}