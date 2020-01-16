import Vue from 'vue';
import Vuex from 'vuex';

Vue.use (Vuex);

function defaultState () {
  return {
    currentPage: 'home'
  }
}

const store = new Vuex.Store ({
  state: defaultState (),
  mutations: {
    updateCurrentPage (state, currentPage) {
      state.currentPage = currentPage;
      console.log(state.currentPage);
    }
  },
  getters: {
    currentPage: state => {
      return state.currentPage
    }
  }

});

export default store;