//Page objects required and initiated
import { element, by, browser } from "protractor/built";
import LoginPage from "../../pageobjects/login/loginPage";
import ProgrammeRecordPage from "../../pageobjects/programmes/viewProgrammeSummarypage";
import ProgrammeSettingsTab from "../../pageobjects/programmes/programmeSettingTab";

function loginAsAnAssessor() {
    return new LoginPage().loginAsAssessor();
}

//Test suite and specs
describe('Programme Smoke Tests -', () => {

    it("Create New 'Standard' Programme", async () => {
        const programmesPage = await
        loginAsAnAssessor()
        .then(Homepage => Homepage.clickProgrammesLink())
        .then(ProgrammesPage => ProgrammesPage.clickNewProgramme())
        .then(TypeOfProgramme => TypeOfProgramme.clickStandardLink())
        .then(ApprenticeshipStandard => ApprenticeshipStandard.chooseProgramme())
        .then(StandardQualificationsPage => StandardQualificationsPage.chooseQualifications())

        //Assert we are on the 'Programme' page
    });

    it("View a Programme", async () => {
        const viewProgrammeSummaryPage = await
        loginAsAnAssessor()
        .then(Homepage => Homepage.clickProgrammesLink())
        .then(ProgrammesPage => ProgrammesPage.viewProgramme())

        //Assert we are on the 'Programme Summary' page
    });

    it("Edit a Programme", async () => {
        const viewProgrammeSummaryPage = await
        loginAsAnAssessor()
        .then(Homepage => Homepage.clickProgrammesLink())
        .then(ProgrammesPage => ProgrammesPage.editProgramme())

        //Assert we are on the 'Programme Summary' page
    });

    it("View 'Qualifications' tab", async () => {
        const viewProgrammeSummaryPage = await
        loginAsAnAssessor()
        .then(Homepage => Homepage.clickProgrammesLink())
        .then(ProgrammesPage => ProgrammesPage.viewProgramme())
        .then(ViewProgrammeSummaryPage => ViewProgrammeSummaryPage.clickQualificationsTab())

        //Assert we are on the 'Programme Summary' page
    });

    it("View 'Functional Skills' tab", async () => {
        const viewProgrammeSummaryPage = await
        loginAsAnAssessor()
        .then(Homepage => Homepage.clickProgrammesLink())
        .then(ProgrammesPage => ProgrammesPage.viewProgramme())
        .then(ViewProgrammeSummaryPage => ViewProgrammeSummaryPage.clickFunctionalSkillsTab())

        //Assert we are on the 'Programme Summary' page
    });

    it("View 'Activities' tab", async () => {
        const viewProgrammeSummaryPage = await
        loginAsAnAssessor()
        .then(Homepage => Homepage.clickProgrammesLink())
        .then(ProgrammesPage => ProgrammesPage.viewProgramme())
        .then(ViewProgrammeSummaryPage => ViewProgrammeSummaryPage.clickActivitiesTab())

        //Assert we are on the 'Programme Summary' page
    });

    it("View 'Gaps' tab", async () => {
        const viewProgrammeSummaryPage = await
        loginAsAnAssessor()
        .then(Homepage => Homepage.clickProgrammesLink())
        .then(ProgrammesPage => ProgrammesPage.viewProgramme())
        .then(ViewProgrammeSummaryPage => ViewProgrammeSummaryPage.clickGapsTab())

        //Assert we are on the 'Programme Summary' page
    });

    it("View 'Confirm' tab", async () => {
        const viewProgrammeSummaryPage = await
        loginAsAnAssessor()
        .then(Homepage => Homepage.clickProgrammesLink())
        .then(ProgrammesPage => ProgrammesPage.viewProgramme())
        .then(ViewProgrammeSummaryPage => ViewProgrammeSummaryPage.clickConfirmTab())

        //Assert we are on the 'Programme Summary' page
    });

    it("Edit Programme 'Settings'", async () => {
        const programmeSettingsTab = await
        loginAsAnAssessor()
        .then(Homepage => Homepage.clickProgrammesLink())
        .then(ProgrammesPage => ProgrammesPage.editProgramme())
        .then(ProgrammeSettingsTab => ProgrammeSettingsTab.editSettingTab())

        //Assert we are on the 'Programme Summary' page
    });

});