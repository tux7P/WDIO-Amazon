const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
require('dotenv').config();

var username = process.env.USER;
var password = process.env.PASSWORD;

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login(username, password);
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });
});


