let fs = require('fs');

let EC = protractor.ExpectedConditions;
const elements = {};

let pageHelper = function (){
    this.getPageHelper = elements;

    this.switchToSecondWindow = ()=>{
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        });
    };

    this.scrollToElement = (element)=>{
        browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());
    };
    this.getCurrentPosition =()=>{
       return  browser.executeScript("return window.pageYOffset;");
    }
    this.waitUntilY0 =()=>{
        browser.wait(async function () {
            let xCor =  parseInt( await browser.executeScript("return window.pageYOffset;"));
            if (xCor === 0) {return true;}
            return false;
        }, 3000);
    }


    this.waitOnTitle = (title)=>{
        browser.wait(EC.titleContains(title), 5000, "`Wait on title '" + title + "' was not successful");
    };

    this.waitOnPresenceOfElement = (element)=>{
        browser.wait(EC.presenceOf(element), 5000, "`Wait on presence of element '" + element + "' was not successful");
    };

    this.waitOnVisibilityOfElement = (element)=>{
        browser.wait(EC.visibilityOf(element), 5000, "`Wait on visibility of element '" + element + "' was not successful");
    };

    this.waitOnClickableElement = (element)=>{
        browser.wait(EC.elementToBeClickable(element), 5000, "`Wait on visibility of element '" + element + "' was not successful");
    };

    this.takeScreenshot=()=>{
        browser.takeScreenshot().then(function (png) {
            this.writeScreenShot(png, 'exception.png');
        });
    };

    writeScreenShot = (data, filename)=>{
        var stream = fs.createWriteStream(filename);

        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
};
module.exports = pageHelper;