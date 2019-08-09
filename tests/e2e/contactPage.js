let EC = protractor.ExpectedConditions;
const pageHelper = require('./pageHelper');
const helper = new pageHelper();
const elements = {
    inputName : $('#sender-name'),
    inputPhone : $('#sender-phone'),
    inputEmail : $('#sender-email'),
    inputDescription : $('#sender-description'),
    checkboxGdpr   : $('#sender-gdpr'),
    buttonOk    : $('.send-container .button .text'),
    textHeading : $('.heading-sequential'),
    heading : 'Ready to talk?',
    urlPath: 'contact',
    title : 'Contact – Salsita Software'

};

 let ContactPage = function(){

    this.getElements = elements;

    this.get = function() {
        browser.get('https://www.salsitasoft.com/' + elements.urlPath);
    };

    this.waitOnGdprCheckbox = ()=>{
        browser.wait(EC.elementToBeClickable(elements.checkboxGdpr), 5000);
    };

    this.fillForm = (name, phone, email, descprition)=>{
        elements.inputName.sendKeys(name);
        elements.inputPhone.sendKeys(phone);
        elements.inputEmail.sendKeys(email);
        elements.inputDescription.sendKeys(descprition);
        elements.checkboxGdpr.click();
        helper.scrollToElement(elements.buttonOk);
    }

 };
module.exports = ContactPage;