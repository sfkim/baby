<script>
// import components
import { mapGetters } from 'vuex';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './components/Home.vue';
import Chat from './components/Chat.vue';
import Wiki from './components/Wiki.vue';
import MyInfo from './components/MyInfo.vue';
import Setting from './components/Setting.vue';

export default {
  name: 'app',
  components: {
    //사용할 components 이름 추가(import 이름과 동일)
    Header, Footer,
    Home, Chat, Wiki, MyInfo, Setting
  },
  computed: {
    ...mapGetters([
      'currentPage'
    ])
  },
  mounted () {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      var clientHeight = document.documentElement.clientHeight;
      var content = document.getElementsByClassName('content');
      content[0].style.height = ((clientHeight - 120) + 'px');
    }
  }
}
</script>

<template>
  <div id="app">
    <!-- Header를 위치시킬 공간 지정(top class로 지정)-->
    <div class='top'>
      <Header></Header>
    </div>

    <div class='content'>
      <Home v-if="currentPage == 'home'"></Home>
      <MyInfo v-if="currentPage == 'my-info'"></MyInfo>
      <Chat v-if="currentPage == 'chat'"></Chat>
      <Wiki v-if="currentPage == 'wiki'"></Wiki>
      <Setting v-if="currentPage == 'setting'"></Setting>
    </div>

    <!-- Footer를 위치시킬 공간 지정(bottom class로 지정)-->
    <div class='bottom'>
      <Footer></Footer>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Jua|Nanum+Gothic&display=swap');

/* for using height 100% */
html, body {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  font-family: 'Jua', 'Nanum Gothic', Helvetica, Apple SD Gothic Neo, sans-serif;
  font-size: 18px;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}

/* place top and set area */
.top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
}

/* place bottom and set area */
.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
}

.content {
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 60px;
  padding-bottom: 60px;
  background-color: #e0f2f0;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
