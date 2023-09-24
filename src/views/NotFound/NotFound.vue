<template>
	<div class="flex items-center justify-center">
		<div class="app-table__no-data">
			<img src="@/assets/icons/no-data.svg" alt="" />
			<app-text tag="p" weight="bold" size="xlg" class="mt-6 max-w-6xl text-center"
				>Страница не найдена</app-text
			>
		</div>
	</div>
</template>

<script>
import AppText from "@/components/atoms/Text/Text.vue";

export default {
	name: "NotFound",
	components: { AppText },
};
</script>
