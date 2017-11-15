import { element, by, browser, until, ExpectedConditions } from "protractor/built";
import TypeOfProgramme from "../programmes/typeOfProgramme";
import StandardQualificationsPage from "../programmes/standardQualificationsPage";


export default class ApprenticeshipStandard {

    private readonly elements = {
        selectStandardSearchField: element(by.css('input[name*="query"]')),
        searchButton: element(by.css('button.btn.search')),
        programmeResult: element(by.cssContainingText('a[href*="#"]', 'Lead Adult Care Worker')),
    }

    public async isOnPage() {
        return (await browser.getTitle()) === "Select programme standard";         
    }

    public async enterProgrammeName() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.selectStandardSearchField), 10000);
        await this.elements.selectStandardSearchField.sendKeys('Lead Adult Care Worker');
        return this;
    }
    
    public async clickSearch() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.searchButton), 10000);
        await this.elements.searchButton.click();
        return this;
    }

    public async selectProgramme() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.programmeResult), 10000);
        await this.elements.programmeResult.click();
        return new StandardQualificationsPage;
    }

    public async chooseProgramme() {
        await this.enterProgrammeName();
        await this.clickSearch();
        await this.selectProgramme();
        return new StandardQualificationsPage;
    }
}