/// <reference types="cypress"/>

const randomNumber = Math.floor(Math.random() * 1000) + 1;

class RegisterPage {

    visit() {
        cy.visit('/');
    }

    linkCadastro() {
        cy.get('[data-testid="cadastrar"]').click()
    }

    btnCadastro() {
        cy.get('[data-testid="cadastrar"]').click()
    }

    campoNome(nomeCampo) {
        cy.get('#nome').type('Ramiro Brandão')
    }

    campoEmail(emailCampo) {
        cy.get('#email').type(`teste${randomNumber}@email.com`)
    }

    campoPassword(passwordCampo) {
        cy.get('#password').type('123456')
    }

    checkboxTrue(trueCheckbox) {
        cy.get('#administrador').check();
    }

    validarMessagemSucesso() {
        return cy.get('.alert alert-dismissible alert-primary')
    }

    validarURL() {
        return cy.url();
    }

    loginUsuarioInvalido(usuarioLoginInvalido) {
        cy.get('#email').type('ramiro@qa.com')
    }

    loginSenhaInvalida(usuarioSenhaInvalida) {
        cy.get('#password').type('111111')
    }

    validarLogin() {
        return cy.get('.product_label');
    }

}

export default RegisterPage;

