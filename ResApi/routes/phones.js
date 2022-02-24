"use strict";

var express = require("express");
var router = express.Router();

router.use(function (req, res, next) {
  console.log("middleware router phones");
  if (condicion) {
    res.send("respuesta");
    return;
  }
  next();
});

router.get("/", function (req, res, next) {
  res.send("respuesta to phones");
});

// test
router.get("/:id", function (req, res, next) {
  console.log(req.params);
  res.send("received parameter " + req.params.id);
});

// test
router.post("/", function (req, res, next) {
  console.log("req.body", req.body);
  res.json({ recibido: req.body.num });
});

module.exports = router;
