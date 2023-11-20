const controller = {};
const jwt = require("jsonwebtoken");
const db = require("../db");
const { resolveColor } = require("discord.js");

controller.home = async function (req, res) {
  try {
    if (req.cookies.jwt) {
      const token = req.cookies.jwt;
      const data = jwt.verify(token, process.env.JWT_SECRETO);
      const tareas = await new Promise((resolve, reject) => {
        const query = `SELECT * FROM tareas where empleado = ${data.id}`;
        db.query(query, (err, results) => {
          if (err) {
            console.error(err);
          } else {
            resolve(results);
          }
        });
      });
      res.render(`${data.rol}`, { data: data, tareas: tareas });
    }
  } catch (error) {}
};

controller.logout = (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/");
};
module.exports = controller;

controller.logout = (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/");
};
module.exports = controller;
