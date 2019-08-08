exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities:{
        browserName:"chrome"
    },

    chromeOptions: {
        args: [  "--disable-gpu","--window-size=1024,800" ]
    },
    suites: {
        homepage: 'tests/e2e/*spec.js'
            // search: ['tests/e2e/contact_search/**/*Spec.js',
            // 'tests/e2e/venue_search/**/*Spec.js']
    },

    // ,capabilities: {
    //     'browserName': 'firefox'
    // },


    onPrepare: () => {
        browser.waitForAngularEnabled(false);

        // browser.driver.manage().window().maximize();
    }
};


