const Sequelize = require('sequelize')
const env = require('./env')

const connection = new Sequelize (env.database, env.username, env.password,{
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
})

connection.sync()
.then(()=> console.log('database has been synced'))
.catch((err)=>console.log('Error connecting to database'))

const db ={}
db.Sequelize = Sequelize
db.connection = connection

db.user = require('../models/user.model')(connection, Sequelize)
db.event = require('../models/event.model')(connection, Sequelize)
module.exports = db;