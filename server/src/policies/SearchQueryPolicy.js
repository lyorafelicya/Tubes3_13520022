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

        
        if (req.body.Query.test(regexDate) || req.body.Query.test(regexDisease)) {
            // Hasil slicing dengan regex
            var dates = req.body.Query.match(regexDate);
            var diseases = req.body.Query.match(regexDisease);
    
            // mencari tanggal
            var regexDigits = /((?:\d{2}){1,2}|\d)/g;
            var date_digits = dates[0].match(regexDigits);
            var date
            if (date_digits.length == 3) {
                if (date_digits[0].length == 4) {
                    date = date_digits[0] + '-' + this.addLeadingZeros(date_digits[1], 2) + '-' + this.addLeadingZeros(date_digits[2], 2);   
                } else if (date_digits[0].length == 2) {
                    date = date_digits[2] + '-' + this.addLeadingZeros(date_digits[1], 2) + '-' + this.addLeadingZeros(date_digits[0], 2);
                }
            } else if (date_digits.length == 2) {
                var month;
                if (date_digits[1].match(/[Jj]an(?:uar[yi])?/)) {
                    month = '01';
                } else if (date_digits[1].match(/[Ff]eb(?:ruar[yi])?/)) {
                    month = '02';
                } else if (date_digits[1].match(/[Mm]ar(?:(ch|et))?/)) {
                    month = '03';
                } else if (date_digits[1].match(/[Aa]pr(?:il)?/)) {
                    month = '04';
                } else if (date_digits[1].match(/[Mm](ay|ei)/)) {
                    month = '05';
                } else if (date_digits[1].match(/[Jj]un[ei]?/)) {
                    month = '06';
                } else if (date_digits[1].match(/[Jj]ul[yi]?/)) {
                    month = '07';
                } else if (date_digits[1].match(/[Aa]ug(?:ust)?/)) {
                    month = '08';
                } else if (date_digits[1].match(/[Aa]gu(?:stus)?/)) {
                    month = '09';
                } else if (date_digits[1].match(/[Ss]ep(?:tember)?/)) {
                    month = '10';
                } else if (date_digits[1].match(/[Oo][ck]t(?:ober)?/)) {
                    month = '11';
                } else if (date_digits[1].match(/[Nn]ov(?:ember)?/)) {
                    month = '12';
                } else if (date_digits[1].match(/[Dd]e[cs](?:ember)?)/)) {
                    month = '12';
                }
                if (date_digits[0].length == 4) {
                    date = date_digits[0] + '-' + month + '-' + this.addLeadingZeros(date_digits[2], 2);   
                } else if (date_digits[0].length == 2) {
                    date = date_digits[2] + '-' + month + '-' + this.addLeadingZeros(date_digits[0], 2);
                }
            }
    
            // mencari nama penyakit
            var diseaseName;
            for (var i = 0; i < diseases.length; i++) {
                if (!diseases[i].match(/[Jj]an(?:uar[yi])?/) && !diseases[i].match(/[Ff]eb(?:ruar[yi])?/) && !diseases[i].match(/[Mm]ar(?:(ch|et))?/) && !diseases[i].match(/[Aa]pr(?:il)?/) && !diseases[i].match(/[Mm](ay|ei)/) && !diseases[i].match(/[Jj]un[ei]?/) && !diseases[i].match(/[Jj]ul[yi]?/) && !diseases[i].match(/[Aa]ug(?:ust)?/) && !diseases[i].match(/[Aa]gu(?:stus)?/) && !diseases[i].match(/[Ss]ep(?:tember)?/) && !diseases[i].match(/[Oo][ck]t(?:ober)?/) && !diseases[i].match(/[Nn]ov(?:ember)?/) && !diseases[i].match(/[Dd]e[cs](?:ember)?)/)) {
                    diseaseName = diseases[i];
                    break;
                }
            }
            // hapus spasi di awal dan akhir
            diseaseName = diseaseName.replace(/(^\s+|\s+$)/gm, '');
    
    
            // NOTES:
            // Final Result: date & diseaseName
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
