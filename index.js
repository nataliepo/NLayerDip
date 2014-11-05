var express = require('express');
var http = require('http');

var app = express();
var expressHandlebars = require('express-handlebars');

/*
app.configure(function() {
    app.use('/static')
})
*/

app.engine('hbs', expressHandlebars({extname: 'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');

app.use("/static", express.static(__dirname + '/static'));

app.get('/', function(req, res) {
    res.render('index', {"title": "N Layer Dip"});
});



app.listen(9000, function() {
    console.log("listening on port 9000...");
});



