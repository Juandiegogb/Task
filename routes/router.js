const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const homeController = require("../controllers/homeController");
const cookieParser = require("cookie-parser")
const conexion = require("../db")

router.use(cookieParser())
router.get("/", loginController.login);
router.post("/", loginController.validate);
router.get("/home",homeController.home)
router.get("/logout",homeController.logout)



module.exports = router;

router.get('/data', (req, res)=>{     
    conexion.query('SELECT * FROM matriz',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            data = JSON.stringify(results);
            res.send(info);          
        }   
    })
})


