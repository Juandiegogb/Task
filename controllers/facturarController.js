const controller = {};
const db = require("../db")

controller.facturar = (req, res) => {
  const query = "SELECT * FROM facturar";
  db.query(query, (err, resultados) => {
    if (err) {
      console.error("Error al ejecutar la consulta:", err.message);
      res.status(500).send("Error interno del servidor");
    } else {
      // Pasar los resultados a la vista
      res.render("financiero/facturar", { datos: resultados });
    }
  });
};



module.exports = controller