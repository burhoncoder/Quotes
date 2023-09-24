export const helpers = {
	compareStr(str1 = "", str2 = "") {
		const lower1 = str1.toLowerCase(),
			lower2 = str2.toLowerCase();
		return lower1.includes(lower2);
	},
};
