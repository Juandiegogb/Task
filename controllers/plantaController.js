const controller = {};
const db = require("../db")

controller.aprobados = (req, res) => {
  const query = "SELECT * FROM reppendientes";
  db.query(query, (err, resultados) => {
    if (err) {
      console.error("Error al ejecutar la consulta:", err.message);
      res.status(500).send("Error interno del servidor");
    } else {
      // Pasar los resultados a la vista
      res.render("planta/aprobados", { datos: resultados });
    }
  });
};

controller.diagPendientes = (req, res) => {
  const query = "SELECT * FROM diagpendientes";
  db.query(query, (err, resultados) => {
    if (err) {
      console.error("Error al ejecutar la consulta:", err.message);
      res.status(500).send("Error interno del servidor");
    } else {
      // Pasar los resultados a la vista
      res.render("planta/diagPendientes", { datos: resultados });
    }
  });
};

controller.leer = (req,res) => {
  console.log(req.body)
  res.send(req.body)
}









module.exports = controller