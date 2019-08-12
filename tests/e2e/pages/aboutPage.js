let EC = protractor.ExpectedConditions;

const elements = {
    linkedinButton : $('.social .linkedin'),
    textHeading :  $('section[class = \'hero about\'] .content h1'),
};
const required = {
    urlPath : 'about',
    heading: 'Made in Prague',
    title: 'About – Salsita Software',
};

let AboutPage = function (){
    this.getElements = elements;
    this.getRequired = required;
    this.get = ()=>{
        browser.get('https://www.salsitasoft.com/' + elements.urlPath);
    };
};
module.exports = AboutPage;