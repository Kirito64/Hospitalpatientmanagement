const bcrypt = require('bcrypt');
const passport = require('passport');
const router = require('express').Router();
const User = require('../config/db').User;


router.post('/register', async (req, res) =>{

    const ep = await bcrypt.hash(req.body.password, 10)
    const data = {
        username: req.body.username,
        password: ep,
    }
    const newUser = await User.create(data)
    res.send(newUser)
})

router.post('/login', passport.authenticate('local', {
    successRedirect:'/auth/',
    failureRedirect: '/auth/',
}))

router.get('/logout', (req, res) =>{
    req.logout()
    req.session.destroy()
    res.redirect('/auth')
})

router.get('/', (req, res)=>{
    console.log(req.user)
    if(req.user)
        res.send(req.user)
    else
        res.send("Not logged in ")
})

module.exports  = router