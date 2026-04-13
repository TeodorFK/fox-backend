const { Schema, model } = require('mongoose');

const foxSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    default: 0,
  },
});

const Fox = model('Foxes', foxSchema);

module.exports = Fox;
