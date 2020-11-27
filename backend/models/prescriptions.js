const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Prescriptions = sequelize.define('prescription', {
    id :{
        type:Sequelize.INTEGER, 
		autoIncrement:true, 
		allowNull:false, 
		primaryKey:true
    },
    visitId:{type:Sequelize.INTEGER, allowNull:false},
    medicine:{type: Sequelize.STRING, allowNull: false},
    dosage: {
        type: Sequelize.ENUM,
        values:['1BD', '2BD', '1TD'],
        allowNull: false
    }
})

module.exports = Prescriptions
