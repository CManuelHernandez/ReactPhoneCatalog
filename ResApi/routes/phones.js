"use strict";

var express = require("express");
var router = express.Router();

const Phone = require("../models/phone");

/* GET /phones */
// List of Phones
router.get("/", async function (req, res, next) {
  // async para asyncawait
  try {
    const resultado = await Phone.find();
    res.json(resultado);
  } catch (error) {
    next(error);
  }
});

// GET /phones:id
// Get phone
router.get("/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;

    const phone = await Phone.findOne({ _id: _id });

    if (!phone) {
      return res.status(404).json({ error: "not found " });
    }
    res.json({ result: phone });
  } catch (error) {
    next(error);
  }
});

// POST /phones (body)
// Create a phone
router.post("/", async (req, res, next) => {
  try {
    const adData = req.body;

    const phone = new Phone(adData);

    const createdPhone = await phone.save();

    res.status(201).json({ result: createdPhone });
  } catch (error) {
    next(error);
  }
});

// PUT /phones:id (body)
// Update a phone
router.put("/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const phoneData = req.body;

    const updatedPhone = await Phone.findOneAndUpdate({ _id: _id }, phoneData, {
      new: true,
      useFindAndModify: false,
    });
    // usamos { nwe: true } para que nos devuelva el anuncio actualizado

    if (!updatedPhone) {
      res.status(404).json({ error: "not found" });
      return;
    }

    res.json({ result: updatedPhone });
  } catch (error) {
    next(error);
  }
});

// DELETE /phones:id
// Borrar a phone
router.delete("/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;

    await Phone.deleteOne({ _id: _id });

    res.json();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
