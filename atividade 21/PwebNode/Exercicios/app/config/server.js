let express = require('express');
//let texto = require("./modulo1");

let consign = require('consign');

let app = express();
app.set('view engine', 'ejs');

app.set('views','app/views');
consign({cwd:'app'})
    .include('routes')
    .then('config/dbConnection.js')
    .into(app);
    
module.exports = app;


