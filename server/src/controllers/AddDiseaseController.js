const {DNADisease} = require('../models')

module.exports = {
    async addData(req,res){
        try{
            const newDisease = await DNADisease.create({DiseaseName : req.body.DiseaseName, DNASequence : req.body.DNADisease})
            res.send({
                addData : newDisease.toJSON()
            })
        }catch(err){
            res.send({
                error : "Disease already exists"
            })
        }
    }
}