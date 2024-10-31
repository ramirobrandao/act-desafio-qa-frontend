/// <reference types="cypress"/>

import LoginPage from '../pages/login.js';
import HomePage from '../pages/home.js';

//funcionalidade
describe('Login', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    //asar o site cesantes de executar cada cenário
    beforeEach(() => {
        loginPage.visit()
    });

})