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
  console.log(req.body);
  try {
    const shop = await new Shop(req.body);
    await shop.save();
    return res.status(200).json({ shop });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateShop = async (req, res) => {
  try {
    const { id } = req.params;
    await Shop.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({ shop });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateParty = async (req, res) => {
  try {
    const { id } = req.params;
    await Party.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({ party });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteShop = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Shop.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Shop Deleted");
    }
    throw new Error("Shop not found!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteParty = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Party.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Party Deleted");
    }
    throw new Error("Party not found!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getSelectedParty = async (req, res) => {
  try {
    const { id } = req.params;
    const party = await Party.find({ _id: id });
    return res.status(200).json({ party });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getSelectedShop = async (req, res) => {
  try {
    const { id } = req.params;
    const shop = await Shop.find({ _id: id });
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
  updateParty,
  updateShop,
  deleteParty,
  deleteShop,
  getSelectedParty,
  getSelectedShop,
};
