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
    <ul>
      <li><div id="icon-home" class="icon-item" @click="onClickHome">
        <img id=home-img src="../assets/home.png">
      </div></li>
      <li><div id="icon-my-info" class="icon-item" @click="onClickMyInfo">
        <img id=my-info-img src="../assets/user.png">
      </div></li>
      <li><div id="icon-chat" class="icon-item" @click="onClickChat">
        <img id=chat-img src="../assets/chat.png">
      </div></li>
      <li><div id="icon-wiki" class="icon-item" @click="onClickWiki">
        <img id=wiki-img src="../assets/wiki.png">
      </div></li>
      <li><div id="icon-setting" class="icon-item" @click="onClickSetting">
        <img id=setting-img src="../assets/setting.png">
      </div></li>
    </ul>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.footer-container {
  width: 100%;
  height: 100%;
  background-color: rgb(224, 224, 224);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-container ul{
  margin-right: 10px;
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.icon-item img {
  max-width: 40px;
}
</style>
