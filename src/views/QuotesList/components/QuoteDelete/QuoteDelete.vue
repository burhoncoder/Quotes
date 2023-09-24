<template>
	<app-modal :is-open="isOpen" @on-close="handleClose">
		<app-text tag="h4" size="4" weight="bold" class-name="text-center mb-6">
			Вы уверены что хотите удалить
		</app-text>
		<div class="flex items-center justify-center">
			<app-button variant="outlined" size="md" class-name="mr-2" @click="handleClose"
				>Отменить</app-button
			>
			<app-button variant="primary" size="md" @click="handleDelete">Удалить</app-button>
		</div>
	</app-modal>
</template>

<script>
import AppModal from "@/components/organisms/Modal/Modal.vue";
import AppText from "@/components/atoms/Text/Text.vue";
import AppButton from "@/components/atoms/Button/Button.vue";
import { mapMutations } from "vuex";

export default {
	name: "QuoteDelete",
	components: { AppButton, AppText, AppModal },
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		},
		quoteId: {
			type: Number,
			default: null,
		},
	},
	emits: ["onClose"],
	methods: {
		...mapMutations({
			deleteQuote: "quoteModule/delete",
		}),

		handleDelete() {
			this.deleteQuote(this.$props.quoteId);
			this.handleClose();
		},

		handleClose() {
			this.$emit("onClose");
		},
	},
};
</script>
