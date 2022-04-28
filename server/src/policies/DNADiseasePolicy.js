module.exports = {
    checkDNA(req, res, next) {
        var regex = /[^ATCG]+/;
        console.log("test");
        console.log(req.body.DNADisease);
        if (regex.test(req.body.DNADisease)) {
            res.status(400).json({
                message: "Invalid DNA",
                seq:req.body.DNADisease
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