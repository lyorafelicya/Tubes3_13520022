module.exports = {
    checkQuery(req, res, next) {
        // Regex Tanggal
        // Format: hari bisa 1 atau 2 digit
        //         bulan bisa 1 atau 2 digit atau dalam bentuk kata-kata
        //         tahun memiliki 4 digit
        //         urutan bisa D/M/Y atau Y/M/D
        //         separator bisa ' ' atau '-' atau '/'
        var regexDate = /(\d{1,2}[\/| |\-]\d{1,2}[\/| |\-](?:\d{2}){1,2})|(((?:\d{2}){1,2})[\/| |\-]\d{1,2}[\/| |\-]\d{1,2})|(\d{1,2}[\/| |\-]\b(?:[Jj]an(?:uar[yi])?|[Ff]eb(?:ruar[yi])?|[Mm]ar(?:(ch|et))?|[Aa]pr(?:il)?|[Mm](ay|ei)|[Jj]un[ei]?|[Jj]ul[yi]?|[Aa]ug(?:ust)?|[Aa]gu(?:stus)?|[Ss]ep(?:tember)?|[Oo][ck]t(?:ober)?|[Nn]ov(?:ember)?|[Dd]e[cs](?:ember)?)[\/| |\-](?:\d{2}){1,2})/g;
        
        // Regex Nama Penyakit
        // Format: semua kata/frasa/klausa yang tersusun atas huruf kapital maupun tidak
        var regexDisease = /([A-Za-z]+ ?)+/g;


        // var dates = req.query.diseaseName.match(regexDate);
        // var diseases = req.query.diseaseName.match(regexDisease);

        // console.log(dates);
        // console.log(diseases);

        if(!req.query.search){
            res.status(400).json({
                message: "Query is null"
            });
        }
        else if (regexDate.test(req.query.search) || regexDisease.test(req.body.search)) {
            // Hasil slicing dengan regex
            var dates = req.query.search.match(regexDate);
            var diseases = req.query.search.match(regexDisease);
            var date = "";
            var diseaseName = "";
    
            // mencari tanggal
            if (dates != null) {

                var regexDigits = /((?:\d{2}){1,2}|\d)/g;
                var date_digits = dates[0].match(regexDigits);
                // var date
                if (date_digits.length == 3) {
                    if (date_digits[0].length == 4) {
                        date = date_digits[0] + '-' + String(date_digits[1]).padStart(2, '0') + '-' + String(date_digits[2]).padStart(2, '0');   
                    } else if (date_digits[0].length == 2) {
                        date = date_digits[2] + '-' + String(date_digits[1]).padStart(2, '0') + '-' + String(date_digits[0]).padStart(2, '0');
                    }
                } else if (date_digits.length == 2) {
                    var month;
                    if (dates[0].search(/[Jj]an(?:uar[yi])?/) != -1) {
                        month = '01';
                    } else if (dates[0].search(/[Ff]eb(?:ruar[yi])?/) != -1) {
                        month = '02';
                    } else if (dates[0].search(/[Mm]ar(?:(ch|et))?/) != -1) {
                        month = '03';
                    } else if (dates[0].search(/[Aa]pr(?:il)?/) != -1) {
                        month = '04';
                    } else if (dates[0].search(/[Mm](ay|ei)/) != -1) {
                        month = '05';
                    } else if (dates[0].search(/[Jj]un[ei]?/) != -1) {
                        month = '06';
                    } else if (dates[0].search(/[Jj]ul[yi]?/) != -1) {
                        month = '07';
                    } else if (dates[0].search(/[Aa]ug(?:ust)?/) != -1) {
                        month = '08';
                    } else if (dates[0].search(/[Aa]gu(?:stus)?/) != -1) {
                        month = '08';
                    } else if (dates[0].search(/[Ss]ep(?:tember)?/ ) != -1) {
                        month = '09';
                    } else if (dates[0].search(/[Oo][ck]t(?:ober)?/) != -1) {
                        month = '10';
                    } else if (dates[0].search(/[Nn]ov(?:ember)?/) != -1) {
                        month = '11';
                    } else if (dates[0].search(/[Dd]e[cs](?:ember)?/) != -1) {
                        month = '12';
                    }
                    if (date_digits[0].length == 4) {
                        date = date_digits[0] + '-' + month + '-' + String(date_digits[1]).padStart(2, '0');   
                    } else if (date_digits[0].length == 2) {
                        date = date_digits[1] + '-' + month + '-' + String(date_digits[0]).padStart(2, '0');
                    }
                }
            }
            
            if (diseases != null) {
                // mencari nama penyakit
                // var diseaseName = "";
                for (var i = 0; i < diseases.length; i++) {
                    if (!(/[Jj]an(?:uar[yi])?/).test(diseases[i]) && 
                        !(/[Ff]eb(?:ruar[yi])?/).test(diseases[i]) && 
                        !(/[Mm]ar(?:(ch|et))?/).test(diseases[i]) && 
                        !(/[Aa]pr(?:il)?/).test(diseases[i]) && 
                        !(/[Mm](ay|ei)/).test(diseases[i]) && 
                        !(/[Jj]un[ei]?/).test(diseases[i]) && 
                        !(/[Jj]ul[yi]?/).test(diseases[i]) && 
                        !(/[Aa]ug(?:ust)?/).test(diseases[i]) && 
                        !(/[Aa]gu(?:stus)?/).test(diseases[i]) && 
                        !(/[Ss]ep(?:tember)?/).test(diseases[i]) && 
                        !(/[Oo][ck]t(?:ober)?/).test(diseases[i]) && 
                        !(/[Nn]ov(?:ember)?/).test(diseases[i]) && 
                        !(/[Dd]e[cs](?:ember)?/).test(diseases[i])) {
                        diseaseName = diseases[i];
                        break;
                    }
                }
                // hapus spasi di awal dan akhir
                diseaseName = diseaseName.replace(/(^\s+|\s+$)/gm, '');
            }
    
    
            // // NOTES:
            // // Final Result: date & diseaseName

            req.body.diseaseName=diseaseName;
            req.body.date=date;
            console.log(req.body);
            next();

        } else {
            res.status(400).json({
                message: "Invalid Query"
            });
        }
    },

    addLeadingZeros(num, totalLength) {
        return String(num).padStart(totalLength, '0');
    }
}
