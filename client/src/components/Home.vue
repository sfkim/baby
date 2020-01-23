<script>
import Search from './Search.vue'

export default {
  name: 'Home',
  components: {
    Search
  }
}
</script>

<template>
  <div>
    <div class="search-container">
      <Search></Search>
    </div>
  </div>

</template>

<style>
.search-container {
    width: 100%;
    height: 50px;
}
</style>
