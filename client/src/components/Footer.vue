<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

  export default {
    name: 'Footer',
    props: {
    },
    methods: {
      onClickHome () {
        this.updateCurrentPage('home');
      },
      onClickMyInfo () {
        this.updateCurrentPage('my-info');
      },
      onClickChat () {
        this.updateCurrentPage('chat');
      },
      onClickWiki () {
        this.updateCurrentPage('wiki');
      },
      onClickSetting () {
        this.updateCurrentPage('setting');
      },
      ...mapMutations ([
        'updateCurrentPage'
      ]),
    },
    computed: {
      ...mapGetters([
        'currentPage'
      ])
    }
}
</script>

<template>
  <div class="footer-container">
    <ul class="footer">
      <li class="footer_item" id="icon-home" @click="onClickHome" v-if="currentPage!='home'"><span class="footer_link">홈</span></li>
      <li class="footer_item active" id="icon-home" @click="onClickHome" v-if="currentPage=='home'"><span class="footer_link">홈</span></li>
      <li class="footer_item" id="icon-my-info" @click="onClickMyInfo" v-if="currentPage!='my-info'"><span class="footer_link">나의 아기</span></li>
      <li class="footer_item active" id="icon-my-info" @click="onClickMyInfo" v-if="currentPage=='my-info'"><span class="footer_link">나의 아기</span></li>
      <li class="footer_item" id="icon-chat" @click="onClickChat" v-if="currentPage!='chat'"><span class="footer_link">채팅</span></li>
      <li class="footer_item active" id="icon-chat" @click="onClickChat" v-if="currentPage=='chat'"><span class="footer_link">채팅</span></li>
      <li class="footer_item" id="icon-wiki" @click="onClickWiki" v-if="currentPage!='wiki'"><span class="footer_link">아기 사전</span></li>
      <li class="footer_item active" id="icon-wiki" @click="onClickWiki" v-if="currentPage=='wiki'"><span class="footer_link">아기 사전</span></li>
      <li class="footer_item" id="icon-setting" @click="onClickSetting" v-if="currentPage!='setting'"><span class="footer_link">설정</span></li>
      <li class="footer_item active" id="icon-setting" @click="onClickSetting" v-if="currentPage=='setting'"><span class="footer_link">설정</span></li>
    </ul>
  </div>
</template>

<style>
.footer-container {
  width: 100%;
  height: 100%;
}
.footer {
  display: table;
  width: 100%;
  height: 100%;
  table-layout: fixed;
}
.footer_item {
  display: table-cell;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 40px;
  background-color: white;
}
.footer_item.active {
  background-color: rgb(23, 113, 134, .5);
  color: white;
  text-weight: bold;
}
.footer_link {
  display: block;
  position: relative;
  top: 38px;
  font-size: 16px;
  text-align: center;
}
.icon-item {
  width: 20%;
  height: 100%;
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: center top;
  background-color: rgb(200, 237, 230);
  float: left;
  vertical-align: bottom;
}

.current-page {
  height: 60px;
  background-color: rgba(0, 0, 255, 0.2);
  border-top: 5px solid black;
}

.icon-title {
  position: absolute;
  bottom: 0;
  width: 20%;
  text-align: center;
}

#icon-home {
  background-image: url('../assets/icons/icons8-home-100.png');
}

#icon-my-info {
  background-image: url('../assets/icons/icons8-baby-150.png');
}

#icon-chat {
  background-image: url('../assets/icons/icons8-chat-100.png');
}

#icon-wiki {
  background-image: url('../assets/icons/icons8-books-150.png');
}

#icon-setting {
  background-image: url('../assets/icons/icons8-web-settings-100.png');
}
</style>
