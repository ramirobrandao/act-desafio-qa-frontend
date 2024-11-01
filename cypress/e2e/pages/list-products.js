/// <reference types="cypress"/>

class ListProductsPage {
    visit() {
        cy.visit('/');
    }

    validarURL() {
        return cy.url();
    }

    validarBtnExcluirProdutos() {
        return cy.get(':nth-child(1) > :nth-child(6) > .row > .btn-danger')
    }
}

export default ListProductsPage;