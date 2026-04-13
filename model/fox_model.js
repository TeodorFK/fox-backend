const { Schema, model } = require('mongoose');
const { type } = require('node:os');

const foxSchema = new Schema({
  foxImage: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
});

const Fox = model('Foxes', foxSchema);

module.exports = Fox;
