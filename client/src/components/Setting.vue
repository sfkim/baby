<script>
export default {
  name: 'Setting',
  props: {
    msg: String
  }
}
</script>

<template>
  <div>
      <div class="embed-container" style="TEXT-ALIGN: center">
          <object type="text/html" width="320" height="180" data="//www.youtube.com/v/dEPirXVVhhs?autoplay=1&loop=1" allowscreen=""/>
      </div>
  </div>
</template>

<style>
.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; }
.embed-container object,
.embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
</style>
