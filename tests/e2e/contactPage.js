let EC = protractor.ExpectedConditions;
const elements = {
    inputName : $('#sender-name'),
    inputPhone : $('#sender-phone'),
    inputEmail : $('#sender-email'),
    inputDescription : $('#sender-description'),
    checkboxGdpr   : $('#sender-gdpr'),
    buttonOk    : $('.send-container .button .text'),
    textHeading : $('.heading-sequential'),
    heading : 'Ready to talk?'

};

 let ContactPage = function(){

    this.getElements = elements;

    this.get = function() {
        browser.get('https://www.salsitasoft.com/contact');
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
        browser.executeScript("arguments[0].scrollIntoView();", elements.buttonOk.getWebElement());
        browser.sleep(4000);
        elements.buttonOk.click();
    }

 };
module.exports = new ContactPage();