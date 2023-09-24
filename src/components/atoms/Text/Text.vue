<template>
	<component :is="tag" :class="[[sizes[size]], weights[weight], className]"><slot /></component>
</template>

<script>
export default {
	name: "AppText",
	props: {
		weight: {
			type: String,
			default: "regular",
		},

		size: {
			type: String,
			default: "1",
		},

		className: {
			type: String,
			default: "",
		},

		tag: {
			type: String,
			default: "h1",
		},
	},

	data() {
		return {
			sizes: {
				1: "text-1",
				2: "text-2",
				3: "text-3",
				4: "text-4",
				5: "text-5",
				6: "text-6",

				xlg: "text-xlg",
				lg: "text-lg",
				md: "text-md",
				sm: "text-sm",
				xsm: "text-xsm",
			},
			weights: {
				normal: "font-normal",
				medium: "font-medium",
				semibold: "font-semibold",
				bold: "font-bold",
			},
		};
	},
};
</script>

<style>
@import "Text.scss";
</style>
