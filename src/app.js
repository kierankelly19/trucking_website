var express = require('express');
var parser = require('body-parser');
var http = require('http');

var app = express();

app.use('/', express.static('public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));


var server = http.createServer(app);

app.listen(process.env.PORT || 3000, () =>  {
	console.log("Server is running on port 3000!");
});
