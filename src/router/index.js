import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/QuotesList/HomeView.vue";
import QuotesSingle from "@/views/QuotesSingle/QuotesSingle.vue";

const routes = [
	{
		path: "/quotes/:id",
		name: "quotes-single",
		component: QuotesSingle,
	},
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
