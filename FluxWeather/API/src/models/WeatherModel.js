var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AutoIncrement = require('mongoose-sequence')(mongoose);

const weatherSchema = new Schema({
    seq: Number,
    city: String,
    date: String,
    description: String
  });
  
  weatherSchema.plugin(AutoIncrement, {id:'order_seq', inc_field: 'seq'});
  var Weather = mongoose.model('Weather', weatherSchema);
  module.exports = Weather;