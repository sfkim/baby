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
    <div id="icon-home" class="icon-item" @click="onClickHome">
      <div class="icon-title">홈</div>
    </div>
    <div id="icon-my-info" class="icon-item" @click="onClickMyInfo">
      <div class="icon-title">나의 아기</div>
    </div>

    <div id="icon-chat" class="icon-item" @click="onClickChat">
      <div class="icon-title">채팅</div>
    </div>

    <div id="icon-wiki" class="icon-item" @click="onClickWiki">
      <div class="icon-title">아기 사전</div>
    </div>

    <div id="icon-setting" class="icon-item" @click="onClickSetting">
      <div class="icon-title">설정</div>
    </div>

  </div>
</template>

<style>
.footer-container {
  width: 100%;
  height: 100%;
}

.icon-item {
  width: 20%;
  height: 100%;
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: center top;
  background-color: rgb(200, 237, 230);
  float: left;
}

.icon-item:hover {
  filter: brightness(90%);
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
