import Api from '@/services/Api'

export default {
    getHistoryTest(search) {
        return Api().get('search', {
            params: {
                search: search
            }
        })
    }
}