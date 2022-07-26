const db = require("../db");
const { Shop } = require("../models");

db.on("error", console.error.bind(console, "MongoDB Connection Error:"));

const main = async () => {
  const shops = [
    {
      name: "Ryan",
      email: "ryxnsaucier@gmail.com",
      bname: "Black Widow",
      bcompany: "Hammer",
      weight: "16",
    },
    {
      name: "Will",
      email: "willisabum@gmail.com",
      bname: "Hot Sauce",
      bcompany: "Hammer",
      weight: "16",
    },
    {
      name: "Dave",
      email: "daveisabum@gmail.com",
      bname: "Hot Sauce",
      bcompany: "Hammer",
      weight: "16",
    },
  ];
  await Shop.insertMany(shops);
  console.log("Created Ball order info!");
};
const run = async () => {
  await main();
  db.close();
};

run();
