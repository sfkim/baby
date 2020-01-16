<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  props: {
    msg: String
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
    <div class="title">{{currentPage}}</div>
  </div>
</template>

<style>
.header-container {
  width: 100%;
  height: 100%;
  background-color: rgb(224, 224, 224);
}
.title {
  font-size: 25px;
  padding-top: 16px;
  padding-left: 70px;
}
</style>
