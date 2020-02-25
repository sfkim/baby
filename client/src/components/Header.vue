<script>
import { mapGetters } from 'vuex';
import Search from './Search.vue'

export default {
  name: 'Header',
  props: {
    msg: String
  },
  components: {
    Search
  },
  computed: {
    ...mapGetters([
      'currentPage'
    ])
  }
}
</script>

<template>
  <div class="header-container">
    <span class="title" v-if="currentPage=='home'">아가사랑</span>
    <span class="title" v-else>{{currentPage}}</span>
    <div class="search_wrap">
      <Search></Search>
    </div>
  </div>
</template>

<style>
.header-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.title {
  font-size: 25px;
  margin: 0 auto;
}
.search_wrap {
  position: absolute;
  right: 10px;
  float: right;
}
</style>
