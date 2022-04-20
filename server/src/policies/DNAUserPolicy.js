module.exports = {
    checkDNA(req,res,next){
        // DNA validation with regex -> dna = req.body.DNAUser
        // if(invalid){
        //     res.send({
        //         error:'DNA not valid'
        //     })
        // }else{
        //     next()
        // }
        
        next()
    }
}