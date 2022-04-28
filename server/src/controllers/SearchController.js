const {HistoryTest} = require('../models')

module.exports = {
    async getHistoryTests(req,res){
        const where={}
        if(req.query.date){
            where.TestDate=req.query.date
        }
        if(req.query.diseaseName){
            where.DiseaseName=req.query.diseaseName
        }
        const testsData = await HistoryTest.findAll({
            where:where
        })
        res.send(testsData)
        // try {
        //     let testsData = null 
        //     const search = req.query.search
        //     if(search) {
        //         testsData = await HistoryTest.findAll ({
        //             where: {
        //                 $or: [
        //                     'date', 'diseaseName'
        //                 ].map(key => ({
        //                     [key]: {
        //                         $like: `%${search}%`
        //                     }
        //                 }))
        //             }
        //         })
        //     } else {
        //         testsData = await HistoryTest.findAll()
        //     }
        //     res.send(testsData)

        // } catch(err) {

        // }
    }
}