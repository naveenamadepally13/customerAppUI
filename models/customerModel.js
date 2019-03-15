var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
  custID: String,
  firstName: String,
  lastName: String,
  emailAddress: String,
  address: String,
  phoneNo: String,
  date: {type: Date, default: Date.now},
});

const customer = mongoose.model('customers',customerSchema);
module.exports = customer;
