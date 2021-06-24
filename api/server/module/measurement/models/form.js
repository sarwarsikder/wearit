const _ = require("lodash");
const Schema = require("mongoose").Schema;

const schema = new Schema(
  {
    formId: {
      type: Schema.Types.ObjectId,
      index: true,
    },
    label: {
      type: String,
    },
    fields: [
      {
        label: String,
        type: Schema.Types.Mixed,
        unit: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = schema;
