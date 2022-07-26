const { Party } = require("../models");
const { Shop } = require("../models");

const getAllPartys = async (req, res) => {
  try {
    const partys = await Party.find({});
    return res.status(200).json({ partys });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getAllShops = async (req, res) => {
  try {
    const shops = await Shop.find({});
    return res.status(200).json({ shops });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const postNewParty = async (req, res) => {
  try {
    const party = await new Party(req.body);
    await party.save();
    return res.status(200).json({ party });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const postNewShop = async (req, res) => {
  try {
    const shop = await new Shop(req.body);
    await shop.save();
    return res.status(200).json({ shop });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllPartys,
  getAllShops,
  postNewParty,
  postNewShop,
};
