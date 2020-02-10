<script>
import Search from './Search.vue'
import Menu from './Menu.vue'

export default {
  name: 'Home',
  components: {
    Search, Menu
  }
}
</script>

<template>
  <div>
    <div class="search-container">
      <Search></Search>
    </div>
    <div class="menu-container">
      <Menu></Menu>
    </div>
  </div>

</template>

<style>
.search-container {
    width: 100%;
    height: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
