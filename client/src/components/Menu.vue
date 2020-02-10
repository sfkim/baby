<script>
export default {
  name: 'Menu'
}
</script>

<template>
  <div class="menu-wrapper">
    <div id="menu-1" class="menu-sector">메뉴 1</div>
    <div id="menu-2" class="menu-sector">메뉴 2</div>
    <div id="menu-3" class="menu-sector">메뉴 3</div>
    <div id="menu-4" class="menu-sector">메뉴 4</div>
    <div id="menu-5" class="menu-sector">메뉴 5</div>
    <div id="menu-6" class="menu-sector">메뉴 6</div>
    <div id="menu-7" class="menu-sector">메뉴 7</div>
    <div id="menu-8" class="menu-sector">메뉴 8</div>
  </div>
</template>

<style>
* {
  padding: 0px;
  margin: 0px;
}

.menu-wrapper {

}

.menu-sector {
  margin: 45px;
  max-width: 100px;
  max-height: 100px;
  width: 30vw;
  height: 30vw;
  float: left;
  text-align: center;
  background-color: rgb(240, 206, 203);
  border: 4px solid rgb(230, 96, 116);
  border-radius: 30px;
}
</style>