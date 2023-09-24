<template>
	<app-header />
	<div class="page">
		<div class="container">
			<slot />
		</div>
	</div>
</template>

<script>
import AppHeader from "@/components/organisms/Header/Header.vue";

export default {
	name: "AppLayout",
	components: { AppHeader },
};
</script>
