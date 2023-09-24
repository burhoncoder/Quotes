<template>
	<form @submit="handleSubmit">
		<app-input
			v-model="author"
			label="Автор"
			placeholder="Введите автора"
			outer-class="mb-4"
			:required="true"
			:only-letter="true"
		/>

		<app-input
			v-for="(_, index) in genres"
			:key="index"
			v-model="genres[index]"
			:label="`Жанр ${index + 1}`"
			placeholder="Введите жанр через запятой"
			outer-class="mb-2"
			:required="true"
			:only-letter="true"
		/>

		<div class="mb-4 flex items-center justify-start">
			<app-button
				v-if="hasGenres"
				variant="outlined"
				size="sm"
				type="button"
				class-name="mr-2"
				@click="handleRemoveGenre"
				>Убрать</app-button
			>
			<app-button variant="primary" size="sm" type="button" @click="handleAddGenre"
				>Добавить</app-button
			>
		</div>

		<app-input
			v-model="text"
			rows="20"
			tag="textarea"
			label="Текст"
			placeholder="Введите текст"
			:required="true"
			outer-class="mb-6"
		/>

		<div class="flex items-center justify-center">
			<app-button
				variant="outlined"
				size="md"
				class-name="mr-2"
				type="button"
				@click="$emit('onCancel')"
				>Отменить</app-button
			>
			<app-button variant="primary" size="md" type="submit">Сохранить</app-button>
		</div>
	</form>
</template>

<script>
import AppInput from "@/components/molecules/Input/Input.vue";
import AppButton from "@/components/atoms/Button/Button.vue";

export default {
	name: "QuoteForm",
	components: { AppButton, AppInput },
	props: {
		defaultValues: {
			type: Object,
			default: () => {
				return {};
			},
		},
	},
	emits: ["onCancel", "onSubmit"],
	data() {
		return {
			author: this.$props.defaultValues.author || "",
			genres: this.$props.defaultValues.genres || [""],
			text: this.$props.defaultValues.text || "",
		};
	},

	computed: {
		hasGenres() {
			return this.genres.length > 1;
		},
	},

	methods: {
		handleAddGenre() {
			this.genres.push("");
		},

		handleRemoveGenre() {
			this.genres.pop();
		},

		handleSubmit() {
			this.$emit("onSubmit", { text: this.text, author: this.author, genres: this.genres });
		},
	},
};
</script>
