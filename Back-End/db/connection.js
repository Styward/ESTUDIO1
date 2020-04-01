//Declaración de la constante sequalize y asignación de libreria

const Sequelize = require('sequelize');

//configuración de parametros de conexión
const sequelize = new Sequelize('persona', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql', 
});

module.exports = {

    conectar: async app => {

        sequelize.authenticate()
        .then(() => {
            console.log('Conexion a da exitosa')
        })
        .catch(err => {
            console.log('Error al conectar db')
        })


     app.listen(9000, () => {
        console.log("--Arranca servidor de Node.js correctamente--");
     });
    },

    conexión: sequelize
};