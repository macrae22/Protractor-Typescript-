import { element, by, browser, until, ExpectedConditions } from "protractor/built";
import EditEmployerOverviewPage from "./editEmployerOverviewPage";
import EditEmployerContactsDetailsPage from "./editEmployerContactDetailsPage";
import EditAdditionalInformationPage from "./editAdditionalInformationPage";
import AddEmployerContactsDetailsPage from "./addEmployerContactDetailsPage";
import AddEmployerLiabilityInsuranceCertificatePage from "./addEmployerLiabilityInsuranceCertificatePage";
import AddEmployerHealthAndSafetyEvidencePage from "./addEmployerHealthAndSafetyEvidencePage"
import AddEmployerWrittenAgreementEvidencePage from "./addEmployerWrittenAgreementEvidencePage";

export default class EmployerRecordPage {
    
        private readonly elements = {
            editOverviewButton: element(by.css('a[routerlink="edit-details"]')),
            editEmployerContactDetailsButton: element(by.css('a.pl-1.pull-right.btn.secondary[href*="edit-contact"]')),
            editAdditionalinformationButton: element(by.css('a[routerlink="edit-additional-info"]')),
            addEmployerContactButton: element(by.css('a[routerlink="add-contact"]')),
            addEmployerLiabilityInsuranceCertificateButton: element(by.css('a[routerlink="add-liability-cert"]')),
            addHealthAndSafetyEvidenceButton: element(by.css('a[routerlink="add-health-and-safety-cert"]')),
            addWrittenAgreementEvidenceButton: element(by.css('a[routerlink="add-written-agreement"]')),
        }

        public async isOnPage() {
            return (await browser.getTitle()) === "Employer summary";
        }

            public async clickEditOverview(){
                await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.editOverviewButton), 10000);
                await this.elements.editOverviewButton.click();
                return new EditEmployerOverviewPage;
            }

            public async clickEditEmployerContactDetails(){
                await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.editEmployerContactDetailsButton), 10000);
                await this.elements.editEmployerContactDetailsButton.click();
                return new EditEmployerContactsDetailsPage;
            }

            public async clickEditAdditionalInformation(){
                await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.editAdditionalinformationButton), 10000);
                await this.elements.editAdditionalinformationButton.click();
                return new EditAdditionalInformationPage;
            }

            public async clickAddEmployerContact(){
                await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.addEmployerContactButton), 10000);
                await this.elements.addEmployerContactButton.click();
                return new AddEmployerContactsDetailsPage;
            }

            public async clickAddEmployerLiabilityInsuranceCertificate(){
                await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.addEmployerLiabilityInsuranceCertificateButton), 10000);
                await this.elements.addEmployerLiabilityInsuranceCertificateButton.click();
                return new AddEmployerLiabilityInsuranceCertificatePage;
            }

            public async clickAddHealthAndSafetyEvidence(){
                await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.addHealthAndSafetyEvidenceButton), 10000);
                await this.elements.addHealthAndSafetyEvidenceButton.click();
                return new AddEmployerHealthAndSafetyEvidencePage;
            }

            public async clickAddwrittenAgreementEvidence(){
                await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.addWrittenAgreementEvidenceButton), 10000);
                await this.elements.addWrittenAgreementEvidenceButton.click();
                return new AddEmployerWrittenAgreementEvidencePage;
            }
    

    }