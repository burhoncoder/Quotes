import { time } from "@/utils/time";
import { helpers } from "@/utils/helpers";

export const quoteModule = {
	namespaced: true,
	state: {
		quotes: [
			{
				id: time.getNow(),
				text: "Test",
				genres: "This is message",
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
			const newQuote = {
				id: time.getNow(),
				text: quote.text,
				genres: quote.genres,
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
			return (searchQuery) =>
				!searchQuery
					? state.quotes.map((item) => ({
							id: item.id,
							author: item.author,
							createdAt: time.format(item.createdAt),
					  }))
					: state.quotes
							.filter(
								(item) =>
									helpers.compareStr(item.text, searchQuery) ||
									helpers.compareStr(item.author || searchQuery)
							)
							.map((item) => ({
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
							genres: selectedQuote.genres,
							createdAt: time.format(selectedQuote.createdAt),
							updatedAt: time.format(selectedQuote.updatedAt),
					  }
					: {};
			};
		},
	},
};
