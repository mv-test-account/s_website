let EC = protractor.ExpectedConditions;

const menuItems = {
    portfolio: $$(".nav-links li").get(0),
    services: $$(".nav-links li").get(1),
    careers: $$(".nav-links li").get(2),
    about: $$(".nav-links li").get(3),
    "blog.salsitasoft": $$(".nav-links li").get(4),

};

const elements = {
    buttonGetInTouch: $('a[class*=get-in-touch]'),
    iconSalsita: $('header .salsita'),
    buttonFreeConsult: $('.container a[class=button]'),
    linkLabel: $('h3[class=label]:first-of-type'),
    buttonHamburger: $('button[class=hamburger]'),
    buttonCloseSideDialog: $('button[class*=open]'),
    textHeading: $('h1[class=heading-sequential]'),
    linksInSideMenu: $$('.nav li a'),
    linksToSocialSideMenu: $$('.social li a'),
    footerLinksToSocial: $$('.copyright +ul li a'),
    elenemtsInSideMenu: $$('.social li'),
};

const required = {
    urlPath: 'https://www.salsitasoft.com/',
    title: 'Salsita Software – Designing and Developing Web & Mobile Apps',
    heading: 'We build exceptional web\nand mobile applications.',
    hrefLinks:
        [   'https://www.salsitasoft.com/',
            'https://www.salsitasoft.com/portfolio',
            'https://www.salsitasoft.com/services',
            'https://www.salsitasoft.com/careers',
            'https://www.salsitasoft.com/about',
            'https://blog.salsitasoft.com/',
            'https://www.salsitasoft.com/contact'],
    socialLinks:
        [   'https://linkedin.com/company/salsita-software',
            'https://twitter.com/salsita',
            'https://facebook.com/salsitasoft',
            'https://instagram.com/salsitasoft',
            'https://github.com/salsita']
};


let HomePage = function () {
    this.getElements = elements;
    this.getRequired = required;
    this.getMenuItems = menuItems;
    this.get = () => {
        browser.get(required.urlPath);
    };

    this.waitOnMainText = () => {
        browser.wait(EC.presenceOf($('div[class=logo-strip-container]')));
    };
};
module.exports = HomePage;