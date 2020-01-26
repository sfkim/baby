<script>
import { mapGetters } from 'vuex';
import VueMarkdown from 'vue-markdown'

export default {
  name: 'Chat',
  components: {
    VueMarkdown
  },
  props: {
  },
  data () {
    return {
      userMsg: '# H1 string  \n  ## h2 Heading  \n  ### h3 Heading  \n  ## Horizontal Rules \n # H1 string  \n  ## h2 Heading  \n  ### h3 Heading  \n  ## Horizontal Rules \n # H1 string  \n  ## h2 Heading  \n  ### h3 Heading  \n  ## Horizontal Rules \n'
    }
  },
  computed: {
    ...mapGetters([
      'inputMessage'
    ])
  }
}
</script>

<template>
  <div>
    <div class='message-container'>
        <div class='user-profile'></div>
        <div class='md-container-right'>
            <vue-markdown>표준 키가 궁금해</vue-markdown>
        </div>
    </div>
    <div class='message-container'>
        <div class='popo-profile'></div>
        <div class='md-container'>
            <vue-markdown>{{userMsg}}</vue-markdown>
        </div>
    </div>
    <div class='message-container'>
        <div class='user-profile'></div>
        <div class='md-container-right'>
            <vue-markdown>표준 키가 궁금해</vue-markdown>
        </div>
    </div>
    <div class='message-container'>
        <div class='popo-profile'></div>
        <div class='md-container'>
            <vue-markdown>{{userMsg}}</vue-markdown>
        </div>
    </div>
    <div class='message-container'>
        <div class='user-profile'></div>
        <div class='md-container-right'>
            <vue-markdown>표준 키가 궁금해</vue-markdown>
        </div>
    </div>
  </div>
</template>

<style>
.message-container {
    min-height: 50px;
    max-height: 500px;
    width: 100%;
    padding-top: 10px;
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
    width: 320px;
    min-height: 50px;
    max-height: 500px;
    margin-left: 75px;
    margin-bottom: 15px;
    overflow: scroll;
    background-color: rgb(224, 224, 224);
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
    width: 200px;
    min-height: 50px;
    max-height: 500px;
    word-break: break-word;
    text-align: right;
    padding: 8px !important;
    margin-left: 120px;
    margin-bottom: 15px;
    overflow: scroll;
    background-color: rgb(224, 224, 224);
    border-radius: 13px 3px 13px 13px !important;
    -moz-border-radius: 13px 3px 13px 13px !important;
    -webkit-border-radius: 13px 3px 13px 13px !important;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>

