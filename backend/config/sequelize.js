const sequelize = require('sequelize');

const Sequelize = new sequelize( 
    'HospitalManagement', 
    'main', 
    'JATINasdf1234', { 
        dialect: 'mysql',          
        host: 'localhost'
    } 
); 

module.exports = Sequelize