const router = require('express').Router();
const db = require('../config/db');



router.post('/createPrescription',async (req, res)=>{
    const data ={
        visitId: req.body.visitId,
        medicine: req.body.medicine,
        dosage : req.body.dosage
    }
    const newPrep = db.Prescription.create(data)
    res.send(newPrep)
})



router.get('/getPrescriptionById/:id', async (req, res)=>{
    const searchId = req.params.id;
    console.log(searchId)
    const pres = await db.Prescription.findAll({where :{visitId: searchId}})
    res.send(pres)
})



module.exports = router;