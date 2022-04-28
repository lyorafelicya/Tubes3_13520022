const {HistoryTest} = require('../models')
const {sequelize} = require('../models')

module.exports = {
    async getHistoryTests(req,res){
        const where={}
        if(req.body.date){
            where.TestDate=sequelize.where(sequelize.fn('date', sequelize.col('TestDate')), '=', req.body.date)
        }
        if(req.body.diseaseName){
            where.DiseaseName=req.body.diseaseName
        }
        const testsData = await HistoryTest.findAll({
            where:where
        })
        res.send(testsData)
    }
}