<script>
import MarkdownItVue from 'markdown-it-vue'
import '../../node_modules/markdown-it-vue/dist/markdown-it-vue.css'

import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'MyInfo',
  components: {
    MarkdownItVue
  },
  data () {
    return {
      currentMonth: 0
    }
  },
  props: {
    msg: String
  },
  mounted () {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.getContents();
  },
  methods: {
    handleResize() {
      const clientWidth = document.documentElement.clientWidth;
      let middleText = document.getElementsByClassName('middle-text');
      middleText[0].style.width = ((clientWidth - 90) + 'px');
    },
    getContents() {
      // calculate days
      this.calculateCurrentMonth();
      // get current month information
      this.getCurrentMonthInformation(this.currentMonth);
    },
    changeCurrentMonth(changeMonth) {
      this.currentMonth += changeMonth;
      if(this.currentMonth<0) this.currentMonth = 0;
      if(this.currentMonth>12) this.currentMonth = 12;
      this.getCurrentMonthInformation(this.currentMonth);
    },
    calculateCurrentMonth() {
      const today = new Date();
      const birth = this.userInformation.birth;
      const year = parseInt(birth/10000);
      const month = parseInt((birth%10000)/100);
      const day = birth%100;
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const secondDate = new Date(year, month-1, day);
      const diffDays = Math.round(Math.abs((today - secondDate) / oneDay));
      let currentMonth = parseInt(diffDays / 30)
      if ((diffDays/3)%10 > 5) currentMonth = currentMonth + 1;
      this.currentMonth = currentMonth;
    },
    ...mapMutations ([
      'updateCurrentPage',
      'getCurrentMonthInformation'
    ])
  },
  computed: {
    ...mapGetters([
      'userInformation',
      'monthInformation'
    ])
  }
}
</script>

<template>
  <div>
    <div class='time-container'>
      <div class='left-button' @click="changeCurrentMonth((-1))"></div>
      <div class='middle-text'>{{currentMonth}}개월</div>
      <div class='right-button' @click="changeCurrentMonth(1)"></div>
    </div>
    <div class='my-baby-md-container'>
      <div v-for="item in monthInformation" :key="item.index">
        <markdown-it-vue :content=item></markdown-it-vue>
      </div>
    </div>
  </div>
</template>

<style>
.time-container {
  width: 100%;
  height: 45px;
  background-color: rgb(197, 218, 205);
}

.left-button {
  width: 45px;
  height: 45px;
  background: url('../assets/icons/my-baby/icons8-chevron-left-96.png') no-repeat center;
  background-size: 40px 40px;
  float: left;
}

.middle-text {
  height: 45px;
  float: left;
  text-align: center;
  line-height: 45px;
}

.right-button {
  width: 45px;
  height: 45px;
  background: url('../assets/icons/my-baby/icons8-chevron-right-96.png') no-repeat center;
  background-size: 40px 40px;
  float: left;
}
.time-container:after {
	content: '';
	clear: both;
	display: block;
}
.my-baby-md-container {
  width: 90%;
  overflow: scroll;
  padding: 0 20px 0 20px;
}

.my-baby-md-container .markdown-body {
    margin-top: 20px;

}
</style>
