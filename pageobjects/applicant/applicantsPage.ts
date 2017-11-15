import { element, by, browser, until, ExpectedConditions } from "protractor/built";
import ApplicantSituation from "../applicant/applicantSituation";
import ApplicantSelectSector from "../applicant/applicantSelectSector";
import ApplicantOverview from "./applicantOverview";

export default class ApplicantsListPage {

    private elements = {
        listAllApplicants: element.all(by.css('a[href*="/application/manage/candidate"]')),
        newApplicantButton: element(by.css('a.btn.primary')),
        newFilterButton: element(by.cssContainingText('a.nav-link > span', 'new')),
        invitedFilterButton: element(by.cssContainingText('a.nav-link > span', 'invited')),
        toScheduleFilterButton: element(by.cssContainingText('a.nav-link > span', 'To Schedule')),
        scheduledFilterButton: element(by.cssContainingText('a.nav-link > span', 'Scheduled')),
        signedUpFilterButtons: element.all(by.cssContainingText('a.nav-link > span', 'Signed Up')),
        completedFilterButtons: element.all(by.cssContainingText('a.nav-link > span', 'Completed')),
    }

    public async isOnPage() {
        return (await browser.getTitle()) === "Manage applicants";
    }
        
    public async clickAddNewApplicant() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.newApplicantButton), 10000);
        await this.elements.newApplicantButton.click();
        return new ApplicantSituation;
    }

        public async clickNewFilter() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.newFilterButton), 10000);
        await this.elements.newFilterButton.click();
        return this;
    }

    public async clickInvitedFilter() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.invitedFilterButton), 10000);
        await this.elements.invitedFilterButton.click();
        return this;
    }

    public async clickToScheduleFilter() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.toScheduleFilterButton), 10000);
        await this.elements.toScheduleFilterButton.click();
        return this;
    }

    public async clickScheduledFilter() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.scheduledFilterButton), 10000);
        await this.elements.scheduledFilterButton.click();
        return this;
    }

    public async clickSignedUpFilter() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.signedUpFilterButtons.get(0)), 10000);
        await this.elements.signedUpFilterButtons.get(0).click();
        return this;
    }

    public async clickCompletedFilter() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.completedFilterButtons.get(0)), 10000);
        await this.elements.completedFilterButtons.get(0).click();
        return this;
    }

    public async viewApplicant() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.listAllApplicants.get(0)), 10000);
        await this.elements.listAllApplicants.get(0).click();
        return new ApplicantOverview;
    }

    public async viewNewApplicant() {
        await this.clickNewFilter();
        await this.viewApplicant();
        return new ApplicantOverview();
    }

    public async viewInvitedApplicant() {
        await this.clickInvitedFilter();
        await this.viewApplicant();
        return new ApplicantOverview();
    }

    public async viewToScheduleApplicant() {
        await this.clickToScheduleFilter();
        await this.viewApplicant();
        return new ApplicantOverview();
    }

    public async viewScheduledApplicant() {
        await this.clickScheduledFilter();
        await this.viewApplicant();
        return new ApplicantOverview();
    }

    public async viewSignedUpApplicant() {
        await this.clickSignedUpFilter();
        await this.viewApplicant();
        return new ApplicantOverview();
    }

    public async viewCompletedApplicant() {
        await this.clickCompletedFilter();
        await this.viewApplicant();
        return new ApplicantOverview();
    }
}