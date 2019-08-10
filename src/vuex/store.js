import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

// 初始化一个仓库
const store = new Vuex.Store({
    state: {
        gid: '',

    },
    mutations: {
        setGid(state, id) {
            state.gid = id;
        }
    },
    actions: {
        set(context, id) {
            // 在action里面触发commit
            context.commit('setGid', id)
        }
    },
    getters: {
        getGid(state) {
            return state.gid;
        }
    }
});

export default store