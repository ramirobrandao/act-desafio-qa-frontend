/// <reference types="cypress"/>

import LoginPage from '../pages/login.js';
import HomePage from '../pages/home.js';
import ListUsersPage from '../pages/list-users.js';

//funcionalidade
describe('list-users', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const listUsersPage = new ListUsersPage();

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

    it('Visualizar lista dos usuários', () => {
        //ação de clicar e ir lista dos usuários
        homePage.clicarBtnListarUsuarios()
        cy.contains('h1', "Lista dos usuários")
        cy.contains('th', "Nome")
        cy.contains('th', "Email")
        cy.contains('th', "Senha")
        cy.contains('th', "Administrador")
        cy.contains('th', "Ações")
        listUsersPage.validarBtnExcluirUsuarios().should('be.visible')
        homePage.validarURL().should('contain', 'admin/listarusuarios')

    })

})
