const express = require ('express')
const app = express();
const path = require('path')
const mysql =require('mysql2')
const PORT = 3000
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const db = require('./config/db.config')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build/")));

app.use(require('./routes/routes'))



app.listen(PORT, ()=>console.log(`listening on port ${PORT}`))