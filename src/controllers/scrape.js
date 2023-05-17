const puppeteer = require('puppeteer');
async function searchThreads(url){
    //  const browserFetcher = puppeteer.createBrowserFetcher();
    //   let revisionInfo = await browserFetcher.download('1095492');
    const browser =await puppeteer.launch({headless:true });
    const page = await browser.newPage();
    await page.goto(url);
    console.log('Just visited URL');
    const elements = await page.$$eval('a.SQnoC3ObvgnGjWt90zD9Z._2INHSNB8V5eaWp4P0rY_mE',(arr)=>{ 
        let links = [];
        arr.forEach((element)=>{
            links.push({'link':element.getAttribute('href'),'title':element.querySelector('h3._eYtD2XCVieq6emjKBH3m').innerText});
        })
        return links;
    } );
    await page.close();
    await browser.close();
    console.log(elements,'these are the elements');
    return elements;
}


module.exports=async(req,res)=>{
    try{
        let threads = await searchThreads(req.body.url);
        res.status(200).send(threads);
    }catch(e){
        console.log(e,'error');
    }
}

