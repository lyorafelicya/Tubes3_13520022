const addDisease = require('./controllers/AddDisease')

module.exports = (app) => {
    // dummy
    app.get('/status',(req,res) => {
        res.send({
            message:'hello world'
        })
    })

    // check dna for a disease
    app.post('/',(req,res) => {

    })

    // add diseases data dna
    app.post('/addDisease',addDisease.addData)

}
