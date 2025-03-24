import config from './wdio.shared.local.appium.conf';

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/**.spec.ts',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        'appium:deviceName': 'Pixel 3',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': '/Users/daothinh/Downloads/appium-webdriverio-main/app/Final_Exam_MacroDroid.apk',
        // @ts-ignore
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;
