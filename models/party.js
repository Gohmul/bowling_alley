const { Schema } = require("mongoose");

const PartySchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    cname: { type: String, required: true },
    package: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = PartySchema;
