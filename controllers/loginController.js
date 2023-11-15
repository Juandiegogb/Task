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
  const query = `SELECT password,rol,user,name FROM users WHERE user = "${user}"`;

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
    const rol = results[0].rol;
    const name = results[0].name;
    const user = results[0].user;
    const isValid = await bcrypt.compare(password, hashed);
    if (isValid) {
      
    } else {
      res.send("que es eso");
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = controller;
