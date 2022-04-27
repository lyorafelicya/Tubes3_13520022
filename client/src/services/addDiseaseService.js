import Api from '@/services/Api';

export default {
    post(disease) {
        return Api().post('addDisease', disease);
    }
    // addDisease (credentials) {
    //     return Api().post('addDisease', credentials);
    // }
}

// AuthenticationService.addDisease({
//     DNASequence: '',
//     DiseaseName :''
// })