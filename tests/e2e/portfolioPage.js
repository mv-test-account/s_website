let EC = protractor.ExpectedConditions;

const elements = {
    link: $('.links div[class=link]:first-child'),
    links: $('.links div[class=link]'),
    textHeading : $('h1[class=heading-sequential]'),
    heading : 'We thrive on\nchallenging projects.'

};

let PortfolioPage = function (){
    this.getElements = elements;

    this.waitOnLinksClickable = function () {
        browser.wait(EC.elementToBeClickable(elements.link), 4000);
    }

};
module.exports = new PortfolioPage();