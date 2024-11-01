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
    it('Cadastro de produto com sucesso', () => {
        registerProductsPage.campoName()
        registerProductsPage.campoPrice()
        registerProductsPage.campoDescription()
        registerProductsPage.campoQuantity()

        registerProductsPage.clicarBtnCadastroProdutos()
        homePage.validarURL().should('contain', '/admin/listarprodutos')
    })

    //cenários sem sucesso
    it('Cadastro de produto já existente', () => {
        registerProductsPage.campoNameProductExist()
        registerProductsPage.campoPrice()
        registerProductsPage.campoDescription()
        registerProductsPage.campoQuantity()
        registerProductsPage.clicarBtnCadastroProdutos()

        //valicações produto já cadastrado
        cy.contains('span', "Já existe produto com esse nome")
        homePage.validarURL().should('contain', '/admin/cadastrarprodutos')
    })

    it('cadastro de produtos todos os campos em branco ', () => {
        registerProductsPage.clicarBtnCadastroProdutos()

        //validações campos nome, preço, descricação e quantidade em branco
        cy.contains('span', "Nome é obrigatório")
        cy.contains('span', "Preco é obrigatório")
        cy.contains('span', "Descricao é obrigatório")
        cy.contains('span', "Quantidade é obrigatório")
        registerProductsPage.validarURL().should('contain', '/admin/cadastrarprodutos')
    })

    it('cadastro de produtos campos preço, descrição e quantidade em branco', () => {
        registerProductsPage.campoName()

        registerProductsPage.clicarBtnCadastroProdutos()

        //validações campos preço, descrição e quantidade em branco
        cy.contains('span', "Preco é obrigatório")
        cy.contains('span', "Descricao é obrigatório")
        cy.contains('span', "Quantidade é obrigatório")
        registerProductsPage.validarURL().should('contain', '/admin/cadastrarprodutos')
    })

    it('cadastro de produtos campos nome, descrição e quantidade em branco', () => {
        registerProductsPage.campoPrice()

        registerProductsPage.clicarBtnCadastroProdutos()

        //validações campos preço, descrição e quantidade em branco
        cy.contains('span', "Nome é obrigatório")
        cy.contains('span', "Descricao é obrigatório")
        cy.contains('span', "Quantidade é obrigatório")
        registerProductsPage.validarURL().should('contain', '/admin/cadastrarprodutos')
    })

    it('cadastro de produtos campos nome, preço e descrição em branco', () => {
        registerProductsPage.campoQuantity()

        registerProductsPage.clicarBtnCadastroProdutos()

        //validações campos nome, preço e descrição 
        cy.contains('span', "Nome é obrigatório")
        cy.contains('span', "Preco é obrigatório")
        cy.contains('span', "Descricao é obrigatório")
        registerProductsPage.validarURL().should('contain', '/admin/cadastrarprodutos')
    })

    it('cadastro de produtos campos nome, preço e quantidade em branco', () => {
        registerProductsPage.campoDescription()

        registerProductsPage.clicarBtnCadastroProdutos()

        //validações campos nome, preço e descrição em branco
        cy.contains('span', "Nome é obrigatório")
        cy.contains('span', "Preco é obrigatório")
        cy.contains('span', "Quantidade é obrigatório")
        registerProductsPage.validarURL().should('contain', '/admin/cadastrarprodutos')
    })

})
