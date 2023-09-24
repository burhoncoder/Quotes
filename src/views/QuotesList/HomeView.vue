<template>
	<div class="flex items-center justify-between">
		<app-text tag="h2" size="2" weight="bold">Список цитат</app-text>
		<app-button variant="primary" size="lg" @click="handleFormOpen">Создать</app-button>
	</div>

	<app-table
		:columns="columns"
		:data="formattedQuotes"
		@on-delete="handleDeleteModalOpen"
		@on-edit="handleUpdate"
		@on-row-click="handleRowClick"
	/>

	<quote-delete
		:is-open="deleteModalState"
		:quote-id="selectedItemId"
		@on-close="handleDeleteModalClose"
	/>

	<quote-modal :is-open="formState" :quote-id="selectedItemId" @on-close="handleFormClose" />
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

import AppButton from "@/components/atoms/Button/Button.vue";
import AppText from "@/components/atoms/Text/Text.vue";
import AppTable from "@/components/organisms/Table/Table.vue";
import QuoteDelete from "@/views/QuotesList/components/QuoteDelete/QuoteDelete.vue";
import QuoteModal from "@/views/QuotesList/components/QuoteModal/QuoteModal.vue";

export default {
	name: "HomeView",
	components: { QuoteModal, QuoteDelete, AppTable, AppText, AppButton },
	data() {
		return {
			columns: [
				{ title: "Автор", render: (row) => row.author },
				{ title: "Создано", render: (row) => row.createdAt },
			],
			deleteModalState: false,
			selectedItemId: null,
			formState: false,
		};
	},

	computed: {
		...mapGetters({
			formattedQuotes: "quoteModule/formattedQuotes",
		}),
	},

	methods: {
		...mapMutations({
			deleteQuote: "quoteModule/delete",
		}),
		handleRowClick(id) {
			this.$router.push(`/quotes/${id}`);
		},

		handleDeleteModalOpen(id) {
			this.selectedItemId = id;
			this.deleteModalState = true;
		},
		handleDeleteModalClose() {
			this.selectedItemId = null;
			this.deleteModalState = false;
		},

		handleUpdate(id) {
			this.selectedItemId = id;
			this.handleFormOpen();
		},
		handleFormOpen() {
			this.formState = true;
		},
		handleFormClose() {
			this.selectedItemId = null;
			this.formState = false;
		},
	},
};
</script>
