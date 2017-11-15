import { element, by, browser, until, ExpectedConditions } from "protractor/built";
import ApprenticeshipStandard from "../programmes/ApprenticeshipStandard";

export default class TypeOfProgramme {

    private readonly elements = {
        newProgrammeButton: element(by.css('a.btn.pull-right')),
        selectStandardLink: element(by.cssContainingText('a[href*="#"]', 'Apprenticeship Standard')),
        selectStandardButton: element(by.cssContainingText('button.btn.btn-lg', 'Select Standard')),
        selectFrameworkLink: element(by.cssContainingText('a[href*="#"]', 'Apprenticeship Framework')),
        selectFrameworkButton: element(by.cssContainingText('button.btn.btn-lg', 'Select Framework')),
    }

    public async clickStandardLink() { //Apprenticeship Standard link
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.selectStandardLink), 10000);
        await this.elements.selectStandardLink.click();
        return new ApprenticeshipStandard
    }
    
    public async clickStandardButton() { //Select Standard button
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.selectStandardButton), 10000);
        await this.elements.selectStandardButton.click();
        return new ApprenticeshipStandard
    }

    public async clickFrameworkLink() { //Apprenticeship Framework link
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.selectFrameworkLink), 10000);
        await this.elements.selectFrameworkLink.click();
        return new ApprenticeshipStandard
    }
    
    public async clickFrameworkButton() { //Select Framework button
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.selectFrameworkButton), 10000);
        await this.elements.selectFrameworkButton.click();
        return new ApprenticeshipStandard
    }
}