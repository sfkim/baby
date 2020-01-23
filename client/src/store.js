import Vue from 'vue';
import Vuex from 'vuex';

Vue.use (Vuex);

function defaultState () {
  return {
    currentPage: 'home',
    inputMessage: ''
  }
}

const store = new Vuex.Store ({
  state: defaultState (),
  mutations: {
    updateCurrentPage (state, currentPage) {
      state.currentPage = currentPage;
      console.log(state.currentPage);
    },
    setInputMessage (state, message) {
      state.inputMessage = message;
    }
  },
  getters: {
    currentPage: state => {
      return state.currentPage
    },
    inputMessage: state => {
      return state.inputMessage
    }
  }
});

export default store;