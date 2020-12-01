const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize') ;


 
const Entry = sequelize.define('entry', {
	id:{ 
		type:Sequelize.INTEGER, 
		autoIncrement:true, 
		allowNull:false, 
		primaryKey:true
	},
	userId:{type: Sequelize.INTEGER, allowNull:false},
	name: { type: Sequelize.STRING, allowNull:false }, 
	email: { type: Sequelize.STRING}, 
    contact: {type: Sequelize.STRING, allowNULL:false},
	createdAt: {type:Sequelize.DATE, defaultValue:  Sequelize.NOW},
	updatedAt: {type:Sequelize.DATE, defaultValue: Sequelize.NOW}
})

module.exports = Entry
