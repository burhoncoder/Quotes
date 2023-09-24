import { time } from "@/utils/time";

export const quoteModule = {
	namespaced: true,
	state: {
		quotes: [
			{
				id: time.getNow(),
				text: "Test",
				genre: "This is message",
				author: "Me",
				createdAt: time.getNow(),
				updatedAt: time.getNow(),
			},
		],
	},
	mutations: {
		delete(state, quoteId) {
			state.quotes = state.quotes.filter((item) => item.id !== quoteId);
		},
		add(state, quote) {
			console.log("INSIDE ADD");
			const newQuote = {
				id: time.getNow(),
				text: quote.text,
				genre: quote.genre,
				author: quote.author,
				createdAt: time.getNow(),
				updatedAt: time.getNow(),
			};
			state.quotes.push(newQuote);
		},
		updateQuote(state, quote) {
			console.log("INSIDE Update");
			const selectedItemIndex = state.quotes.findIndex((item) => item.id === quote.id);
			if (selectedItemIndex > -1) {
				state.quotes[selectedItemIndex] = {
					...quote,
					updatedAt: time.getNow(),
				};
			}
		},
	},
	getters: {
		formattedQuotes(state) {
			return state.quotes.map((item) => ({
				id: item.id,
				author: item.author,
				createdAt: time.format(item.createdAt),
			}));
		},
		getQuote(state) {
			return (id) => {
				const selectedQuote = state.quotes.find((item) => item.id === Number(id));
				return selectedQuote
					? {
							id: selectedQuote.id,
							text: selectedQuote.text,
							author: selectedQuote.author,
							genre: selectedQuote.genre,
							createdAt: time.format(selectedQuote.createdAt),
							updatedAt: time.format(selectedQuote.updatedAt),
					  }
					: {};
			};
		},
	},
};
