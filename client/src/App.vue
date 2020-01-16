<script>
// import components
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    //사용할 components 이름 추가(import 이름과 동일)
    Header, Footer,
    Home
  }
}
</script>

<template>
  <div id="app">
    <!-- Header를 위치시킬 공간 지정(top class로 지정)-->
    <div class='top'>
      <Header msg="Home"></Header>
    </div>

    <div class='content'>
      <Home></Home>
    </div>

    <!-- Footer를 위치시킬 공간 지정(bottom class로 지정)-->
    <div class='bottom'>
      <Footer></Footer>
    </div>
  </div>
</template>

<style>
/* for using height 100% */
html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
}

#app {
  position: relative;
  width: 100%;
  max-width: 412px;
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
    height: 100%;
    width: 100%;
    margin-top: 60px;
    margin-bottom: 60px;
}
</style>
