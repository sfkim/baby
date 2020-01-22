<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Chat',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters([
      'inputMessage'
    ])
  }
}
</script>

<template>
  <div>Chat page<br>
    <b>input : {{inputMessage}}</b><br>
  </div>
</template>

<style>
</style>
