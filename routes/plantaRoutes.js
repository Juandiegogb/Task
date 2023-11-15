const express = require("express");
const router = express.Router();
const plantaController = require("../controllers/plantaController");

router.get("/aprobados", plantaController.aprobados);
router.get("/pendientes", plantaController.diagPendientes);
router.post("/pendientes", plantaController.leer)

module.exports = router;
