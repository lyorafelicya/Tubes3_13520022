module.exports = {
    KMP(DNAUser, DNADisease) {
        // Panjang karakter DNA User dan DNA Disease
        var DNAUserLength = DNAUser.length;
        var DNADiseaseLength = DNADisease.length;
        // Array untuk menyimpan nilai KMP Border Function
        var next = this.KMPBorderFunction(DNADisease);
        // Inisialisasi similarity
        var similarity;
        // Iterator (i: index DNA User, j: index DNA Disease)
        var i = 0;
        var j = 0;

        // Algoritma KMP
        if (DNADiseaseLength > DNAUserLength) {
            return 0.0;             // Jika panjang karakter DNA Disease lebih besar dari DNA User
        }
        while (i <= DNAUserLength - DNADiseaseLength - 1) {
            if (DNAUser[i] == DNADisease[j]) {
                if (j == DNADiseaseLength - 1) {
                    return 1.0;     // Ketemu DNA yang 100% sama
                }
                i++;
                j++;
            } else {
                if (j > 0) {
                    j = next[j - 1];
                } else {
                    i++;
                }
            }
        }
        similarity = this.largestSimilarity(DNAUser, DNADisease);
        return similarity;          // Tidak ketemu DNA yang 100% sama
    },

    KMPBorderFunction(DNADisease) {
        var next = [];
        var i = 1;
        var j = 0;
        
        // Hitung nilai border function
        next[0] = 0;
        while (i < DNADisease.length) {
            if (DNADisease[i] == DNADisease[j]) {
                next[i] = j + 1;
                i++;
                j++;
            } else {
                if (j > 0) {
                    j = next[j - 1];
                } else {
                    next[i] = 0;
                    i++;
                }
            }
        }
        return next;
    },

    BoyerMoore(DNAUser,DNADisease) {
        // Panjang karakter DNA User dan DNA Disease
        var DNAUserLength = DNAUser.length;
        var DNADiseaseLength = DNADisease.length;
        // Array untuk menyimpan nilai Last Occurence tiap karakter pada DNA Disease
        var lastOccurence = this.BMLastOccurence(DNADisease);
        // Inisialisasi similarity
        var similarity;
        // Iterator (i: index DNA User, j: index DNA Disease)
        var i = DNADiseaseLength - 1;
        var j = i;
        if (i > DNAUserLength - 1) {
            return 0.0;        // Jika panjang karakter DNA Disease lebih besar dari DNA User
        }
        do {
            if (DNAUser[i] == DNADisease[j]) {
                if (j == 0) {
                    return 1.0;      // Ketemu DNA yang 100% sama
                } else {
                    i--;
                    j--;
                }
            } else {
                var last = lastOccurence[DNAUser[j]];
                i = i + DNADiseaseLength - Math.min(j, 1 + last);
                j = DNADiseaseLength - 1;
            }
        } while (i <= DNAUserLength-DNADiseaseLength-1);
        similarity = largestSimilarity(DNAUser, DNADisease);
        return similarity;          // Tidak ketemu DNA yang 100% sama
    },

    BMLastOccurence(DNADisease) {
        var lastOccurence = [];
        var i = 0;

        // Inisialisasi semua nilai dengan -1
        for (i = 0; i < 128; i++) {
            lastOccurence[i] = -1;
        }
        // Isi nilai sesuai kemunculan terakhir tiap karakter pada DNA Disease
        for (i = 0; i < DNADisease.length; i++) {
            lastOccurence[DNADisease[i]] = i;
        }
        return lastOccurence;
    },

    HammingDistance(DNAUserSample, DNADisease) {
        // Panjang karakter DNAUserSample dan DNADisease
        var DNAUserLength = DNAUserSample.length;
        var DNADiseaseLength = DNADisease.length;
        // Hamming distance (jumlah perbedaan karakter) 
        var distance = 0;

        // Panjang karakter DNAUserSample dan DNADisease harus sama
        if (DNAUserLength != DNADiseaseLength) {
            return -1;
        }
        // Perbandingan karakter-karakter dari DNAUserSample dan DNADisease
        for (var i = 0; i < DNAUserLength; i++) {
            if (DNAUserSample[i] != DNADisease[i]) {
                distance++;
            }
        }
        return distance;
    },

    largestSimilarity(DNAUser, DNADisease) {
        // Panjang karakter DNAUser dan DNADisease
        var DNAUserLength = DNAUser.length;
        var DNADiseaseLength = DNADisease.length;
        // Hamming distance dan similarity (persentase karakter yang sama)
        var hammingDistance = 0;
        var similarity = 0.0;

        // Perbandingan karakter-karakter dari DNAUser dan DNADisease
        for (var i = 0; i <= DNAUserLength - DNADiseaseLength; i++) {
            hammingDistance = this.HammingDistance(DNAUser.slice(i, i + DNADiseaseLength), DNADisease);
            similarity = Math.max((parseFloat(DNADiseaseLength - hammingDistance) / parseFloat(DNADiseaseLength)), similarity);
        }
        return similarity;
    }
}