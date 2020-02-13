import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    loggedin (state){
      console.log("log in.")
      state.isLoggedIn = true
    }
  },
  actions: {

  }
})
