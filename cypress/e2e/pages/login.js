/// <reference types="cypress"/>

class LoginPage {
    visit() {
        cy.visit('/');
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
        cy.get('[data-testid="entrar"]').click()
    }

    validarLogin() {
        return cy.get('.product_label');
    }

    validarListaProdutos() {
        return cy.get('#inventory_container');
    }

    validarMessagensErro() {
        return cy.get('alert alert-secondary alert-dismissible')
    }

    validarURL() {
        return cy.url();
    }
}

export default LoginPage;

