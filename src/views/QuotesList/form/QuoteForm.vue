<template>
	<form @submit="handleSubmit">
		<app-input
			v-model="author"
			label="Автор"
			placeholder="Введите автора"
			outer-class="mb-4"
			:required="true"
		/>
		<app-input
			v-model="genre"
			label="Жанр"
			placeholder="Введите жанр через запятой"
			outer-class="mb-4"
			:required="true"
		/>
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
			genre: this.$props.defaultValues.genre || "",
			text: this.$props.defaultValues.text || "",
		};
	},

	methods: {
		handleSubmit() {
			this.$emit("onSubmit", { text: this.text, author: this.author, genre: this.genre });
		},
	},
};
</script>
