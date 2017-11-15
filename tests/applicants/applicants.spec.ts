//Page objects required and initiated
import LoginPage from "../../pageobjects/login/loginPage";
import ApplicantsListPage from "../../pageobjects/applicant/applicantsPage";
import ApplicantSituation from "../../pageobjects/applicant/applicantSituation";
import ApplicantSelectSector from "../../pageobjects/applicant/applicantSelectSector";

function loginAsAnAssessor() {
    return new LoginPage().loginAsAssessor();
}

//Test suite and specs
describe('Applicant Smoke Tests -', () => {

    it("Create New Applicant", async () => { 
        const homepagePage = await
            loginAsAnAssessor()
            .then(HomepagePage => HomepagePage.clickApplicantsLink())
            .then(ApplicantsListPage => ApplicantsListPage.clickAddNewApplicant())
            .then(ApplicantSituationPage => ApplicantSituationPage.clickWorkbasedStart())
            .then(ApplicantSelectSector => ApplicantSelectSector.completeSectorPage())
            .then(ApplicantSelectEmployer => ApplicantSelectEmployer.selectEmployer())
            .then(ApplicantSelectEmployerContact => ApplicantSelectEmployerContact.completeEmployerContactPage())
            .then(ApplicantDetails => ApplicantDetails.enterApplicantDetails())

            //Confrim we are on the 'Applicant Overview' page
    });

    it("View an Applicant", async () => { 
        const homepagePage = await
            loginAsAnAssessor()
            .then(HomepagePage => HomepagePage.clickApplicantsLink())
            .then(ApplicantListPage => ApplicantListPage.viewApplicant())

            //Confrim we are on the 'Applicant Overview' page
    });

    it("Filter & View Applicants at 'New' status", async () => { 
        const homepagePage = await
            loginAsAnAssessor()
            .then(HomepagePage => HomepagePage.clickApplicantsLink())
            .then(ApplicantListPage => ApplicantListPage.viewNewApplicant())

            //Confrim we are on the 'Applicant Overview' page
    });

    it("Filter & View Applicants at 'Invited' status", async () => { 
        const homepagePage = await
            loginAsAnAssessor()
            .then(HomepagePage => HomepagePage.clickApplicantsLink())
            .then(ApplicantListPage => ApplicantListPage.viewInvitedApplicant())

            //Confrim we are on the 'Applicant Overview' page
    });

    it("Filter & View Applicants at 'To Schedule' status", async () => { 
        const homepagePage = await
            loginAsAnAssessor()
            .then(HomepagePage => HomepagePage.clickApplicantsLink())
            .then(ApplicantListPage => ApplicantListPage.viewToScheduleApplicant())

            //Confrim we are on the 'Applicant Overview' page
    });

    it("Filter & View Applicants at 'Scheduled' status", async () => { 
        const homepagePage = await
            loginAsAnAssessor()
            .then(HomepagePage => HomepagePage.clickApplicantsLink())
            .then(ApplicantListPage => ApplicantListPage.viewScheduledApplicant())

            //Confrim we are on the 'Applicant Overview' page
    });

    it("Filter & View Applicants at 'Signed Up' status", async () => { 
        const homepagePage = await
            loginAsAnAssessor()
            .then(HomepagePage => HomepagePage.clickApplicantsLink())
            .then(ApplicantListPage => ApplicantListPage.viewSignedUpApplicant())

            //Confrim we are on the 'Applicant Overview' page
    });

    it("Filter & View Applicants at 'Completed' status", async () => { 
        const homepagePage = await
            loginAsAnAssessor()
            .then(HomepagePage => HomepagePage.clickApplicantsLink())
            .then(ApplicantListPage => ApplicantListPage.viewCompletedApplicant())

            //Confrim we are on the 'Applicant Overview' page
    });
});