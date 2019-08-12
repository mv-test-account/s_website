let lib = require('../lib/pages');

describe('test menu tab', () => {
    beforeEach(function () {
        lib.home.get();
    });

    afterAll(function () {
        // browser.close()
    });

    it('test portfolio', function () {
        lib.home.getMenuItems.portfolio.click();
        lib.helper.waitOnTitle(lib.portfolio.getRequired.title);

        expect(browser.getCurrentUrl()).toContain(lib.portfolio.getRequired.urlPath);
        expect(lib.portfolio.getElements.textHeading.getText()).toBe(lib.portfolio.getRequired.heading);
    });

    it('test careers tab', function () {
        lib.home.getMenuItems.careers.click();
        lib.helper.waitOnTitle(lib.career.getRequired.title);

        expect(browser.getCurrentUrl()).toContain(lib.career.getRequired.urlPath);
        expect(lib.career.getElements.textHeading.getText()).toBe(lib.career.getRequired.heading);
    });

    it('test about tab', function () {
        lib.home.getMenuItems.about.click();
        lib.helper.waitOnTitle(lib.about.getRequired.title);

        expect(browser.getCurrentUrl()).toContain(lib.about.getRequired.urlPath);
        expect(lib.about.getElements.textHeading.getText()).toBe(lib.about.getRequired.heading);
    });

    it('test blog post page', function () {
        lib.home.getMenuItems["blog.salsitasoft"].click();
        lib.helper.switchToSecondWindow();
        lib.helper.waitOnTitle(lib.blog.getRequired.title);

        expect(browser.getCurrentUrl()).toBe(lib.blog.getRequired.urlPath);
        expect(lib.blog.getElements.textTitleLocator.getText()).toBe(lib.blog.getRequired.textTitle);
        expect(lib.blog.getElements.textHeroLocator.getText()).toBe(lib.blog.getRequired.textHero);
    });

    it('test getInTouch button', function () {
        lib.home.getElements.buttonGetInTouch.click();
        lib.helper.waitOnTitle(lib.contact.getRequired.title);

        expect(browser.getCurrentUrl()).toContain(lib.contact.getRequired.urlPath);
        expect(lib.contact.getElements.textHeading.getText()).toBe(lib.contact.getRequired.heading);

        lib.contact.fillForm('name', '234234234234', 'email', 'unknown destination');

        expect(browser.getCurrentUrl()).toContain(lib.contact.getRequired.urlPath);
    });

    it("test side menu appearance", function () {
        lib.helper.scrollToElement(lib.home.getElements.linkLabel);
        lib.home.getElements.buttonHamburger.click();
        lib.home.getElements.linksInSideMenu.then((links) => {
            links.forEach((link, index) => {
                link.getAttribute('href').then(function (href) {
                    expect(href).toBe(lib.home.getRequired.hrefLinks[index])
                })
            })
        });

        lib.home.getElements.linksToSocialSideMenu.then((links) => {
            links.forEach(async (link, index) => {
                link.getAttribute('href').then(function (href) {
                    expect(href).toBe(lib.home.getRequired.socialLinks[index])
                })
            })
        });

        lib.home.getElements.buttonCloseSideDialog.click();
        lib.home.getElements.elenemtsInSideMenu.then((links) => {
            links.forEach(async (link, index) => {
                link.getAttribute('style').then(function (style) {
                    let styles = style.split(';');
                    let opacity = styles[0].split(':');
                    expect(opacity[1].trim()).toBe("0");
                });
            });
        });

    });

    it("test footer section", async function () {
         lib.home.getElements.footerLinksToSocial.then(async function (footers) {
            footers.forEach( (link, index) => {
                    link.getAttribute('href').then(function (href) {
                    expect(href).toBe(lib.home.getRequired.socialLinks[index]);
                    });
                });
            });
    });

});

describe('second test', function () {
    it('test home page under icon', function () {
        lib.portfolio.get();
        lib.home.getElements.iconSalsita.click();
        lib.helper.waitOnTitle(lib.home.getRequired.title);

        expect(lib.home.getElements.textHeading.getText()).toBe(lib.home.getRequired.heading);

        lib.home.getElements.buttonFreeConsult.isPresent().then(button => {
            if (button) {
                lib.home.getElements.buttonFreeConsult.click();
                lib.contact.waitOnGdprCheckbox();
                expect(browser.getCurrentUrl()).toContain(lib.contact.getRequired.urlPath)
            } else {
                console.log('Button was not displayed')
            }
        });
    });
});