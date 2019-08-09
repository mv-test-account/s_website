let EC = protractor.ExpectedConditions;

const elements = {
    buttonSubmit : $('.hero-wrap button[type=submit]'),
    urlPath: "https://blog.salsitasoft.com/",
    textTitleLocator : $('.hero-title'),
    textTitle : 'SAUCECODE',
    textHeroLocator :$('.hero-text') ,
    textHero : 'Subscribe to Salsita blog',
    menuBurger :  $('.site-header .sidebar-toggle'),
    buttonCloseSideDialog :  $('.sidebar-scrollable .sidebar-toggle'),
    buttonLearnMore : $('[class*=widget-text] a'),
    title:'SauceCode'

};

const blogPage = function (){
    this.getElements = elements;
    this.get = ()=>{
        browser.get('https://blog.salsitasoft.com');
    };
    this. waitOnSubmitButton= ()=>{
        browser.wait(EC.elementToBeClickable(elements.buttonSubmit), 4000, 'submit button is not visible');
    }



};
module.exports = blogPage;