const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'hyt'
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
    } else {
        console.log('Conexión a la base de datos establecida');
    }
});

// Exportar el objeto de conexión para que pueda ser utilizado en otros archivos
module.exports = connection;
