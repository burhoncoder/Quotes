<template>
	<teleport to="body">
		<div v-if="isOpen" class="modal">
			<div class="modal__overlay" @click="$emit('onClose')"></div>
			<div class="modal__content">
				<slot />
			</div>
		</div>
	</teleport>
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
	watch: {
		isOpen(newIsOpen) {
			if (newIsOpen) document.body.style.overflow = "hidden";
			else document.body.style.overflow = "initial";
		},
	},
};
</script>
