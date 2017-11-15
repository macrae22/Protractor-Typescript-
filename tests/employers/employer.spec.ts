//Page objects required and initiated
import LoginPage from "../../pageobjects/login/loginPage";
import { element, by, browser, until, ExpectedConditions } from "protractor/built";

function loginAsAnAssessor() {
    return new LoginPage().loginAsAssessor();
}

//Test suite and specs
describe('Employers Smoke Tests', () => {

    it("Add new Employer", async () => {
        const employersPage = await
            loginAsAnAssessor()
                .then(homepage => homepage.clickEmployerLink())
                .then(employersPage => employersPage.clickAddNewEmployer())
                .then(newEmployerModel => newEmployerModel.addNewEmployer())

        //Confirm user returned to 'Employers' page
        //expect(await employersPage.isOnPage()).toBeTruthy()
    });

    it("Edit 'Employer Overview' section", async () => {
        const employerRecordPage = await
            loginAsAnAssessor()
                .then(homepage => homepage.clickEmployerLink())
                .then(employersPage => employersPage.editEmployer())
                .then(employerRecordPage => employerRecordPage.clickEditOverview())
                .then(editEmployerOverviewPage => editEmployerOverviewPage.editEmployerOverview())

        //Confirm user returned to 'Employer Record' page
        // expect(await employerRecordPage.isOnPage()).toBeTruthy()

    });

    it("Edit 'Employer Contact Details' section", async () => {
        const employerRecordPage = await
            loginAsAnAssessor()
                .then(homepage => homepage.clickEmployerLink())
                .then(employersPage => employersPage.editEmployer())
                .then(employerRecordPage => employerRecordPage.clickEditEmployerContactDetails())
                .then(editEmployerContactDetailsPage => editEmployerContactDetailsPage.editEmployerContactDetails())

        //Confirm user returned to 'Employer Record' page
        // expect(await employerRecordPage.isOnPage()).toBeTruthy()
    });

    it("Edit 'Employer Additional Details' section", async () => {
        const employerRecordPage = await
            loginAsAnAssessor()
                .then(homepage => homepage.clickEmployerLink())
                .then(employersPage => employersPage.editEmployer())
                .then(employerRecordPage => employerRecordPage.clickEditAdditionalInformation())
                .then(editAdditionalInformationPage => editAdditionalInformationPage.editAdditionalInformation())

        //Confirm user returned to 'Employer Record' page
        // expect(await employerRecordPage.isOnPage()).toBeTruthy()
    });

    it("Add 'Employer Contact Details'", async () => {
        const employerRecordPage = await
            loginAsAnAssessor()
                .then(homepage => homepage.clickEmployerLink())
                .then(employersPage => employersPage.editEmployer())
                .then(employerRecordPage => employerRecordPage.clickAddEmployerContact())
                .then(addEmployerContactDetailsPage => addEmployerContactDetailsPage.addEmployerContactDetails())

        //Confirm user returned to 'Employer Record' page
        // expect(await employerRecordPage.isOnPage()).toBeTruthy()
    });

    it("Add 'Employer Liability Insurance Certificate'", async () => {
        const employerRecordPage = await
            loginAsAnAssessor()
                .then(homepage => homepage.clickEmployerLink())
                .then(employersPage => employersPage.editEmployer())
                .then(employerRecordPage => employerRecordPage.clickAddEmployerLiabilityInsuranceCertificate())
                .then(addEmployerLiabilityInsuranceCertificatePage => addEmployerLiabilityInsuranceCertificatePage.addEmployerLiabilityInsuranceCertificate())

        //Confirm user returned to 'Employer Record' page
        // expect(await employerRecordPage.isOnPage()).toBeTruthy()
    });

    it("Add 'Employer Health & Safety Evidence'", async () => {
        const employerRecordPage = await
            loginAsAnAssessor()
                .then(homepage => homepage.clickEmployerLink())
                .then(employersPage => employersPage.editEmployer())
                .then(employerRecordPage => employerRecordPage.clickAddHealthAndSafetyEvidence())
                .then(addEmployerHealthAndSafetyEvidencePage => addEmployerHealthAndSafetyEvidencePage.addHealthAndSafetyEvidence())

        //Confirm user returned to 'Employer Record' page
        // expect(await employerRecordPage.isOnPage()).toBeTruthy()
    });

    it("Add 'Employer Written Agreement Evidence'", async () => {
        const employerRecordPage = await
            loginAsAnAssessor()
                .then(homepage => homepage.clickEmployerLink())
                .then(employersPage => employersPage.editEmployer())
                .then(employerRecordPage => employerRecordPage.clickAddwrittenAgreementEvidence())
                .then(addEmployerWrittenAgreementEvidencePage => addEmployerWrittenAgreementEvidencePage.addWrittenAgreementEvidence())

        //Confirm user returned to 'Employer Record' page
        // expect(await employerRecordPage.isOnPage()).toBeTruthy()
    });

});