/// <reference types="cypress"/>

class RegisterProducts {
    visit() {
        cy.visit('/');
    }

    validarURL() {
        return cy.url();
    }

    campoNome(nomeCampo) {
        cy.get(('[data-testid="nome"]')).type('Notebook test')
    }

    campoPrice(priceCampo) {
        cy.get(('[data-testid="preco"]')).type('100')
    }

    campoDescription(descriptionCampo) {
        cy.get('[data-testid="descricao"]').type('TEST TEST TEST')
    }

    campoQuantity(quantityCampo) {
        cy.get('[data-testid="quantity"]').type('5')
    }

    clicarBtnCadastroProdutos(produtosCadastro) {
        cy.get('[data-testid="cadastarProdutos"]').click()
    }

}

export default RegisterProducts;