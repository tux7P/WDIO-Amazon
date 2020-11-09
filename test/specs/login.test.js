const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
require('dotenv').config();

var username = process.env.USER;
var password = process.env.PASSWORD;

describe('Amazon.com registration', () => {
    it('Should navigate to Sign-in page', () => {
        LoginPage.open();
        $('#nav-link-accountList').click();
        const actualUrl = browser.getUrl();
        expect(actualUrl).includes('signin');
    });
});


