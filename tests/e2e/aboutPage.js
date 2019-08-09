let EC = protractor.ExpectedConditions;

const elements = {
    urlPath : 'about',
    linkedinButton : $('.social .linkedin'),
    textHeading :  $('section[class = \'hero about\'] .content h1'),
    heading: 'Made in Prague',
    title:'About – Salsita Software'

};

let AboutPage = function (){
    this.getElements = elements;
    this.get = ()=>{
        browser.get('https://www.salsitasoft.com/' + elements.urlPath);
    };

    this.waitOnLinkClickable = ()=>{
        browser.wait(EC.elementToBeClickable(elements.linkedinButton), 4000);
    }



};
module.exports = AboutPage;