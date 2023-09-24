export const time = {
	format: (time) => {
		const date = new Date(time);
		const dayString = date.toLocaleDateString();
		const timeString = `${date.getHours()}:${date.getMinutes()}`;
		return `${dayString} ${timeString}`;
	},

	getNow() {
		return Date.now();
	},
};
