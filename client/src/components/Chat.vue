<script>
import { mapGetters } from 'vuex';
import MarkdownItVue from 'markdown-it-vue'
import '../../node_modules/markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: 'Chat',
  components: {
    MarkdownItVue
  },
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'inputMessage',
      'chatData'
    ])
  },
  mounted () {
    //window.addEventListener('resize', this.handleResize);
    //this.handleResize();
  },
  methods: {
    handleResize() {
      var clientWidth = document.documentElement.clientWidth;
      var content = document.getElementsByClassName('md-container');
      console.log(content)
      for(var i = 0; i < content.length; i++) {
        console.log(i)
        content[i].style.width = ((clientWidth - 102) + 'px');
      }
    }
  }
}
</script>

<template>
  <div>
      <div v-for="item in chatData" :key="item.index">
          <div v-if="item.speaker == 'bot'">
              <div class='message-container'>
              <div class='popo-profile'></div>
                  <div class='md-container'>
                      <markdown-it-vue :content=item.content></markdown-it-vue>
                  </div>
              </div>
          </div>
          <div v-else>
              <div class='message-container'>
              <div class='user-profile'></div>
              <div class='md-container-right'>
                  <markdown-it-vue :content=item.content></markdown-it-vue>
              </div>
              </div>
          </div>
      </div>
  </div>
</template>

<style>
.message-container {
    min-height: 50px;
    max-height: 500px;
    width: 100%;
    margin-top: 15px;
}

.popo-profile {
    width: 50px;
    height: 50px;
    margin-left: 10px;
    border-radius: 25px;
    border: 1px solid rgb(224, 224, 224);
    float: left;
    background-image: url('../assets/icons/icons8-cute-hamster-96.png');
    background-size: 50px;
}

.md-container {
    width: 310px;
    min-height: 50px;
    max-height: 500px;
    margin-left: 75px;
    margin-bottom: 25px;
    overflow: scroll;
    border-radius: 3px 13px 13px 13px !important;
    -moz-border-radius: 3px 13px 13px 13px !important;
    -webkit-border-radius: 3px 13px 13px 13px !important;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.user-profile {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 25px;
    border: 1px solid rgb(224, 224, 224);
    float: right;
    background-image: url('../assets/icons/icons8-user-100.png');
    background-size: 50px;
    right: 0px;
}

.md-container-right {
    min-width: 50px;
    max-width: 200px;
    min-height: 25px;
    max-height: 100px;
    line-height: 0px;
    word-break: break-word;
    float: right;
    padding: 8px !important;
    margin-right: 10px;
    margin-top: 5px;
    overflow: hidden;
    border-radius: 13px 3px 13px 13px !important;
    -moz-border-radius: 13px 3px 13px 13px !important;
    -webkit-border-radius: 13px 3px 13px 13px !important;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.md-container .markdown-body {
    padding: 10px;
    font-family: 'Jua', 'Nanum Gothic', Helvetica, Apple SD Gothic Neo, sans-serif;
    .p {
        font-family: 'Jua', 'Nanum Gothic', Helvetica, Apple SD Gothic Neo, sans-serif;
    }
}

@media screen and (max-width: 360px) {
    .md-container {
        width: 258px;
    }
}
</style>

