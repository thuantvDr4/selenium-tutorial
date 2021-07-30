const { Builder, By, Key, until } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();


//open website
async function openWebsite() {
    try {
        await driver.get('http://selenium.com');
        await driver.get('http://google.com')
    } catch (err) {
        console.log(err)
    }
}
//run
openWebsite();