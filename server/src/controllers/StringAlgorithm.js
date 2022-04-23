module.exports = {
    KMP(DNAUser, DNADisease) {
        var i = 0;
        var j = 0;
        var DNAUserLength = DNAUser.length;
        var DNADiseaseLength = DNADisease.length;
        var next = KMPBorderFunction(DNADisease);
        while (i < DNAUserLength) {
            if (DNAUser[i] == DNADisease[j]) {
                if (j == DNADiseaseLength - 1) {
                    return i - j;
                }
                i++;
                j++;
            } else if (j > 0) {
                j = next[j - 1];
            } else {
                i++;
            }
        }
        return -1;
    },

    KMPBorderFunction(DNADisease) {
        var i = 0;
        var j = 0;
        var next = [];
        next[0] = 0;
        while (i < DNADisease.length) {
            if (DNADisease[i] == DNADisease[j]) {
                next[++i] = ++j;
            } else {
                if (j > 0) {
                    j = next[j - 1];
                } else {
                    next[++i] = 0;
                }
            }
        }
        return next;
    },

    BooyerMore(DNAUser,DNADisease) {
        var DNAUserLength = DNAUser.length;
        var DNADiseaseLength = DNADisease.length;
        var i = DNADiseaseLength - 1;
        var lastOccurence = BMLastOccurence(DNADisease);
        if (i > DNAUserLength - 1) {
            return -1;
        }
        var j = i;
        do {
            if (DNAUser[i] == DNADisease[j]) {
                if (j == 0) {
                    return i;
                } else {
                    i--;
                    j--;
                }
            } else {
                var last = lastOccurence[DNAUser[j]];
                if (last === undefined) {
                    i = i + DNADiseaseLength - j;
                    j = DNADiseaseLength - 1;
                }
                else {
                    i = i + last - j;
                    j = last;
                }
            }
        } while (i <= DNAUserLength - 1);
        return -1;
    },

    BMLastOccurence(DNADisease) {
        var lastOccurence = [];
        var i = 0;
        for (i = 0; i < 128; i++) {
            lastOccurence[i] = -1;
        }
        for (i = 0; i < DNADisease.length; i++) {
            lastOccurence[DNADisease[i]] = i;
        }
        return lastOccurence;
    },

}