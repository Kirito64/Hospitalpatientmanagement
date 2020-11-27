const router = require('express').Router();
const db = require('../config/db')
router.post('/createentry', async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact, 
    };
    console.log(req.body)
    const newEntry = await db.Entry.create(data);
    res.send(newEntry);
})


router.get('/getentries', async (req, res)=>{
   try
   {
    const entries = await db.Entry.findAll({
        include:[{
            model: db.Visit,
            include: [
                {
                  model: db.Prescription,
                }
            ],
      }]
   })
    res.send(entries)
   }
   catch(err)
   {
       throw err;
   }    
})

module.exports = router;