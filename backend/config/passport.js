const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const User = require('../config/db').User;
const bcrypt = require('bcrypt');
const saltRounds = 10;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findOne({id: id})
    delete(user.dataValues.password)
    done(null, user)
});


passport.use(new LocalStrategy(async (username, password,done)=>{
    const user = await User.findOne({username: username})
    if(!user){
        return done(null, false, {message: "User not found"})
    }
    if(bcrypt.compareSync(password, user.password)){
        return done(null, user)
    }
    else{
        return done(null, false, {message:"Incorrect password"})
    }
}))