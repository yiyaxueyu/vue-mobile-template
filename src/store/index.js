import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  isReloadUserInfo: false,
  userinfo: {
    code: '-1003',
    data: {
      'activity_coin': '0'
    }
  }
}

export default function createStore () {
  return new Vuex.Store({
    actions,
    getters,
    mutations,
    state
  })
}
