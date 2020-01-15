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
    <h2>BB</h2>
    <nav>
      <ul>
        <li><a href="">Introduce</a></li>
        <li><a href="http://www.naver.com">login</a></li>
      </ul>
    </nav>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Marmelad&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Marmelad';
}

.header-container {
  width: 100%;
  height: 100%;
  background-color: rgb(224, 224, 224);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-container > h2 {
  margin-left: 10px;
}

nav {
  width: 30%;
}

.header-container ul{
  font-size: 13px;
  margin-right: 10px;
  list-style: none;
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  outline: none;
}
</style>
