import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/QuotesList/HomeView.vue";
import QuotesSingle from "@/views/QuotesSingle/QuotesSingle.vue";
import NotFound from "@/views/NotFound/NotFound.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/quotes/:id",
		name: "quotes-single",
		component: QuotesSingle,
	},
	{
		path: "/:catchAll(.*)",
		redirect: "/404",
	},
	{
		path: "/404",
		name: "not-found",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
