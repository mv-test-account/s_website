let EC = protractor.ExpectedConditions;


let sidebar = $('body[class*=sidebar-opened] .sidebar')
const elements = {
    buttonSubmit: $('.hero-wrap button[type=submit]'),
    textTitleLocator: $('.hero-title'),
    textHeroLocator: $('.hero-text'),
    menuBurgerOpen: $('.site-header .sidebar-toggle'),
    buttonCloseSideDialog: $('.sidebar-scrollable .sidebar-toggle'),
    buttonLearnMore: $('[class*=widget-text] a'),
    buttonMoveUp: $('.inner-wide .offsite-links + .square'),
    buttonSubscribe: $('.hero-wrap .gh-subscribe-form'),
    sideBarOpened: $('body[class*=sidebar-opened]'),
    buttonSidebarLearn: sidebar.$('.widget-text a'),
    menuBurgerClose: sidebar.$('.sidebar-toggle'),
    textWidgetTitles: sidebar.$$('.widget-area h2[class=widget-title]'),
};

const required = {
    urlPath: "https://blog.salsitasoft.com/",
    textTitle: 'SAUCECODE',
    textHero: 'Subscribe to Salsita blog',
    title: 'SauceCode',
    sideMenuHeadlines:
        ['ABOUT SALSITA',
            "LET'S WORK TOGETHER",
            "SALSITA'S NEWSLETTER"]
};

const blogPage = function () {
    this.getElements = elements;
    this.getRequired = required;
    this.get = () => {
        browser.get('https://blog.salsitasoft.com');
    };
};
module.exports = blogPage;