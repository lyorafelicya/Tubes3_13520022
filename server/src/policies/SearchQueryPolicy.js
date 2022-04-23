module.exports = {
    checkQuery(req, res, next) {
        // Regex Tanggal
        // Format: hari bisa 1 atau 2 digit
        //         bulan bisa 1 atau 2 digit atau dalam bentuk kata-kata
        //         tahun bisa 2 atau 4 digit
        //         urutan bisa D/M/Y atau M/D/Y atau Y/M/D atau Y/D/M
        //         separator bisa ' ' atau '-' atau '/'
        var regexDate = /(\d{1,2}[\/| |\-]\d{1,2}[\/| |\-](?:\d{2}){1,2})|(((?:\d{2}){1,2})[\/| |\-]\d{1,2}[\/| |\-]\d{1,2})|(\d{1,2}[\/| |\-]\b(?:[Jj]an(?:uar[yi])?|[Ff]eb(?:ruar[yi])?|[Mm]ar(?:(ch|et))?|[Aa]pr(?:il)?|[Mm](ay|ei)|[Jj]un[ei]?|[Jj]ul[yi]?|[Aa]ug(?:ust)?|[Aa]gu(?:stus)?|[Ss]ep(?:tember)?|[Oo][ck]t(?:ober)?|[Nn]ov(?:ember)?|[Dd]e[cs](?:ember)?)[\/| |\-](?:\d{2}){1,2})/g;
        
        // Regex Nama Penyakit
        // Format: semua kata/frasa/klausa yang tersusun atas huruf kapital maupun tidak
        var regexDisease = /([A-Za-z]+ ?)+/g;

        // Hasil slicing dengan regex
        dates = req.body.Query.match(regexDate);
        diseases = req.body.Query.match(regexDisease);
    }
}
