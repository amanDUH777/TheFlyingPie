const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipCode: {
    type: Number,
    required: true
  },
  cardNumber: {
    type: Number,
    required: true
  },
  expMonth: {
    type: String,
    required: true
  },
  expYear: {
    type: Number,
    required: true
  },
  cvv: {
    type: Number,
    required: true
  },


});

module.exports = Customer = mongoose.model('customer', CustomerSchema);
