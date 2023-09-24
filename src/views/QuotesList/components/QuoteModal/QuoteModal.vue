<template>
	<app-modal :is-open="isOpen" @on-close="handleClose">
		<create-form @on-cancel="handleClose" @on-submit="modifyQuote" />
	</app-modal>
</template>

<script>
import CreateForm from "@/views/QuotesList/form/QuoteForm.vue";
import AppModal from "@/components/organisms/Modal/Modal.vue";
import { mapMutations } from "vuex";

export default {
	name: "QuoteModal",
	components: {
		AppModal,
		CreateForm,
	},
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["onClose"],
	methods: {
		...mapMutations({
			addQuote: "quoteModule/add",
		}),

		handleClose() {
			this.$emit("onClose");
		},

		modifyQuote(quote) {
			this.addQuote(quote);
			this.handleClose();
		},
	},
};
</script>
