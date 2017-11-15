
import { element, by, browser, until, ExpectedConditions } from "protractor/built";
import NewEmployerModel from "./newEmployerModel";
import EmployerRecordPage from "./employerRecordPage";
import AddAnotherLocationPage from "../employer_location/addAnotherLocationPage";
import EmployerLocationRecordPage from "../employer_location/employerLocationRecordPage";

export default class EmployersPage {

    private readonly elements = {
        addNewEmployerButton: element(by.css('a.btn.pull-right[href*="/employer/creation"]')),
        pageHeading: element(by.tagName('h1')),
        firstEditEmployerButton: element.all(by.css('button.btn.secondary.primary-text.main-button.pull-right')).first(),
        firstEditEmployerLocationButton: element.all(by.css(('.row.ml-0.mr-0.pr-0 button[type*="button"'))).first(),
        firstAddAnotherLocationButton: element.all(by.css(('a[href*="add-location"'))).first(),
    }

    public async isOnPage() {
        return (await browser.getTitle()) === "Employers";
    }

    public async clickAddNewEmployer(){
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.addNewEmployerButton), 10000);
        await this.elements.addNewEmployerButton.click();
        return new NewEmployerModel();
    }

    public async editEmployer(){
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.firstEditEmployerButton), 10000);
        await this.elements.firstEditEmployerButton.click();
        return new EmployerRecordPage;

    }

    public async editEmployerLocation(){
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.firstEditEmployerLocationButton), 10000);
        await this.elements.firstEditEmployerLocationButton.click();
        return new EmployerLocationRecordPage;

    }

    public async clickAddAnotherLocation(){
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.firstAddAnotherLocationButton), 10000);
        await this.elements.firstAddAnotherLocationButton.click();
        return new AddAnotherLocationPage;

    }

    public pageHeading(){
        browser.wait(ExpectedConditions.textToBePresentInElement(this.elements.pageHeading, 'Employers'), 10000);
        return this.elements.pageHeading.getText();
    }

    

}