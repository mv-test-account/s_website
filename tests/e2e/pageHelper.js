let EC = protractor.ExpectedConditions;
const elements = {
};

let pageHelper = function (){
    this.getPageHelper = elements;

    this.switchToSecondWindow = ()=>{
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        });
    };
    this.scrollToElement = (element)=>{
        browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
        element.click();
    };
    this.waitOnTitle = (title)=>{
        browser.wait(EC.titleContains(title), 5000, "`wait on title " + $(elements.title) + " was not successful");
    }
};
module.exports = pageHelper;