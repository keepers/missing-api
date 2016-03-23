'use strict';

var GeoSchema = require('./geo-schema');

module.exports = {

  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },

  age: {
    type: Number,
    required: true,
    min: 0,
    max: 130
  },

  gender: {
    type: String,
    enum: 'M F'.split(' '),
    required: true
  },

  geo: GeoSchema,

};
