const express = require("express");
const router = express.Router();
const informesController = require("../controllers/informesController");

router.get("/informes", informesController.informes);

module.exports = router;
