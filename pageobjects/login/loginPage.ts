
import { element, by, browser, until } from "protractor/built";
import HomepagePage from "../homepage/homepagePage";

export default class LoginPage{

    private readonly elements = {
    }

    public constructor(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        browser.waitForAngularEnabled(false);
        browser.get(browser.params.environment || "https://qa-web.bud.co.uk");
    }

    public async isOnPage() {
        return (await browser.getTitle()) === "Login";
    }

    public async loginAsAssessor(){
        
        await browser.wait(until.elementLocated(by.id('username')));
        await element(by.id('username')).sendKeys('assessor@automationtests.com');
        await element(by.id('password')).sendKeys('Password123');

        await element(by.id('login')).click();

        await browser.wait(until.elementLocated(by.css("chorus-bud-app")));
        return new HomepagePage();
    }

    public async loginAsOpsManager(){
        
        await browser.wait(until.elementLocated(by.id('username')));
        await element(by.id('username')).sendKeys('operations.manager@automationtests.com');
        await element(by.id('password')).sendKeys('Password123');

        await element(by.id('login')).click();

        await browser.wait(until.elementLocated(by.css("chorus-bud-app")));
        return new HomepagePage();
    }

    public async loginAsComplianceAdmin(){
        
        await browser.wait(until.elementLocated(by.id('username')));
        await element(by.id('username')).sendKeys('compliance.admin@automationtests.com');
        await element(by.id('password')).sendKeys('Password123');

        await element(by.id('login')).click();

        await browser.wait(until.elementLocated(by.css("chorus-bud-app")));
        return new HomepagePage();
    }

    public async invalidLogin(){
        
        await browser.wait(until.elementLocated(by.id('username')));
        await element(by.id('username')).sendKeys('invalid@automationtests.com');
        await element(by.id('password')).sendKeys('Password@3');

        await element(by.id('login')).click();
        return this;
    }
}