const puppeteer = require('puppeteer');
require('dotenv').config();

(async () => {
    const browser = await puppeteer.launch({
        executablePath: "./chrome-win/chrome.exe",
        headless: false,
    });
    const page = await browser.newPage();
    await doLogin(page);
    //await do2FA(page);
})();

async function doLogin(page) {
    await page.goto("https://howdy.tamu.edu", {waitUntil: 'load'});
    await page.click('#loginbtn');
    await page.waitForTimeout(2000);
    await page.type('#username', process.env.user);
    await page.type('#password', process.env.password);
    await page.click('#fm1 > button');
}

async function do2FA(page) {
    await page.click('#auth_methods > fieldset > div.row-label.push-label > button', {waitUntil: 'load'});
}