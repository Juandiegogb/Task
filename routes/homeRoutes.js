const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController")

router.post("/", homeController.home);

module.exports = router;
