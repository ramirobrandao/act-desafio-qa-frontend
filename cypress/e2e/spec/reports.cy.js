/// <reference types="cypress"/>

import LoginPage from '../pages/login.js';
import HomePage from '../pages/home.js';

//funcionalidade
describe('Reports', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    //acessar o site, fazer login com credenciais corretas e chegar na página home
    beforeEach(() => {
        loginPage.visit()
        loginPage.validarURL().should('contain', '/login')
        loginPage.loginUsuario()
        loginPage.loginSenha()
        loginPage.entrar()
        //validações de login
        cy.contains('h1', "Bem Vindo Ramiro Brandão")
        homePage.validarTxt().should('have.text', "Este é seu sistema para administrar seu ecommerce.")

        homePage.validarBtnLogout().should('be.visible')
        homePage.validarURL().should('contain', '/admin/home')

    });

    it('Visualizar relatórios', () => {
        //ação de clicar e ir página de relatórios
        homePage.clicarBtnReports()
        cy.contains('h1', "Em construção aguarde")
        homePage.validarURL().should('contain', 'admin/relatorios')

    })

})
