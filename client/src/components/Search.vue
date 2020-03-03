<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'Search',
  data () {
    return {
      userMsg: ''
    }
  },
  props: {
  },
  methods: {
    keyDownChat (e) {
      this.setInputMessage(e.target.value);
      e.target.value = ''
      this.updateCurrentPage('chat');
      this.$router.push('/Chat');
    },
    ...mapMutations ([
      'updateCurrentPage',
      'setInputMessage'
    ]),
  },
  computed: {
    ...mapGetters([
      'currentPage',
      'inputMessage'
    ])
  }
}
</script>

<template>
  <div class="search-bar">
    <div id="search-box">
      <input type="search" placeholder="" @keydown.enter="keyDownChat"/>
    </div>
  </div>
</template>

<style>
.search-bar {
    width: 100%;
    height: 100%;
}

#search-box {
    height: 100%;
    padding-left: 10px;
}

#search-box input[type=search] {
	width: 28px;
	height: 30px;
	padding-left: 10px;
	color: transparent;
	cursor: pointer;
}

#search-box input[type=search]:focus {
	width: 320px;
	padding-left: 50px;
	color: #000;
	background-color: #fff;
	cursor: auto;
}

#search-box input:-moz-placeholder,
#search-box input::-webkit-input-placeholder {
	color: transparent;
}

input[type=search] {
    outline: none;
	-webkit-appearance: textfield;
	-webkit-box-sizing: content-box;
	font-family: inherit;
	font-size: 100%;

	background: #ededed url('../assets/icons/icons8-search-64.png') no-repeat 9px center;
	background-size: 25px;
	border: solid 1px #ccc;
	padding: 9px 10px 9px 32px;

	-webkit-border-radius: 10em;
	-moz-border-radius: 10em;
	border-radius: 10em;

	-webkit-transition: all .5s;
	-moz-transition: all .5s;
	transition: all .5s;
}

input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
	display: none;
}

input[type=search]:focus {
	width: 130px;
	background-color: #fff;
	border-color: #66CC75;

	-webkit-box-shadow: 0 0 5px rgba(109,207,246,.5);
	-moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
	box-shadow: 0 0 5px rgba(109,207,246,.5);
}

input:-moz-placeholder,
input::-webkit-input-placeholder {
	color: #999;
}
</style>
