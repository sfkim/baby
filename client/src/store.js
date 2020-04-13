import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use (Vuex);
const DM_SERVER = 'http://10.113.67.36:8895/';

function defaultState () {
  return {
    currentPage: 'home',
    inputMessage: '',
    chatData: [{
      index: 0,
      speaker: 'bot',
      content: '#### 안녕하세요. \n 우리아기앱에 질문해주셔서 감사합니다.'
    },],
    babyInformation: [],
    monthInformation: []
  }
}

function getContents (state) {
  Axios.get(DM_SERVER + 'get_content?question=' + state.inputMessage)
      .then(res => {
        console.log(res.data.content);
        if (res.data.content == 0) {
          res.data.content = "#### 답변이 준비되지 않았습니다. \n 빠른 시간안에 제공하도록 하겠습니다."
          //TODO: no content -> how to replace it?
        }
        const inputObj = {
          index: state.chatData.length,
          speaker: 'bot',
          content: res.data.content
        }
        state.chatData.push(inputObj);
      }).catch((error) => {
        const inputObj = {
          index: state.chatData.length,
          speaker: 'bot',
          content: "#### Network 문제가 발생했습니다. \n 잠시후에 다시 이용해주세요."
        }
        state.chatData.push(inputObj);
      })
}

function getMonthContents (state, currentMonth) {
  state.monthInformation = [];

  // 신체 성장 표준치
  const growthID = 240;
  let growthChip = currentMonth;

  if (state.babyInformation == null) growthChip += 100;
  else if (state.babyInformation[0].babySex == 0) growthChip += 100;

  Axios.get(DM_SERVER + 'get_content?classID=' + growthID + '&chip=' + growthChip)
    .then(res => {
      if(res.data.content != 0)
        state.monthInformation.push(res.data.content);
      // 성장 발달 특징
      const growthFeaturesID = 220;
      const growthFeaturesClass = currentMonth;

      Axios.get(DM_SERVER + 'get_content?classID=' + growthFeaturesID + '&chip=' + growthFeaturesClass)
        .then(res => {
          if(res.data.content != 0)
            state.monthInformation.push(res.data.content);
          // 개월수에 따른 놀이 방법
          const growthPlayID = 200;
          const growthPlayClass = currentMonth;
          Axios.get(DM_SERVER + 'get_content?classID=' + growthPlayID + '&chip=' + growthPlayClass)
            .then(res => {
              if(res.data.content != 0)
                state.monthInformation.push(res.data.content);
              // 개월수에 따른 예방 접종
              const growthVaccinationID = 100;
              const growthVaccinationClass = currentMonth;

              Axios.get(DM_SERVER + 'get_content?classID=' + growthVaccinationID + '&chip=' + growthVaccinationClass)
                .then(res => {
                  if(res.data.content != 0)
                    state.monthInformation.push(res.data.content);
                })
            })
        })
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
    },
    getCurrentMonthInformation (state, currentMonth) {
      getMonthContents(state, currentMonth);
    },
    setBabyInfo(state, babyInfo) {
        state.babyInformation = babyInfo;
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
    },
    userInformation: state => {
      return state.userInformation
    },
    monthInformation: state => {
      return state.monthInformation
    },
    babyInformation: state => {
      return state.babyInformation
    }
  }
});

export default store;