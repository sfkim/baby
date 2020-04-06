<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      monthlySummary: [
        {month: 0, movement: '팔다리를 구부 리고 있을 수도 있다.'},
        {month: 1, movement: '엎어놓으면 턱을 들고 머리를 좌우로 돌릴 수 있다.'},
        {month: 2, movement: '엎어 배를 받쳐 들어 올리면 머리를 몸과 수평이 되도록 들 수 있다.'},
        {month: 3, movement: '엎어 배를 받쳐 들어 올리면 머리를 몸 위치보다 위로 들 수 있다.'},
        {month: 4, movement: '다리를 펴고 있을 수 있다.'},
        {month: 5, movement: '바로 누운 자세에서 붙잡아 일으켜 앉히면 머리를 가눌 수 있다.'},
        {month: 6, movement: '앉혀 놓으면 혼자  앉아 있을 수 있다.'},
        {month: 7, movement: '배밀이를 하거나 네 발로 길 수 있다.'},
        {month: 8, movement: '세우면 다리를 뻗어 몸을 지탱할 수 있다.'},
        {month: 9, movement: '임시 자료'},
        {month: 10, movement: '임시 자료'},
        {month: 11, movement: '임시 자료'},
        {month: 12, movement: '혼자 일어설 수 있다. 혼자 걸을 수 있다.'}
      ]
    }
  },
  methods: {
    page(targetComponent, targetMonth) {

			this.$router.push(targetComponent).catch(err => {});
		},
		horizontalScroll(index) {
			let element = document.getElementById('monthly-development');
			let elementWidth = document.documentElement.clientWidth;
			element.scrollLeft = index * elementWidth;
		}
  },
  computed: {
    ...mapGetters([
      'monthInformation'
    ])
  }
}
</script>

<template>
  <div class='home_wrap'>
    <div id='monthly-development'>
      <ol id='month-container'>
        <li v-for='item in monthlySummary' :key='item.month' class ='month-wrap' @click='page("/MyInfo?month="+item.month)'>
					<article class='summary-wrap'>
						<h3 class='summary-head'>[운동]</h3>
						<p class='summary-content'>{{item.movement}}</p>
						<span class='wanna-detail'>이미지 클릭시 상세정보</span>
					</article>
        </li>
      </ol>
    </div>
    <section id='months'>
      <ol id='month-nav-container'>
        <li v-for='item in monthlySummary' :key='item.month' class='month-nav' tabindex='1' @click='horizontalScroll(item.month)'>
          <span class="month-nav-text">{{item.month}}개월</span>
        </li>
      </ol>
     </section>
  </div>
</template>

<style>
.home_wrap {
  width: 100%;
}
#monthly-development {
	overflow-x: scroll;
}
#month-container {
	display: flex;
	flex-direction: row;
	width: 1300%;
}
.month-wrap {
	width: 100%;
	margin: 10px 15px;
	height: 300px;
	position: relative;
	background-color: orange;
	border-radius: 5px;
}
#months {
	overflow-x: scroll;
	scroll-behavior: smooth;
}
.summary-wrap {
	position: relative;
	width: auto;
	height: 260px;
	margin: 20px;
	background-color: rgba(255, 255, 255, .7);
}
.summary-head {
	position: absolute;
	top: 10px;
	left: 5px;
}
.summary-content {
	font-family: sans-serif;
	font-size: 14px;
	position: absolute;
	top: 40px;
	left: 12px;
}
.wanna-detail {
	font-family: sans-serif;
	font-size: 10px;
	position: absolute;
	bottom: 4px;
	right: 3px;
}
#month-nav-container {
	display: flex;
	flex-direction: row;
	width: 910px;
	padding: 0 15px;
}
.month-nav {
  display: flex;
  align-items: center;
	width: 60px;
	height: 60px;
	background-color: gray;
	border-radius: 3px;
	margin-left: 15px;
	-webkit-filter: grayscale(100%);
}
.month-nav:nth-child(1) {
	margin-left: 0;
}
.month-wrap, .month-nav {
	background-size: 100% 100%;
	background-repeat: no-repeat;
}
.month-wrap:focus, .month-nav:focus {
	-webkit-filter: grayscale(0%);
}
.month-nav-text {
	width: 100%;
	text-align: center;
	font-size: 17px;
	color: white;
	background-color: rgba(0, 0, 0, .4);
	padding: 5px;
}
.month-nav:focus .month-nav-text{
	color: gold;
	background-color: rgba(0, 0, 128, .6);
}
.month-wrap:nth-child(1), .month-nav:nth-child(1) {
	background-image: url('https://images.unsplash.com/photo-1574706472790-f24ebe0510ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
}
.month-wrap:nth-child(2), .month-nav:nth-child(2) {
	background-image: url('https://images.unsplash.com/photo-1562887250-9a52d844ad30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80');
}
.month-wrap:nth-child(3), .month-nav:nth-child(3) {
	background-image: url('https://images.unsplash.com/photo-1527631120902-378417754324?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
}
.month-wrap:nth-child(4), .month-nav:nth-child(4) {
	background-image: url('https://images.unsplash.com/photo-1558542086-b116634c8dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
}
.month-wrap:nth-child(5), .month-nav:nth-child(5) {
	background-image: url('https://images.unsplash.com/flagged/photo-1558979238-2563de7c6ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1671&q=80');
}
.month-wrap:nth-child(6), .month-nav:nth-child(6) {
	background-image: url('https://images.unsplash.com/photo-1522505449726-e148c41c2a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
}
.month-wrap:nth-child(7), .month-nav:nth-child(7) {
	background-image: url('https://images.unsplash.com/photo-1508883006770-5e013e5e6f73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80');
}
.month-wrap:nth-child(8), .month-nav:nth-child(8) {
	background-image: url('https://images.unsplash.com/flagged/photo-1566954179465-6e83bc98abbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
}
.month-wrap:nth-child(9), .month-nav:nth-child(9) {
	background-image: url('https://images.unsplash.com/photo-1554694288-88babf9c6377?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
}
.month-wrap:nth-child(10), .month-nav:nth-child(10) {
	background-image: url('https://images.unsplash.com/photo-1486020425824-a3da4762c3ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=994&q=80');
}
.month-wrap:nth-child(11), .month-nav:nth-child(11) {
	background-image: url('https://images.unsplash.com/photo-1542128962-3c9547c919e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
}
.month-wrap:nth-child(12), .month-nav:nth-child(12) {
	background-image: url('https://images.unsplash.com/photo-1566513857791-2caec63bd9be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
}
.month-wrap:nth-child(13), .month-nav:nth-child(13) {
	background-image: url('https://images.unsplash.com/photo-1526864972308-bf02b0c2ab8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80');
}
</style>
