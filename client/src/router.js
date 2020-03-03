import Vue from 'vue'
import router from 'vue-router'
import Home from './components/Home.vue'
import MyInfo from './components/MyInfo.vue'
import Chat from './components/Chat.vue'
import Wiki from './components/Wiki.vue'
import Setting from './components/Setting.vue'


Vue.use (router);

export default new router({
	mode: 'history',
	routes: [
		{path: '/', component: Home},
		{path: '/MyInfo', component: MyInfo},
		{path: '/Chat', component: Chat},
		{path: '/Wiki', component: Wiki},
		{path: '/Setting', component: Setting}
	],
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})