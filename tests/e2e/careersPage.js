let EC = protractor.ExpectedConditions;

const elements = {
    urlPath : 'careers',
    allPositions : $('.content .title'),
    linkToPosition : $('.content .title:first-child'),
    textHeading : $('h1[class=heading-sequential]'),
    heading : 'Career growth in a\nsuper smart team.',
    title:'Careers – Salsita Software'

};

let CareerPage = function (){
    this.getElements = elements;
    this.get = ()=>{
        browser.get('https://www.salsitasoft.com/' + elements.urlPath);
    };

    this. waitOnLinkToCareer= ()=>{
        browser.wait(EC.elementToBeClickable(elements.linkToPosition), 4000, 'position element is not visible');
    }



};
module.exports = CareerPage;