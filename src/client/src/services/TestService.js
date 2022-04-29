import Api from '@/services/Api'

export default {
    getTestResult(test) {
        return Api().post("",test)
    }
}