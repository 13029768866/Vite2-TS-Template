import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age: 10
  },
  mutations: {
    /* mutation修改状态只能采用同步修改 */
    SYNC_CHANGE:(state,payload) => {
      state.age += payload
    },
    SYNC_EQUAL:(state,payload) => {
      state.age = payload
    }
  },
  actions: {
    asyncChange({commit},payload){
      setTimeout(()=>{
        commit('SYNC_CHANGE',payload)
      },1000)
    }
  },
  modules: {
  }
})
