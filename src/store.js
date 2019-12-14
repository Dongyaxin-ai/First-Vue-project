import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    count: -1,
    myarr: [
        { clas: "基本信息", data: "/aaa" },
        { clas: "课程管理", data: "/bbb" },
        { clas: "我的问答", data: "/ccc" },
        { clas: "我的收入", data: "/sss" }
      ],
}
const mutations = {
    activeadd(state, n = 0) {
        return (state.count = n)
    },
}









export default new Vuex.Store({
    state,
    mutations,
    
})