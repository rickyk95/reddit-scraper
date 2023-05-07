const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const router = require('./routes/routes');
app.engine('handlebars',exphbs.engine({}));
app.set('view engine','handlebars');
app.set('views','./views');
app.use(router);
app.listen(3000,()=>{
        console.log(`Listening on port ${3000}`);
});