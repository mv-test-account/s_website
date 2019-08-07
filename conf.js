exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    chromeOptions: {
        args: [  "--disable-gpu","--window-size=1024,800" ]
    },
    // ,capabilities: {
    //     'browserName': 'firefox'
    // },


    onPrepare: () => {
        browser.waitForAngularEnabled(false);
    }
}


