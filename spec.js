let urlPrefix = ['portfolio', "careers", "about","blog.salsitasoft"];
let EC = protractor.ExpectedConditions;

describe('test menu tab',()=>{
    beforeEach(function(){
        browser.get('https://www.salsitasoft.com/');
    });

    afterAll(function(){
        browser.close()
    });

    it('test porfolio', function () {
        let links = $$(".nav-links li");
        links.get(0).click();
        browser.wait(EC.urlContains(urlPrefix[0]), 4000);
        expect(browser.getCurrentUrl()).toContain(urlPrefix[0]);
        browser.wait(EC.elementToBeClickable($$('.links div[class=link]').get(0)), 4000);

        expect($('.heading-sequential').getText()).toBe('We thrive on\nchallenging projects.');
        //pridat kontrolu na linky
    });

    it('test careers tab', async function () {
        let links = $$(".nav-links li");
        links.get(1).click();
        browser.wait(EC.urlContains(urlPrefix[1]), 4000);
        expect(browser.getCurrentUrl()).toContain(urlPrefix[1]);
        browser.wait(EC.elementToBeClickable($('.content .title:first-child')), 4000);

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
        })

        browser.wait(EC.urlContains(urlPrefix[3]), 2000);
        expect(browser.getCurrentUrl()).toContain(urlPrefix[3]);
        expect($('.hero-title').getText()).toBe('SAUCECODE');
        expect($('.hero-text').getText()).toBe('Subscribe to Salsita blog');
    });

    it('test getINtouch button', function () {
        element(by.css('a[class*=get-in-touch]')).click();

        browser.wait(EC.elementToBeClickable($('#sender-gdpr')),5000);

        expect(browser.getCurrentUrl()).toContain('contact');
        expect($('.heading-sequential').getText()).toBe('Ready to talk?');

        $('#sender-name').sendKeys('testing account');
        //$('#sender-email').sendKeys('email@em.com');
        $('#sender-phone').sendKeys('+420745678695');
        $('#sender-company').sendKeys('TESTINg comapny');
        $('#sender-description').sendKeys('first description with should be quite long');
        $('#sender-gdpr').click();
        $('.send-container .button').click();

        expect(browser.getCurrentUrl()).toContain('contact');

        // it will be good to have tooltip validation
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
    it('test home page under icon', async function () {
        browser.get('https://www.salsitasoft.com/contact');
        $('a[class*=logo-salsita]:first-child').click();

        let freeConsultButton = await $('.container a[class=button]');
        browser.wait(EC.elementToBeClickable(freeConsultButton),5000);

       expect($('h1[class=heading-sequential]').getText()).toBe('We build exceptional web\nand mobile applications.');


        freeConsultButton.click();
        browser.wait(EC.elementToBeClickable($('#sender-gdpr')), 5000);
        expect(browser.getCurrentUrl()).toContain('contact');
    });
});