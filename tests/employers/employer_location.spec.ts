//Page objects required and initiated
import LoginPage from "../../pageobjects/login/loginPage";


function loginAsAnAssessor() {
    return new LoginPage().loginAsAssessor();
}

//Test suite and specs
describe('Employer Location Smoke Tests', () => {

    it("Add 'New Employer Location'", async () => {
        const employersPage = await
            loginAsAnAssessor()
                .then(homepage => homepage.clickEmployerLink())
                .then(employersPage => employersPage.clickAddAnotherLocation())
                .then(addAnotherLocationPage => addAnotherLocationPage.addNewLocationDetails())

        //Confirm user returned to 'Employers' page
        // expect(await employersPage.isOnPage()).toBeTruthy()
    });

    it("Edit 'Employer Location Overview' section", async () => {
        const employerLocationRecordPage = await
            loginAsAnAssessor()
                .then(homepage => homepage.clickEmployerLink())
                .then(employersPage => employersPage.editEmployerLocation())
                .then(employerLocationRecordPage => employerLocationRecordPage.clickEditOverview())
                .then(editEmployerLocationOverviewPage => editEmployerLocationOverviewPage.editEmployerOverview())

        //Confirm user returned to 'Employer Location Record' page
        //expect(await employerLocationRecordPage.isOnPage()).toBeTruthy()            

    });

    it("Edit 'Employer Location Contact Details' section", async () => {
        const employerLocationRecordPage = await
            loginAsAnAssessor()
                .then(homepage => homepage.clickEmployerLink())
                .then(employersPage => employersPage.editEmployerLocation())
                .then(employerLocationRecordPage => employerLocationRecordPage.clickEditEmployerContactDetails())
                .then(EditEmployerLocationContactsDetailsPage => EditEmployerLocationContactsDetailsPage.editEmployerContactDetails())

        //Confirm user returned to 'Employer Location Record' page
        //expect(await employerLocationRecordPage.isOnPage()).toBeTruthy()
    });

    it("Edit 'Employer Location Additional Details' section", async () => {
        const employerLocationRecordPage = await
            loginAsAnAssessor()
                .then(homepage => homepage.clickEmployerLink())
                .then(employersPage => employersPage.editEmployerLocation())
                .then(employerLocationRecordPage => employerLocationRecordPage.clickEditAdditionalInformation())
                .then(EditEmployerLocationAdditionalInformationPage => EditEmployerLocationAdditionalInformationPage.editAdditionalInformation())

        //Confirm user returned to 'Employer Location Record' page
        //expect(await employerLocationRecordPage.isOnPage()).toBeTruthy()
    });

    it("Add 'Employer Contact Details'", async () => {
        const employerLocationRecordPage = await
            loginAsAnAssessor()
                .then(homepage => homepage.clickEmployerLink())
                .then(employersPage => employersPage.editEmployerLocation())
                .then(employerLocationRecordPage => employerLocationRecordPage.clickAddEmployerContact())
                .then(addEmployerLocationContactDetailsPage => addEmployerLocationContactDetailsPage.addEmployerContactDetails())

        //Confirm user returned to 'Employer Record' page
        // expect(await employerLocationRecordPage.isOnPage()).toBeTruthy()
    });

    it("Add 'Employer Liability Insurance Certificate'", async () => {
        const employerLocationRecordPage = await
            loginAsAnAssessor()
                .then(homepage => homepage.clickEmployerLink())
                .then(employersPage => employersPage.editEmployerLocation())
                .then(employerLocationRecordPage => employerLocationRecordPage.clickAddEmployerLiabilityInsuranceCertificate())
                .then(addEmployerLocationLiabilityInsuranceCertificatePage => addEmployerLocationLiabilityInsuranceCertificatePage.addEmployerLiabilityInsuranceCertificate())

        //Confirm user returned to 'Employer Record' page
        // expect(await employerLocationRecordPage.isOnPage()).toBeTruthy()
    });

});