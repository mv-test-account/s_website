let EC = protractor.ExpectedConditions;

const elements = {
    buttonFreeConsult : $('a[class*=big-tech]'),
    buttonGetStarted :  $('a[class*=bigger]'),          //pointing to contacts
    linkMoreProjects : $('.link-decorator .link'),   //pointing to portfolio
};
const required = {
    urlPath : 'technologies/nodejs',
    heading: 'Need Node.js Developers?',
    title: 'Node.js – Technologies – Salsita Software',
};

let NodeJsPage = function (){
    this.getElements = elements;
    this.getRequired = required;
    this.get = ()=>{
        browser.get('https://www.salsitasoft.com/' + elements.urlPath);
    };
};
module.exports = NodeJsPage;