<template>
	<div
		v-for="[key, value] in Object.entries(getQuote)"
		:key="key"
		class="mb-4 flex items-center justify-between"
	>
		<app-text tag="p" size="md" weight="bold" class-name="text-primary-600 sm:text-lg w-[50%]">
			{{ key }}:
		</app-text>
		<app-text tag="p" size="md" weight="medium" class-name=" sm:text-lg w-[50%]">{{
			value
		}}</app-text>
	</div>
</template>

<script>
import AppText from "@/components/atoms/Text/Text.vue";

import "@/views/QuotesSingle/QuotesSingle.scss";

export default {
	name: "QuotesSingle",
	components: { AppText },
	computed: {
		getQuote() {
			return this.$store.getters["quoteModule/getQuote"](this.$route.params.id);
		},
	},
};
</script>
