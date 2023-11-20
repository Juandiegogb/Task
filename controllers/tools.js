const controller = {};
const conexion = require('../db')

controller.getMatriz = (req, res) => {
  conexion.query("SELECT * FROM facturar", (error, results) => {
    if (error) {
      console.error(error)
      throw error;
    } else {
      info = JSON.stringify(results);
      console.log(info)
      res.send(info);
    }
  });
};


controller.getTareas = (req, res) => {
    console.log('se ejecuto el get de tareas')
    const id = req.params.id
    console.log(id)
    res.send(id)
};



module.exports = controller;
