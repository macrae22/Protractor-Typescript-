import { element, by, browser, until, ExpectedConditions } from "protractor/built";
import TypeOfProgramme from "../programmes/typeOfProgramme";
import ProgrammeRecordPage from "./viewProgrammeSummarypage";
import ProgrammeSettingsTab from "./programmeSettingTab";

export default class ProgrammesPage {

    private readonly elements = {
        newProgrammeButton: element(by.css('a.btn.pull-right')),
        viewButtons: element.all(by.cssContainingText('button.btn.white-out.primary-text.main-button','view')),
        editButtons: element.all(by.cssContainingText('button.btn.white-out.primary-text.main-button','edit')),
    }

    public async isOnPage() {
        return (await browser.getTitle()) === "List of Programmes";
    }

    public async clickNewProgramme() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.newProgrammeButton), 10000);
        await this.elements.newProgrammeButton.click();
        return new TypeOfProgramme
    }

    public async viewProgramme() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.viewButtons.get(0)), 10000);
        await this.elements.viewButtons.get(0).click();
        return new ProgrammeRecordPage
    }

    public async editProgramme() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.editButtons.get(0)), 10000);
        await this.elements.editButtons.get(0).click();
        return new ProgrammeSettingsTab
    }

}