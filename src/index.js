const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const exphbs = require('express-handlebars');
const router = require('./routes/routes');
const port = process.env.PORT || 3000;
app.engine('handlebars',exphbs.engine({}));
app.set('view engine','handlebars');
app.set('views','src/views');
app.use(router);
app.listen(port,()=>{
        console.log(`Listening on port ${port}`);
});

// async function launchBrowser(){
//        let browser =  await puppeteer.launch({headless:false});
//        let page = await browser.newPage();
//        await page.goto('https://www.google.com');
//        await page.type('#APjFqb','Hondu Autos');
//        await page.keyboard.press('Enter');
//        await page.waitForNavigation();
//        await page.click('a[jsname=qOiK6e]');
// }

// launchBrowser();