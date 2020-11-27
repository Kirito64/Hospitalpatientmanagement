const router = require('express').Router();
const { model } = require('mongoose');
const db = require('../config/db')


router.post('/createvisit', async (req, res) => {
    const data = {
        entryId: req.body.entryId,
        remarks: req.body.remarks, 
    };
    const newVisit = await db.Visit.create(data);
    res.send(newVisit);
})


router.get('/getvisits/:id', async (req, res) =>{
    const allVisits = await db.Visit.findAll({where:{entryId : req.params.id},
        include:[{
            model: db.Prescription,
        }]
    });
    res.send(allVisits)
})



module.exports = router;