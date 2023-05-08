const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const router = express.Router();
const index = require('../controllers/index');
const results = require('../controllers/results');
const scrape = require('../controllers/scrape');
router.use(express.urlencoded({extended:true}));
router.use(express.static('src/public'));
router.use(bodyParser.json());
router.get('/',index);
router.get('/results',results);
router.post('/scrape',scrape);
module.exports=router;


