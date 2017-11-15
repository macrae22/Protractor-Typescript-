import { Config } from "protractor";
import { browser } from "protractor/built";


export const config: Config = {
    restartBrowserBetweenTests: true,
    framework: 'jasmine',
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [
                '--start-maximized'
            ]
        }
    },

    specs: [
        '../**/*.js',
    ],

    seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    onPrepare: function () {
        // The require statement must be down here, since jasmine-reporters
        // needs jasmine to be in the global and protractor does not guarantee
        // this until inside the onPrepare function.
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter('xmloutput', true, true));
    },
    params: {
        environment: 'https://qa-web.bud.co.uk',
    },
};
