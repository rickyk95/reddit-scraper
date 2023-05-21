const puppeteer = require('puppeteer');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

async function searchThreads(url){
     const browserFetcher = puppeteer.createBrowserFetcher();
      let revisionInfo = await browserFetcher.download('1095492');
    // const browser =await puppeteer.launch({});

    const browser =await puppeteer.launch({
        executablePath: revisionInfo.executablePath,
        ignoreDefaultArgs: ['--disable-extensions'],
        headless: true,
        args: ['--no-sandbox', "--disabled-setupid-sandbox"]
      });

    const page = await browser.newPage();
    await page.goto(url);
    console.log('Just visited URL');
    let elements = await page.$$eval('a.SQnoC3ObvgnGjWt90zD9Z._2INHSNB8V5eaWp4P0rY_mE',(arr)=>{ 
        let links = [];
        arr.forEach((element)=>{
            let title = element.querySelector('h3._eYtD2XCVieq6emjKBH3m').innerText;
            links.push({'link':element.getAttribute('href'),title});
        
        })
        return links;
    } );
    elements = elements.map((element)=>{
            element['score']=sentiment.analyze(element['title'])['score'];
            return element;
    })
    console.log(elements);
    await page.close();
    await browser.close();
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

