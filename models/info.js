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
  comment: {
    type: String
  }
});

module.exports = mongoose.model('Info', infoModel);
