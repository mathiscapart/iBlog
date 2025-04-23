const { Sequelize } = require('sequelize');
const {relationModels} = require("./relationModel");
require('dotenv').config();


const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
});

(async () => {
    await relationModels(sequelize)
})();


module.exports = sequelize;