/// <reference types="cypress"/>

class LoginPage {
    visit() {
        cy.visit('/');
    }

    validarURL() {
        return cy.url();
    }

    loginUsuario(usuarioLogin) {
        cy.get('#email').type('ramirobrandao@outlook.com')
    }

    loginSenha(usuarioSenha) {
        cy.get('#password').type('123456')
    }

    loginUsuarioInvalido(usuarioLoginInvalido) {
        cy.get('#email').type('ramiro@qa.com')
    }

    loginSenhaInvalida(usuarioSenhaInvalida) {
        cy.get('#password').type('111111')
    }

    entrar() {
        return cy.get('[data-testid="entrar"]').click()
    }

    validarLogin() {
        return cy.get('.product_label');
    }

    validarMessagensErro() {
        return cy.get('alert alert-secondary alert-dismissible')
    }
}

export default LoginPage;

