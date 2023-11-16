const express = require("express");
const router = express.Router();
const plantaController = require("../controllers/plantaController");
const loginController = require("../controllers/loginController");
const informesController = require("../controllers/informesController");
const homeController = require("../controllers/homeController");
const facturarController = require("../controllers/facturarController");
const cookieParser = require("cookie-parser")

router.use(cookieParser())
router.get("/", loginController.login);
router.post("/", loginController.validate);
router.get("/home",homeController.home)

router.get("/facturar", facturarController.facturar);
router.get("/informes", informesController.informes);
router.get("/aprobados", plantaController.aprobados);
router.get("/pendientes", plantaController.diagPendientes);
router.post("/pendientes", plantaController.leer);

module.exports = router;
