const mongoose = require('mongoose');

const FanSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
   sign: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: false
  },
  favoritePizza: {
    type: String,
    required: true
  }



});

module.exports = Fan = mongoose.model('fan', FanSchema);
