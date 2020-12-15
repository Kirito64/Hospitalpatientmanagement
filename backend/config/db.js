const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


//models
db.Entry = require('../models/entry');
db.Prescription = require('../models/prescriptions');
db.Visit = require('../models/visit'); 
db.User = require('../models/user')


//Relations 
db.User.hasMany(db.Entry);
db.Entry.belongsTo(db.User)
db.Entry.hasMany(db.Visit);
db.Visit.hasMany(db.Prescription);
db.Prescription.belongsTo(db.Visit);
db.Visit.belongsTo(db.Entry)



module.exports = db