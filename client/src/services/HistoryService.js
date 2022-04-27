import Api from '@/services/Api'

export default {
    getHistoryTest(search) {
        return Api().get('history', {
            params: {
                search: search
            }
        })
    }
}