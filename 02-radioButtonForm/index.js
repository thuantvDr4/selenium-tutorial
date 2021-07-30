const { Builder, By, Key, until } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();


async function radioButtonForm() {
    try {
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form');

        await driver.findElement(By.css('#title')).sendKeys('This is title test...');
        await driver.findElement(By.css('#description')).sendKeys('description for title test...');
        await driver.findElement(By.css('div:nth-child(3) > div > div:nth-child(1) > label > span.custom-control-description')).click();
        await driver.findElement(By.id('submit')).click();
    } catch (err) {
        console.log(err)
    }
}
//run
radioButtonForm();