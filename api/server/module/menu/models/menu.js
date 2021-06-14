const Schema = require('mongoose').Schema;

const schema = new Schema({
  name: {
    type: String
  },
  shortName: {
    type: String
  },
  url: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
}, {
  minimize: false,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

module.exports = schema;
