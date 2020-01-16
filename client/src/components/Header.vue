<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<template>
  <div class="header-container">
    <div class="title">{{msg}}
      <h2>BB</h2>
      <nav>
        <ul>
          <li><a href="">Introduce</a></li>
          <li><a href="http://www.naver.com">login</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Marmelad&display=swap');

*{
 margin: 0px;
 padding: 0px;
}
.header-container {
  width: 100%;
  height: 100%;
  background-color: rgb(224, 224, 224);
  align-items: center;
  justify-content: space-between;
}

.header-container ul{
  font-size: 13px;
  margin-right: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-container title {
  font-size: 25px;
  padding-left: 70px;
  font-family: 'Marmelad';
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav {
  width: 30%;
}

a {
  text-decoration: none;
  outline: none;
}
</style>
