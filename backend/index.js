const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const entryrest = require('./routes/entryrest');
const visitsrest = require('./routes/visitsrest');
const sequelize = require('./config/sequelize');
const prescrest = require('./routes/prescrest')

sequelize.sync()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use('/api', entryrest)
app.use('/api', visitsrest)
app.use('/api', prescrest)


app.post('/login', (req, res) => {
    console.log(req.body)
    res.status(200).send("successfull login")
})
app.listen(4000);