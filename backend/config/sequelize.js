const sequelize = require('sequelize');
const db = require('./keys').db;
const Sequelize = new sequelize( 
    db.dbname, 
    db.user, 
    db.password, { 
        dialect: db.dialect,          
        host: db.hostname
    } 
);

module.exports = Sequelize