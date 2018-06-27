var express = require('express');
var http = require('http');

var app = express();

app.use('/', express.static('public'));






app.listen(process.env.PORT || 3000, () =>  {
	console.log("Server is running on port 3000!");
});
