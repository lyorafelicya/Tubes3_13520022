import Api from '@/services/Api';

export default {
    post(disease) {
        return Api().post('addDisease', disease);
    }
}
