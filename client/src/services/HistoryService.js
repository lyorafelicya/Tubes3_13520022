import Api from '@/services/Api'

export default {
    getHistoryTests(search) {
        return Api().get('search', {
            params: {
                //date: search,
                diseaseName: search
            }
        })
    }
}