/// <reference types="cypress"/>

import LoginPage from '../pages/login.js';
import HomePage from '../pages/home.js';
import ListProductsPage from '../pages/list-products.js';

//funcionalidade
describe('list-products', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const listProductsPage = new ListProductsPage();

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

    it('Visualizar lista dos produtos', () => {
        //ação de clicar e ir lista dos usuários
        homePage.clicarBtnListarProdutos()
        cy.contains('h1', "Lista dos Produtos")
        cy.contains('th', "Nome")
        cy.contains('th', "Preço")
        cy.contains('th', "Descrição")
        cy.contains('th', "Quantidade")
        cy.contains('th', "Ações")
        listProductsPage.validarBtnExcluirProdutos().should('be.visible')
        homePage.validarURL().should('contain', '/admin/listarprodutos')

    })

})
