let EC = protractor.ExpectedConditions;

const elements = {
    link: $('.links div[class=link]:first-child'),
    links: $('.links div[class=link]'),
    textHeading: $('h1[class=heading-sequential]'),
};

const required = {
    heading: 'We thrive on\nchallenging projects.',
    urlPath: 'portfolio',
    title: 'Portfolio – Salsita Software'
};

let PortfolioPage = function (){
    this.getElements = elements;
    this.getRequired = required;
    this.get = ()=>{
        browser.get('https://www.salsitasoft.com/' + required.urlPath);
    };

    this.waitOnLinksClickable = function () {
        browser.wait(EC.elementToBeClickable(elements.link), 4000);
    }

};
module.exports = PortfolioPage;