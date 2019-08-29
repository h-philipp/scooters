var express = require("express");
var hbs = require('express-handlebars');
let bodyparser = require('body-parser'); 
let path = require('path');

//base url:
let baseUrl = "/api";

//init
let app = express(); 
let layouts = path.join(__dirname + '/views/layouts/');
app.engine('hbs', hbs({extname: "hbs", defaultLayout: "layout", layoutsDir: layouts}));
let viewsdir = path.join(__dirname + '/views');
let views = express.static(viewsdir);
app.set(views);
app.set("view engine", "hbs");

app.use(bodyparser.json({limit: '30mb', extended: true}))
app.use(bodyparser.urlencoded({limit: '30mb', extended: true}))
app.use(express.static(__dirname + '/public'));

/// ROUTES ///
var scooterRouter = require('./routes/scooter'); //Import routes for "scooter" area

app.use('/', scooterRouter);  // Add scooter router to middleware chain.
//listen on port 8081
let server = app.listen("8081", function() {
    let host = server.address().address;
    let port = server.address().port;
    
    console.log('scooter app listening on http://%s:%s', host, port);
});