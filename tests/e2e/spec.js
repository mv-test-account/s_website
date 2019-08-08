//let contactPage = require('./contactPage');
let homePage = require('./homePage');
let contactPage = require('./contactPage');
let portfolioPage = require('./portfolioPage');


let urlPrefix = ['portfolio', "careers", "about","blog.salsitasoft"];
let EC = protractor.ExpectedConditions;

describe('test menu tab',()=>{
    beforeEach(function(){
        browser.get('https://www.salsitasoft.com/');
    });

    afterAll(function(){
       // browser.close()
    });

    it('test porfolio', function () {
        homePage.getMenuItems.portfolio.click();

        portfolioPage.waitOnLinksClickable();
        expect(browser.getCurrentUrl()).toContain(Object.keys(homePage.getMenuItems)[0]);
        expect(portfolioPage.getElements.textHeading.getText()).toBe(portfolioPage.getElements.heading);
        //pridat kontrolu na linky
    });

    it('test careers tab', function () {

        let links = $$(".nav-links li");
        links.get(1).click();
        browser.wait(EC.urlContains(urlPrefix[1]), 4000);
        expect(browser.getCurrentUrl()).toContain(urlPrefix[1]);
        $$('.content .title:first-child').then(function (position) {
            browser.sleep(3000);
            console.log(position.length);
        });



        //if()

         //   $('.content .title:first-child').isPresent
        browser.wait(EC.elementToBeClickable($('.content .title:first-child')), 4000, 'position element is not visible');

        expect($('.heading-sequential').getText()).toBe('Career growth in a\nsuper smart team.');

    });

    it('test about tab', function () {
        let links = $$(".nav-links li");

        links.get(2).click();
        browser.wait(EC.urlContains(urlPrefix[2]), 4000);
        expect(browser.getCurrentUrl()).toContain(urlPrefix[2]);
        browser.wait(EC.elementToBeClickable($('.social .linkedin')), 4000);

        expect($('section[class = \'hero about\'] .content h1').getText()).toBe('Made in Prague');

    });

    it('test blog post page', function () {
        let links = $$(".nav-links li");
        links.get(3).click();

        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
        });

        browser.wait(EC.urlContains(urlPrefix[3]), 2000);
        expect(browser.getCurrentUrl()).toContain(urlPrefix[3]);
        expect($('.hero-title').getText()).toBe('SAUCECODE');
        expect($('.hero-text').getText()).toBe('Subscribe to Salsita blog');
    });

    it('test getINtouch button', function () {
        homePage.getElements.buttonGetInTouch.click();
        contactPage.waitOnGdprCheckbox();

        expect(browser.getCurrentUrl()).toContain('contact');
        expect($('.heading-sequential').getText()).toBe('Ready to talk?');

        contactPage.fillForm('name','234234234234','email','unknown destination');

        expect(browser.getCurrentUrl()).toContain('contact');
    });

    // it("test footer section", async function () {
    //      $$('div[class=container] div[class=content]  li a href').then(async function (footers) {
    //         footers.forEach(async function (footer) {
    //             console.log( await footer.getText());
    //         })
    //     })
    //
    // });

});

describe('second test', function () {
    it('test home page under icon', function () {
        browser.get('https://www.salsitasoft.com/contact');
        $('a[class*=logo-salsita]:first-child').click();

        let freeConsultButton = $('.container a[class=button]');
        browser.wait(EC.elementToBeClickable(freeConsultButton),5000);

       expect($('h1[class=heading-sequential]').getText()).toBe('We build exceptional web\nand mobile applications.');


        freeConsultButton.click();
        browser.wait(EC.elementToBeClickable($('#sender-gdpr')), 5000);
        expect(browser.getCurrentUrl()).toContain('contact');
    });
});