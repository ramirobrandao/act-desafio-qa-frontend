/// <reference types="cypress"/>

class ListUsersPage {
    visit() {
        cy.visit('/');
    }

    validarURL() {
        return cy.url();
    }

    validarBtnExcluirUsuarios() {
        return cy.get(':nth-child(1) > :nth-child(5) > .row > .btn-danger')
    }
}

export default ListUsersPage;