<template>
	<header class="header">
		<app-text tag="h1" weight="bold" size="1" class-name="text-white"> Цитаты </app-text>
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
