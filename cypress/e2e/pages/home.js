/// <reference types="cypress"/>

class HomePage {
    visit() {
        cy.visit('/');
    }

    validarBtnLogout() {
        return cy.get('[data-testid="logout"]')
    }

    validarTxtWelcome() {
        return cy.get('.jumbotron')
    }

    validarTxt() {
        return cy.get('.lead')
    }

    validarBtnReports() {
        return cy.get('[data-testid="relatorios"]')
    }

    clicarBtnReports() {
        cy.get('[data-testid="relatorios"]').click()
    }

    validarBtnListarProdutos() {
        return cy.get('[data-testid="listarProdutos"]')
    }

    clicarBtnListarProdutos() {
        cy.get('[data-testid="listarProdutos"]').click()
    }

    validarBtnCadastrarProdutos() {
        return cy.get('[data-testid="cadastrarProdutos"]')
    }

    clicarBtnCadastrarProdutos() {
        cy.get('[data-testid="cadastrarProdutos"]').click()
    }

    validarBtnListarUsuarios() {
        return cy.get('[data-testid="listarUsuarios"]')
    }

    clicarBtnListarUsuarios() {
        cy.get('[data-testid="listarUsuarios"]').click()
    }

    validarBtnCadastrarUsuarios() {
        return cy.get('[data-testid="cadastrarUsuarios"]')
    }

    validarURL() {
        return cy.url();
    }

}

export default HomePage;

