module.exports = {
    checkDNA(req, res, next) {
        var regex = /[^ATCG]+/;
        if (regex.test(req.body.DNADisease)) {
            res.status(400).json({
                message: "Invalid DNA"
            });
        } else {
            next();
        }
    }
}

        // DNA validation with regex -> dna = req.body.DNASequence
        // if(invalid){
        //     res.send({
        //         error:'DNA not valid'
        //     })
        // }else{
        //     next()
        // }