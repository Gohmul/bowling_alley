const { model } = require("mongoose");
const PartySchema = require("./party");
const ShopSchema = require("./shop");

const Party = model("Party", PartySchema);
const Shop = model("Shop", ShopSchema);

module.exports = {
  Party,
  Shop,
};
