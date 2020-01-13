<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<template>
  <div class="footer-container">
    <div id="icon-home" class="icon-item"></div>
    <div id="icon-my-info" class="icon-item"></div>
    <div id="icon-chat" class="icon-item"></div>
    <div id="icon-wiki" class="icon-item"></div>
    <div id="icon-setting" class="icon-item"></div>
  </div>
</template>

<style>
.footer-container {
  width: 100%;
  height: 100%;
  background-color: rgb(224, 224, 224);
}

.icon-item {
  width: 20%;
  height: 100%;
  background-size: 60px;
  background-repeat: no-repeat;
  background-position: center center;
  float: left;
}

#icon-home {
  background-image: url('../assets/icons/icons8-home-100.png');
}

#icon-my-info {
  background-image: url('../assets/icons/icons8-baby-150.png');
}

#icon-chat {
  background-image: url('../assets/icons/icons8-chat-100.png');
}

#icon-wiki {
  background-image: url('../assets/icons/icons8-books-150.png');
}

#icon-setting {
  background-image: url('../assets/icons/icons8-web-settings-100.png');
}
</style>
