let EC = protractor.ExpectedConditions;

const elements = {
    buttonFreeConsult : $('a[class*=big-tech]'),
    buttonGetStarted :  $('a[class*=bigger]'),          //pointing to contacts
    linkMoreProjects : $('.link-decorator .link'),   //pointing to portfolio
};
const required = {
    urlPath : 'technologies/react',
    heading: 'Need React Developers?',
    title: 'React – Technologies – Salsita Software',
};

let AboutPage = function (){
    this.getElements = elements;
    this.getRequired = required;
    this.get = ()=>{
        browser.get('https://www.salsitasoft.com/' + elements.urlPath);
    };
};
module.exports = AboutPage;