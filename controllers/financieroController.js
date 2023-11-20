const db = require('../db')
const controller = {}


controller.getAprobados = (res,req) =>{
    const query = 'select * from facturar'
    const results = db.query(query)
    res.render('financiero', {aprobados:results})
}

module.exports = controller