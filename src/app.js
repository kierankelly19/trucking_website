var express = require('express');
var parser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var path = require('path');
var app = express();


var db = mongoose.connect('mongodb://localhost/27017');
var Info = require('../models/info');
var infoRouter = express.Router();


app.get('/form', function(req, res) {
	res.sendFile(path.resolve('public/form.html'));
});

app.use('/', express.static('public'));
app.use('/api', infoRouter);
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));


  app.get('/api/info', function(req, res) {
    Info.find(function(err, infos) {
      if(err) {
        console.log(err);
      } else {
				res.json(infos);
      }
    });
  })
  app.post('/api/info', function(req, res) {
		Info.create({
			name: req.body.name,
			email: req.body.email,
			age: req.body.age,
			comment: req.body.comment
	}, function(err, info) {
		if(err) {
			return res.status(500).json({err: err.message});
		}
			res.json({'email': info, message: 'Email Created!'});
	});
	});

app.listen(process.env.PORT || 3000, () =>  {
	console.log("Server is running on port 3000!");
});
