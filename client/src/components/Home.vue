<script>
import Menu from './Menu.vue'
import Search from './Search.vue'

export default {
  name: 'Home',
  components: {
    Menu, Search
  }
}
</script>

<template>
  <div class="home_wrap">
    <div class="search_wrap">
      <Search></Search>
    </div>
    <div class="menu-container">
      <Menu></Menu>
    </div>
  </div>
</template>

<style>
.home_wrap {
  min_height: 100%;
}
.search_wrap {
  margin: 10px 0;
}
</style>
