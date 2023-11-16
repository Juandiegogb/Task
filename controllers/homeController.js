const controller = {};
const jwt = require("jsonwebtoken");

controller.home = async function (req, res) {
  try {
    if (req.cookies.jwt) {
      const token = req.cookies.jwt
      const data = jwt.verify(token,process.env.JWT_SECRETO)
      res.render("tools/home",{data:data})
    }else{
      res.redirect("/")
    }
  } catch (error) {}
};

module.exports = controller;
