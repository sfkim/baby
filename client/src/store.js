import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use (Vuex);

function defaultState () {
  return {
    currentPage: 'home',
    inputMessage: '',
    chatData: [{
      index: 0,
      speaker: 'bot',
      content: '#### 안녕하세요. \n 우리아기앱에 질문해주셔서 감사합니다.'
    },]
  }
}

function getContents (state) {
  Axios.get('http://15.165.90.78:8895/get_content?question=' + state.inputMessage)
      .then(res => {
        var inputObj = {
          index: state.chatData.length,
          speaker: 'bot',
          content: res.data.content
        }
        state.chatData.push(inputObj);
        console.log(state.chatData);
      }).catch((error) => {
        var inputObj = {
          index: state.chatData.length,
          speaker: 'bot',
          content: "#### Network 문제가 발생했습니다. \n 잠시후에 다시 이용해주세요."
        }
        state.chatData.push(inputObj);
        console.log(state.chatData);
      })
}

const store = new Vuex.Store ({
  state: defaultState (),
  mutations: {
    updateCurrentPage (state, currentPage) {
      state.currentPage = currentPage;
    },
    setInputMessage (state, message) {
      state.inputMessage = message;
      var inputObj = {
        index: state.chatData.length,
        speaker: 'user',
        content: '#### ' + message
      };
      state.chatData.push(inputObj);
      getContents(state);
    }
  },
  getters: {
    currentPage: state => {
      return state.currentPage
    },
    inputMessage: state => {
      return state.inputMessage
    },
    chatData: state => {
      return state.chatData
    }
  }
});

export default store;