/// <reference types="cypress"/>

class ReportsPage {
    visit() {
        cy.visit('/');
    }

    validarURL() {
        return cy.url();
    }

}

export default ReportsPage;