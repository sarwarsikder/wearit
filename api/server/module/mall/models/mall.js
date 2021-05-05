const Schema = require('mongoose').Schema;

const schema = new Schema({
  title: {
    type: String
  },
  mediaId: {
    type: Schema.Types.ObjectId,
    ref: 'Media'
  },
  description: {
    type: String
  },
  address: {
    type: String
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  },
  toJSON: {
    virtuals: true
  }
});

schema.virtual('media', {
  ref: 'Media',
  localField: 'mediaId',
  foreignField: '_id',
  justOne: true
});

module.exports = schema;
