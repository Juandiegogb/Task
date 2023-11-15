const controller = {};
const db = require("../db");
const bcrypt = require("bcrypt");
const util = require("util");

controller.login = (req, res) => {
  res.render("tools/login");
};

controller.validate = async function (req, res) {
  const user = req.body.user;
  const password = req.body.password;
  const query = `SELECT password FROM users WHERE user = "${user}"`;

  try {
    const results = await new Promise((resolve, reject) => {
      db.query(query, (err, results) => {
        if (err) {
          console.err(err);
        } else {
          resolve(results);
        }
      });
    });
    const hashed = results[0].password;
    const isValid = await bcrypt.compare(password, hashed);
    if (isValid) {
      res.send("La contrasena si es");
    } else {
      res.send("que es eso");
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = controller;
