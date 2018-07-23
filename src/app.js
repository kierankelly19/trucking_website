var express = require('express');
var parser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');

var app = express();

var db = mongoose.connect('mongodb://localhost/infoAPI');
var Info = require('../models/info');
var infoRouter = express.Router();

app.use('/', express.static('public'));
app.use('/api', infoRouter);
app.use(parser.urlencoded({ extended: false }));

infoRouter.route('/info')
  .get(function(req, res) {
    Info.find(function(err, infos) {
      if(err) {
        console.log(err);
      } else {
        res.json(infos);
      }
    });
  })
  .post(function(req, res) {

	});

app.listen(process.env.PORT || 3000, () =>  {
	console.log("Server is running on port 3000!");
});
