let EC = protractor.ExpectedConditions;

const elements = {
    buttonSubmit: $('.hero-wrap button[type=submit]'),
    textTitleLocator: $('.hero-title'),
    textHeroLocator: $('.hero-text'),
    menuBurger: $('.site-header .sidebar-toggle'),
    buttonCloseSideDialog: $('.sidebar-scrollable .sidebar-toggle'),
    buttonLearnMore: $('[class*=widget-text] a'),
};

const required = {
    urlPath: "https://blog.salsitasoft.com/",
    textTitle: 'SAUCECODE',
    textHero: 'Subscribe to Salsita blog',
    title: 'SauceCode'
};

const blogPage = function () {
    this.getElements = elements;
    this.getRequired = required;
    this.get = () => {
        browser.get('https://blog.salsitasoft.com');
    };
};
module.exports = blogPage;