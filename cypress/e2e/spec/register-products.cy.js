/// <reference types="cypress"/>

import LoginPage from '../pages/login.js';
import HomePage from '../pages/home.js';
import RegisterProductsPage from '../pages/register-products.js';

//funcionalidade
describe('Register products', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const registerProductsPage = new RegisterProductsPage();

    //acessar a página de cadastro antes de executar cada cenário
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
        homePage.clicarBtnCadastrarProdutos()
        //validações página cadastro de produtos
        cy.contains('h1', "Cadastro de Produtos")
        registerProductsPage.validarURL().should('contain', '/admin/cadastrarprodutos')

    });

    //cenário de sucesso
    it.only('Cadastro de produto com sucesso', () => {
        registerProductsPage.campoNome()
        registerProductsPage.campoPrice()
        registerProductsPage.campoDescription()
        registerProductsPage.campoQuantity()

        registerProductsPage.clicarBtnCadastroProdutos()
        homePage.validarURL().should('contain', '/admin/listarprodutos')
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
