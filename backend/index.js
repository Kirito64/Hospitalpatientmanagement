const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport')
const passportconfig = require('./config/passport')
const Session = require('express-session')

// rest api routes 
const entryrest = require('./routes/entryrest');
const visitsrest = require('./routes/visitsrest');
const sequelize = require('./config/sequelize');
const prescrest = require('./routes/prescrest');
const auth = require('./routes/authroute')


//basic server config
sequelize.sync()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(Session({
    secret: "adsfas"
}))
app.use(passport.initialize())
app.use(passport.session())


// rest api endpoints
app.use('/api', entryrest)
app.use('/api', visitsrest)
app.use('/api', prescrest)
app.use('/auth', auth)



app.listen(4000);