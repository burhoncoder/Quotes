<template>
	<app-modal :is-open="isOpen" @on-close="handleClose">
		<quote-form :default-values="getQuote" @on-cancel="handleClose" @on-submit="modifyQuote" />
	</app-modal>
</template>

<script>
import { mapMutations } from "vuex";

import QuoteForm from "@/views/QuotesList/form/QuoteForm.vue";
import AppModal from "@/components/organisms/Modal/Modal.vue";

export default {
	name: "QuoteModal",
	components: {
		AppModal,
		QuoteForm,
	},
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
	computed: {
		getQuote() {
			return this.$store.getters["quoteModule/getQuote"](this.$props.quoteId);
		},
	},
	methods: {
		...mapMutations({
			addQuote: "quoteModule/add",
			updateQuote: "quoteModule/updateQuote",
		}),

		handleClose() {
			this.$emit("onClose");
		},

		modifyQuote(quote) {
			if (this.$props.quoteId) this.updateQuote({ ...this.getQuote, ...quote });
			else this.addQuote(quote);

			this.handleClose();
		},
	},
};
</script>
