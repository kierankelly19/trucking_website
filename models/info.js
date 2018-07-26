var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var infoModel = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  comment: {
    type: String
  }
});

// var Info = mongoose.model('information', infoModel);
// Info.create({
//   name: "Kevin",
//   email: "kdmcnamara@wisc.edu",
//   age: 18,
//   comment: "asd"
// }).then(function(err, info) {
//   console.log(err, info);
// });
module.exports = mongoose.model('info', infoModel);
