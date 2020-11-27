const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Visit = sequelize.define('visit', {
    id:{
        type:Sequelize.INTEGER, 
		autoIncrement:true, 
		allowNull:false, 
		primaryKey:true
    },
    entryId: {type:Sequelize.INTEGER, allowNull:false},
    remarks: {type: Sequelize.STRING, allowNull:false},
}) 

module.exports = Visit