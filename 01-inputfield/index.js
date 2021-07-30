const { Builder, By, Key, until } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();


//open website
async function simpleRegistration() {
    try {
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration');
        
        await driver.findElement(By.name('email')).sendKeys('thuancafe@gmail.com');
        await driver.findElement(By.id('password')).sendKeys('12341234');
        await driver.findElement(By.id('submit')).click();
    
    } catch (err) {
        console.log(err)
    }
}
//run
simpleRegistration();