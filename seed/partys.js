const db = require("../db");
const { Party } = require("../models");

db.on("error", console.error.bind(console, "MongoDB Connection Error:"));

const main = async () => {
  const partys = [
    {
      name: "Ryan",
      email: "ryxnsaucier@gmail.com",
      cname: "Will",
      package: "1",
      date: "4/1/2022",
      time: "4pm",
    },
    {
      name: "Dave",
      email: "daveisabum@gmail.com",
      cname: "Tommy",
      package: "2",
      date: "4/2/2022",
      time: "6pm",
    },
  ];
  await Party.insertMany(partys);
  console.log("Created some parties");
};
const run = async () => {
  await main();
  db.close();
};

run();
