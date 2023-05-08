const express = require('express');
const app = express();
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