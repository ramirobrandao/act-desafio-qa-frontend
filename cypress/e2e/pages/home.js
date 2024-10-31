/// <reference types="cypress"/>

class HomePage {
    visit() {
        cy.visit('/');
    }

    validarBtnLogout() {
        return cy.get('[data-testid="logout"]')
    }

    validarTxt() {
        return cy.get('.lead')
    }

    validarBtnReports() {
        return cy.get('[data-testid="relatorios"]')
    }

    validarBtnListarProdutos() {
        return cy.get('[data-testid="listarProdutos"]')
    }

    validarBtnCadastrarProdutos() {
        return cy.get('[data-testid="cadastrarProdutos"]')
    }

    validarBtnListarUsuarios() {
        return cy.get('[data-testid="listarUsuarios"]')
    }

    validarBtnCadastrarUsuarios() {
        return cy.get('[data-testid="cadastrarUsuarios"]')
    }

    validarURL() {
        return cy.url();
    }

}

export default HomePage;

