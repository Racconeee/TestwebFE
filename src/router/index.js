import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PopularityView from '@/views/PopularityView.vue';
import RecentView from '@/views/RecentView.vue';
import InfoView from '@/views/InfoView.vue';
import ContractView from '@/views/ContractView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/popularity',
		name: 'Popularity',
		component: PopularityView,
	},
	{
		path: '/recent',
		name: 'Recent',
		component: RecentView,
	},
	{
		path: '/nfo',
		name: 'Info',
		component: InfoView,
	},
	{
		path: '/ontract',
		name: 'Contract',
		component: ContractView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
