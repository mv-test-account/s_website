let lib = require('../lib/pages');

describe('test menu tab',()=>{
    beforeEach(function(){
        lib.home.get();
    });

    afterAll(function(){
       // browser.close()
    });

    it('test porfolio', function () {
        lib.home.getMenuItems.portfolio.click();
        lib.helper.waitOnTitle(lib.portfolio.getElements.title);

        expect(browser.getCurrentUrl()).toContain(lib.portfolio.getElements.urlPath);
        expect(lib.portfolio.getElements.textHeading.getText()).toBe(lib.portfolio.getElements.heading);
    });

    it('test careers tab', function () {
        lib.home.getMenuItems.careers.click();
        lib.helper.waitOnTitle(lib.career.getElements.title);

        expect(browser.getCurrentUrl()).toContain(lib.career.getElements.urlPath);
        expect(lib.career.getElements.textHeading.getText()).toBe(lib.career.getElements.heading);
    });

    it('test about tab', function () {
        lib.home.getMenuItems.about.click();


        lib.helper.waitOnTitle(lib.about.getElements.title);

        expect(browser.getCurrentUrl()).toContain(lib.about.getElements.urlPath);
        expect(lib.about.getElements.textHeading.getText()).toBe(lib.about.getElements.heading);
    });

    it('test blog post page', function () {
        lib.home.getMenuItems["blog.salsitasoft"].click();
        lib.helper.switchToSecondWindow();
        lib.helper.waitOnTitle(lib.blog.getElements.title);

        expect(browser.getCurrentUrl()).toBe(lib.blog.getElements.urlPath);
        expect(lib.blog.getElements.textTitleLocator.getText()).toBe(lib.blog.getElements.textTitle);
        expect(lib.blog.getElements.textHeroLocator.getText()).toBe(lib.blog.getElements.textHero);
    });

    it('test getInTouch button', function () {
        lib.home.getElements.buttonGetInTouch.click();
        lib.helper.waitOnTitle(lib.contact.getElements.title);

        expect(browser.getCurrentUrl()).toContain(lib.contact.getElements.urlPath);
        expect($('.heading-sequential').getText()).toBe('Ready to talk?');

        lib.contact.fillForm('name','234234234234','email','unknown destination');

        expect(browser.getCurrentUrl()).toContain(lib.contact.getElements.urlPath);
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
    // it('test', function () {
    //     lib.home.get();
    //    lib.contact.get()
    //        //browser.wait(EC.titleContains('SauceCode'))
    //     // browser.getCurrentUrl().then(function (title) {
    //     //     console.log('url' + title);
    //     // })
    //     browser.getTitle().then(function (title) {
    //         console.log('title' + title);
    //     })
    //
    //
    // });

    it('test home page under icon', function () {
        lib.portfolio.get();
        lib.home.getElements.iconSalsita.click();
        lib.helper.waitOnTitle(lib.home.getElements.title);

        expect(lib.home.getElements.textHeading.getText()).toBe(lib.home.getElements.heading);

        lib.home.getElements.buttonFreeConsult.isPresent().then(button => {
            if(button){
                lib.home.getElements.buttonFreeConsult.click();
                lib.contact.waitOnGdprCheckbox();
                expect(browser.getCurrentUrl()).toContain(lib.contact.getElements.urlPath)
            }else {
                console.log('Button was not dipslayed')
            }
        });
    });
});