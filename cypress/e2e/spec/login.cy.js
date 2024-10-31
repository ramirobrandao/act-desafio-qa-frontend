/// <reference types="cypress"/>

import LoginPage from '../pages/login.js';
import HomePage from '../pages/home.js';

//funcionalidade
describe('Login', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    //acessar o site antes de executar cada cenário
    beforeEach(() => {
        loginPage.visit()
        loginPage.validarURL().should('contain', '/login')
    });

    //cenário de sucesso
    it.only('Login com sucesso', () => {
        loginPage.loginUsuario()
        loginPage.loginSenha()
        loginPage.entrar()
        //validações de login
        homePage.validarTxtWelcome().should('have.text', "Bem Vindo Ramiro")
        homePage.validarTxt().should('have.text', "Este é seu sistema para administrar seu ecommerce.")

        homePage.validarBtnLogout().should('be.visible')
        homePage.validarURL().should('contain', '/admin/home')
    })

    //cenários sem sucesso
    it('Login com usuário e senha vazio', () => {
        loginPage.entrar()
        //validações usuário e senha vazio
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Email é obrigatório');
            expect(alertText).to.equal('Password é obrigatório');
        });

    })

    it('Login com usuário vazio', () => {
        loginPage.loginSenha()
        loginPage.entrar()
        //validações usuário vazio
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Email é obrigatório');
        });

    })

    it('Login com senha vazia', () => {
        loginPage.loginUsuario()
        loginPage.entrar()
        //validações senha vazia
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Password é obrigatório');
        });

    })

    it('Login com usuário inválido', () => {
        loginPage.loginUsuarioInvalido()
        loginPage.loginSenha()
        loginPage.entrar()
        //validações de usuário inválido
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Email e/ou senha inválidos');
        });

    })

    it('Login com senha inválida', () => {
        loginPage.loginUsuario()
        loginPage.loginSenhaInvalida()
        loginPage.entrar()
        //validações de senha inválida
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Email e/ou senha inválidos');
        });

    })

})
