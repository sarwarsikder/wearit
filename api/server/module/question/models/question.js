const Schema = require('mongoose').Schema;

const schema = new Schema({
  question: {
    type: String,
    required: false
  },
  answer: {
    type: String
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true
  },
  replayedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    index: true
  },
  visibility: {
    type: Boolean,
    default: false
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


schema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
  justOne: true
});

module.exports = schema;
