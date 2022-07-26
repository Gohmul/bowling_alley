const { Schema } = require("mongoose");

const ShopSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    bname: { type: String, required: true },
    bcompany: { type: String, required: true },
    weight: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = ShopSchema;
