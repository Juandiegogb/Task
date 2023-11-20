const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const homeController = require("../controllers/homeController");
const cookieParser = require("cookie-parser")
const toolsController = require("../controllers/tools")
const financieroController = require("../controllers/financieroController")

router.use(cookieParser())
router.get("/", loginController.login);
router.post("/", loginController.validate);
router.get("/home",homeController.home)
router.get("/logout",homeController.logout)
router.get('/data', toolsController.getMatriz)
router.get('/tareas',toolsController.getTareas)
router.get('/tareas',toolsController.getTareas)
router.get('/financiero/aprobados',financieroController.getAprobados)
module.exports = router;



