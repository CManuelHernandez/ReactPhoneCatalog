"use strict";
const Phone = require("../models/phone");
const adData = require("../data/phones.json");
require("../lib/connectMongose");

async function resetData() {
  try {
    await Phone.remove({});
    const adArray = Phone.insertMany(adData["mobilePhones"]);

    await Promise.all([adArray])
      .then(() => {
        console.log("###############################");
        console.log("Data uploaded successfully");
        console.log("###############################");
        process.exit(0);
      })
      .catch((error) => {
        console.log("Error loading datas: ", error);
        process.exit(1);
      });
  } catch (error) {
    console.log("Error loading data: ", error);
    process.exit(1);
  }
}
resetData("Phone");
