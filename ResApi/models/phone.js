"use strict";

const mongoose = require("mongoose");

// schema definition
const phoneSchema = mongoose.Schema({
  name: { type: String, index: true, required: "Name is required " },
  manufacturer: {
    type: String,
    index: true,
    required: "Manufacturer is required ",
  },
  color: { type: String, index: true, required: "color is required " },
  price: { type: Number, index: true, required: "Price is required" },
  imageFileName: { type: String },
  screen: { type: Number, index: true, required: "Screen is required" },
  processor: { type: String, index: true, required: "Processor is required " },
  ram: { type: Number, index: true, required: "Ram is required" },
});

// create the model with the defined schema
const Phone = mongoose.model("Phone", phoneSchema);

// export the model (optional)
module.exports = Phone;
