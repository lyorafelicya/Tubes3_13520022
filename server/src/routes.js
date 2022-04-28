const AddDiseaseController = require('./controllers/AddDiseaseController')
const testController = require('./controllers/TestController')
const searchController = require('./controllers/SearchController')
const searchPolicy = require('./policies/SearchQueryPolicy')
const dnaUserPolicy = require('./policies/DNAUserPolicy')
const dnaDiseasePolicy = require('./policies/DNADiseasePolicy')

module.exports = (app) => {
    // add diseases data dna
    app.post('/addDisease',dnaDiseasePolicy.checkDNA,AddDiseaseController.addData)

    // testing dna for a certain disease
    app.post('/',dnaUserPolicy.checkDNA,testController.testDisease)

    // searc test history
    app.get('/search',searchPolicy.checkQuery,searchController.getHistoryTests)


}
