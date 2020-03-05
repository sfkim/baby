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
		{path: '/', name: 'Home', component: Home},
		{path: '/MyInfo', name: 'MyInfo', component: MyInfo},
		{path: '/Chat', name: 'Chat', component: Chat},
		{path: '/Wiki', name: 'Wiki', component: Wiki},
		{path: '/Setting', name: 'Setting', component: Setting}
	],
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y:0 }
	}
})