<script>
import Menu from './Menu.vue'

export default {
  name: 'Home',
  components: {
    Menu
  }
}
</script>

<template>
  <div class="home_wrap">
    <div class="menu-container">
      <Menu></Menu>
    </div>
  </div>

</template>

<style>
.home_wrap {
  min_height: 100%;
}
.search-container {
    width: 100%;
    height: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
