const controller = {};
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

controller.login = (req, res) => {
  res.render("login");
};

controller.validate = async function (req, res) {
  const user = req.body.user;
  const password = req.body.password;
  const query = `SELECT id,password,rol,user,name FROM users WHERE user = "${user}"`;

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

    if (results.length === 0) {
      res.redirect("/");
    } else {
      const hashed = results[0].password;
      const rol = results[0].rol;
      const name = results[0].name;
      const user = results[0].user;
      const id = results[0].id;
      const isValid = await bcrypt.compare(password, hashed);
      if (isValid) {
        const token = jwt.sign(
          {
            name: name,
            rol: rol,
            user: user,
            id:id
          },
          process.env.JWT_SECRETO,
          {
            expiresIn: process.env.JWT_TIEMPO_EXPIRA,
          }
        );
        const cookiesOptions = {
          expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 1000),
          httpOnly: true,
        };
        res.cookie("jwt", token, cookiesOptions);
        res.redirect("/home");
      } else {
        res.redirect("/");
      }
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = controller;
