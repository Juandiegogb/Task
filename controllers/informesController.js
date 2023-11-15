const controller = {};
const db = require("../db")

controller.informes = (req, res) => {
  const query = "SELECT * FROM informes";
  db.query(query, (err, resultados) => {
    if (err) {
      console.error("Error al ejecutar la consulta:", err.message);
      res.status(500).send("Error interno del servidor");
    } else {
      // Pasar los resultados a la vista
      res.render("ingenieria/informes", { datos: resultados });
    }
  });
};



module.exports = controller