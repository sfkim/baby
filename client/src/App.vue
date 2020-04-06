<script>
// import components
import { mapGetters } from 'vuex';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Search from './components/Search.vue'
import router from './router';
import resetCSS from './assets/css/reset.css'


export default {
  name: 'app',
  components: {
    //사용할 components 이름 추가(import 이름과 동일)
    Header, Footer, Search
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
      var margin = matchMedia('screen and (min-width: 1024px)').matches ? 105 : 120;
      content[0].style.height = ((clientHeight - margin) + 'px');
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
      <router-view id="view" default="/" :key="$route.fullPath"></router-view>
      <div class="search_wrap">
        <Search></Search>
      </div>
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
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}
/* place top and set area */
.top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
}
/* place bottom and set area */
.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
}
.content {
  width: 100%;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow: hidden;
  background: linear-gradient(45deg, #CCFFFF, #FFCCCC);
}
#view {
	height: 100%;
	overflow: auto;
}
.search_wrap {
    position: absolute;
    bottom: 70px;
    height: 50px;
}
@media screen and (min-width: 1024px) {
	.bottom {
		width: 100%;
		height: 45px;
		margin: 0 auto;
		top: 60px;
		border: 1px solid #a0a0a0;
		box-sizing: border-box;
	}
	.content {
	width: 80%;
	margin: 0 auto;
	margin-top: 105px;
	}
	.search_wrap {
		display: fixed;
		top: 10px;
		right: 50px;
	}
}
</style>
