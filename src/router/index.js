import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PopularityView from '@/views/PopularityView.vue';
import RecentView from '@/views/RecentView.vue';
import InfoView from '@/views/InfoView.vue';
import ContractView from '@/views/ContractView.vue';
import AdminHomeView from '@/views/admin/AdminHomeView.vue';
import CreateTestView from '@/views/admin/CreateTestView.vue';

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
		path: '/info',
		name: 'Info',
		component: InfoView,
	},
	{
		path: '/contract',
		name: 'Contract',
		component: ContractView,
	},
	{
		path: '/admin/home',
		name: 'AdminHome',
		component: AdminHomeView,

		meta: { requiresHeader: false, requiresFooter: false },
	},
	{
		path: '/admin/createTest',
		name: 'CreateTest',
		component: CreateTestView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
