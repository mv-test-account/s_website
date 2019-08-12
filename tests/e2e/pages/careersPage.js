let EC = protractor.ExpectedConditions;

const elements = {
    allPositions : $('.content .title'),
    linkToPosition : $('.content .title:first-child'),
    textHeading : $('h1[class=heading-sequential]'),
};

const required = {
    urlPath : 'careers',
    heading : 'Career growth in a\nsuper smart team.',
    title:'Careers – Salsita Software'
};

let CareerPage = function (){
    this.getElements = elements;
    this.getRequired = required;
    this.get = ()=>{
        browser.get('https://www.salsitasoft.com/' + required.urlPath);
    };
};
module.exports = CareerPage;