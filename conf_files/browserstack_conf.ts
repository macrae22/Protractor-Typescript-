import { Config } from "protractor";
import { browser } from "protractor/built";

export const config: Config = {

    restartBrowserBetweenTests: true,
    framework: 'jasmine',
        'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
      
        'capabilities': {
            'browserstack.user': 'jasonbunting1',
            'browserstack.key': 'SxEqcP3hpczft7bFpEBp',
            'browserstack.debug': false,
            'browserstack.video': true,
            'browserstack.timezone': 'london',
            'project': 'Bud Systems',
            'name': 'Smoke Tests',
            'os': 'Windows',
            'os_version': '10',
            'browserName': 'Chrome',
            'browser_version': '62.0',
            'resolution': '1920x1200',
            'chromeOptions': {
                'args': [
                    '--start-maximized'
                ]
            }
          },
    
    specs: [
        '../**/*.js',
    ],
    
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    onPrepare: function () {
        // The require statement must be down here, since jasmine-reporters
        // needs jasmine to be in the global and protractor does not guarantee
        // this until inside the onPrepare function.
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter('xmloutput', true, true));
    }
};