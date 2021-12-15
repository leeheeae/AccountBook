import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Login from '../views/auth/Login.vue';
import Join from '../views/auth/Join.vue';
import firstSetting from '../views/setting/firstSetting.vue';

const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/join',
		name: 'Join',
		component: Join,
	},
	{
		path: '/first',
		name: 'first',
		component: firstSetting,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
