<template>
	<header class="header">
		<app-text
			tag="h1"
			weight="bold"
			size="4"
			class-name="text-white sm:text-3 md:text-2 xl:text-1"
		>
			Цитаты
		</app-text>
	</header>
</template>

<script>
import AppText from "@/components/atoms/Text/Text.vue";

export default {
	name: "AppHeader",
	components: { AppText },
};
</script>

<style>
@import "Header.scss";
</style>
