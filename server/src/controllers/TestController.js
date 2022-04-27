const {HistoryTest} = require('../models')
const {DNADisease} = require('../models')
const {sequelize} = require('../models')
const StringAlgo = require('./StringAlgorithm')

module.exports = {
    async testDisease(req,res){
        try{
            console.log("mulai test")
            const dnaDisease = await DNADisease.findOne({
                where:{
                    DiseaseName : req.body.DiseaseName // ini nama req dari formnya
                }
            })
            const sequenceDNA = dnaDisease.DNASequence
            
            // call string algo
            const percentage = StringAlgo.KMP(req.body.DNAUser,sequenceDNA)
    
            // get current date
            const currentDate = new Date()
            const dateString = currentDate.getFullYear()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getDate()
            
            const testData = await HistoryTest.create({
                Username: req.body.Username,
                DiseaseName : req.body.DiseaseName,
                DNASequence: req.body.DNAUser,
                TestDate : dateString,
                percentage : percentage,
                Status : percentage>0.8
            })
    
            // send test result data
            res.send({
                username: req.body.Username,
                diseaseName : req.body.DiseaseName,
                date : dateString,
                percentage: percentage,
                statusTest: percentage>0.8
            })
        }catch(err){
            res.send({
                error:'Disease not found'
            })
        }
    },

}