/// <reference types="cypress"/>

import LoginPage from '../pages/login.js';
import HomePage from '../pages/home.js';
import RegisterPage from '../pages/register.js';

//funcionalidade
describe('Login', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const registerPage = new RegisterPage();

    //acessar a página de cadastro antes de executar cada cenário
    beforeEach(() => {
        loginPage.visit()
        registerPage.linkCadastro()
        registerPage.validarURL().should('contain', '/cadastrarusuarios')
    });

    //cenário de sucesso
    it('Cadastro de administrador com sucesso', () => {
        registerPage.campoNome()
        registerPage.campoEmail()
        registerPage.campoPassword()
        registerPage.checkboxTrue()
        registerPage.linkCadastro()
        cy.wait(7) //aguarda 7 segundos para esperar o redirecionamento para home page

        //validações de cadastro
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Cadastro realizado com sucesso');
        });

        homePage.validarBtnLogout().should('be.visible')
        homePage.validarURL().should('contain', '/admin/home')
    })

    //cenários sem sucesso
    it('cadastro de usuário todos os campos em branco ', () => {
        registerPage.btnCadastro()

        //validações campos nome, usuário e senha em branco 
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Nome é obrigatório');
            expect(alertText).to.equal('Email é obrigatório');
            expect(alertText).to.equal('Password é obrigatório');
        });

    })
    it('cadastro de usuário campos email e senha em branco', () => {
        registerPage.campoNome()
        registerPage.btnCadastro()

        //validações campos email e senha em branco 
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Email é obrigatório');
            expect(alertText).to.equal('Password é obrigatório');
        });

    })

    it('cadastro de usuário campos nome e senha em branco', () => {
        registerPage.campoEmail()
        registerPage.btnCadastro()

        //validações campos nome e senha em branco 
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Nome é obrigatório');
            expect(alertText).to.equal('Password é obrigatório');
        });

    })

    it('cadastro de usuário campos nome e email em branco', () => {
        registerPage.campoPassword()
        registerPage.btnCadastro()

        //validações campos nome e email em branco 
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Nome é obrigatório');
            expect(alertText).to.equal('Email é obrigatório');
        });

    })
})
