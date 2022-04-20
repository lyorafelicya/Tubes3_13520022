const {DNADisease} = require('../models')

module.exports = {
    async addData(req,res){
        try{
            const newDisease = await DNADisease.create(req.body)
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