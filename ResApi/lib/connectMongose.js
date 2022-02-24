"use strict";

const mongoose = require("mongoose");

mongoose.connection.on("error", (err) => {
  console.log("Error de conexión", err);
  process.exit(1);
});

mongoose.connection.once("open", () => {
  console.log("*******************************");
  console.log("Conected to MongoDB in", mongoose.connection.name);
  console.log("*******************************");
});

mongoose.connect("mongodb://localhost/phones", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
