const express = require("express");
const router = express.Router();
const facturarController = require("../controllers/facturarController");

router.get("/facturar", facturarController.facturar);

module.exports = router;
