
import { element, by, browser, until, ExpectedConditions } from "protractor/built";
import ApplicantsPage from "../applicant/applicantsPage";
import LoginPage from "../login/loginPage";
import EmployersPage from "../employer/employersPage";
import ProgrammesPage from "../programmes/programmesPage";

//Class
export default class HomepagePage {

    //Properties
    private readonly elements = {
        programmesLinkElement: element(by.css('ul.hidden-md-down > li.nav-item > a[routerlink*="/programme"]')),
        applicantsLinkElement: element(by.css('ul.hidden-md-down > li.nav-item > a[routerlink*="/application/manage"]')),
        trainerLinkElement: element(by.css('ul.hidden-md-down > li.nav-item > a[routerlink*="/assessors"]')),
        employerLinkElement: element(by.css('ul.hidden-md-down > li.nav-item > a[routerlink*="/employer"]')),
        logoutLinkElement: element(by.css("a.dropdown-item.nav-link")),
    }

    //Methods
    public async isOnPage() {
        return (await browser.getTitle()) === "Homepage";
    }

    public async clickProgrammesLink(){
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.programmesLinkElement), 10000);
        await this.elements.programmesLinkElement.click();
        return new ProgrammesPage();
    }

    public async clickApplicantsLink() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.applicantsLinkElement), 10000);
        await this.elements.applicantsLinkElement.click();
        return new ApplicantsPage();
    }

    public async clickAssessorsLink() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.trainerLinkElement), 10000);
        await this.elements.trainerLinkElement.click();
        //Page object to be added
    }

    public async clickEmployerLink(){
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employerLinkElement), 10000);
        await this.elements.employerLinkElement.click();
        return new EmployersPage();
    }

    public async logout(){
        await this.elements.logoutLinkElement.click();
        return new LoginPage();
    }
}