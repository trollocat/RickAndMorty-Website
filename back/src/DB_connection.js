require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const characterModel = require('./models/Character');
const favoriteModel = require('./models/Favorite');

/*
EJERCICIO 01
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.

URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
*/
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);

/*
EJERCICIO 03
Debajo de este comentario puedes ejecutar la función de los modelos.
*/
characterModel(sequelize);
favoriteModel(sequelize);

module.exports = {
   ...sequelize.models,
   sequelize,
};
