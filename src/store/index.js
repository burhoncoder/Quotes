import { createStore } from "vuex";

import { quoteModule } from "@/store/quoteModule";

export default createStore({
	modules: {
		quoteModule,
	},
});
