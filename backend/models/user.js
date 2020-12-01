const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = sequelize.define('user', {
    id :{
        type:Sequelize.INTEGER, 
		autoIncrement: true, 
		allowNull: false, 
		primaryKey: true,
    },
    username:{type:Sequelize.STRING, allowNull:false},
    password:{type:Sequelize.STRING, allowNull:false},
})

User.prototype.encryptPassword = (password) => {
    bcrypt.hash(password, saltRounds, (err, hash) =>{
        this.password = hash
    });
}

User.prototype.comparePassword = (password) => {
    return bcrypt.compareSync(password, this.getDataValue('password'))
}
module.exports = User
