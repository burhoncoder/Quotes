<template>
	<div class="mb-4 flex items-center justify-between">
		<app-text tag="h2" size="5" weight="bold" class-name="sm:text-4 md:text-3 lg:text-2"
			>Список цитат</app-text
		>
		<app-button variant="primary" size="lg" @click="handleFormOpen">Создать</app-button>
	</div>

	<app-input
		v-model="searchText"
		placeholder="Поиск по автору или тексту"
		outer-class="mb-2"
		:required="true"
	/>

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
import { mapMutations } from "vuex";

import AppButton from "@/components/atoms/Button/Button.vue";
import AppText from "@/components/atoms/Text/Text.vue";
import AppTable from "@/components/organisms/Table/Table.vue";
import QuoteDelete from "@/views/QuotesList/components/QuoteDelete/QuoteDelete.vue";
import QuoteModal from "@/views/QuotesList/components/QuoteModal/QuoteModal.vue";
import AppInput from "@/components/molecules/Input/Input.vue";

export default {
	name: "HomeView",
	components: { AppInput, QuoteModal, QuoteDelete, AppTable, AppText, AppButton },
	data() {
		return {
			columns: [
				{ title: "Автор", render: (row) => row.author },
				{ title: "Создано", render: (row) => row.createdAt },
			],
			deleteModalState: false,
			selectedItemId: null,
			formState: false,
			searchText: "",
		};
	},

	computed: {
		formattedQuotes() {
			return this.$store.getters["quoteModule/formattedQuotes"](this.searchText);
		},
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
