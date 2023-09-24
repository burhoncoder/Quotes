<template>
	<div v-if="isOpen" class="modal">
		<div class="modal__overlay" @click="$emit('onClose')"></div>
		<div class="modal__content">
			<slot />
		</div>
	</div>
</template>

<script>
import "@/components/organisms/Modal/Modal.scss";

export default {
	name: "AppModal",
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["onClose"],
};
</script>
