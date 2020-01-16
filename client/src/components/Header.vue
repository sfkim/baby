<script>
export default {
  //set name 'Header'
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<template>
  <div class="header-container">
    <div class="title">{{msg}}</div>
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
