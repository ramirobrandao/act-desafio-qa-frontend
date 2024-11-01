/// <reference types="cypress"/>

import LoginPage from '../pages/login.js';
import HomePage from '../pages/home.js';
import RegisterPage from '../pages/register.js';

//funcionalidade
describe('Register', () => {
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
    it.only('Cadastro de administrador com sucesso', () => {
        registerPage.campoNome()
        registerPage.campoEmail()
        registerPage.campoPassword()
        registerPage.checkboxTrue()
        registerPage.linkCadastro()

        //validações de alert com mensagem de cadastro
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Cadastro realizado com sucesso');
        });

        cy.wait(1000) //aguardar 1 segundo depois do alert para redirecionar para home 
        homePage.validarBtnLogout().should('be.visible')
        homePage.validarTxtWelcome().should('be.visible')
        homePage.validarTxt().should('be.visible')

        //validações dos botões home 
        homePage.validarBtnCadastrarUsuarios().should('be.visible')
        homePage.validarBtnListarUsuarios().should('be.visible')
        homePage.validarBtnCadastrarProdutos().should('be.visible')
        homePage.validarBtnListarProdutos().should('be.visible')
        homePage.validarBtnReports().should('be.visible')

    })

    //cenários sem sucesso
    it('cadastro de usuário todos os campos em branco ', () => {
        registerPage.btnCadastro()

        //validações campos nome, usuário e senha em branco 
        cy.contains('span', "Nome é obrigatório")
        cy.contains('span', "Email é obrigatório")
        cy.contains('span', "Password é obrigatório")
    })

    it('cadastro de usuário campos email e senha em branco', () => {
        registerPage.campoNome()
        registerPage.btnCadastro()

        //validações campos email e senha em branco 
        cy.contains('span', "Email é obrigatório")
        cy.contains('span', "Password é obrigatório")
    })

    it('cadastro de usuário campos nome e senha em branco', () => {
        registerPage.campoEmail()
        registerPage.btnCadastro()

        //validações campos nome e senha em branco 
        cy.contains('span', "Nome é obrigatório")
        cy.contains('span', "Password é obrigatório")
    })

    it('cadastro de usuário campos nome e email em branco', () => {
        registerPage.campoPassword()
        registerPage.btnCadastro()

        //validações campos nome e email em branco 
        cy.contains('span', "Nome é obrigatório")
        cy.contains('span', "Email é obrigatório")
    })
})
