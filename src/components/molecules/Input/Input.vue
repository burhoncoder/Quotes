<template>
	<div :class="['control', outerClass]">
		<app-text v-if="label" tag="p" size="sm" class-name="mb-2" weight="semibold">{{
			label
		}}</app-text>

		<div class="input__container">
			<component
				:is="tag"
				type="text"
				:required="required"
				:placeholder="placeholder"
				class="input__field input__field_lg input__field_outlined"
				:value="modelValue"
				@keypress="checkLetter($event)"
				@input="updateValue"
			/>
		</div>
	</div>
</template>

<script>
import AppText from "@/components/atoms/Text/Text.vue";

import "@/components/molecules/Input/Input.scss";

export default {
	name: "AppInput",
	components: { AppText },
	props: {
		tag: {
			type: String,
			default: "input",
		},
		onlyLetter: {
			type: Boolean,
			default: false,
		},
		outerClass: {
			type: String,
			default: "",
		},
		placeholder: {
			type: String,
			default: "",
		},
		label: {
			type: String,
			default: "",
		},
		required: {
			type: Boolean,
			default: false,
		},
		modelValue: [String, Number],
	},
	emits: ["update:modelValue"],

	methods: {
		checkLetter(event) {
			let char = String.fromCharCode(event.keyCode);
			if (!/^[A-Za-z]+$/.test(char) && this.$props.onlyLetter) {
				event.preventDefault();
			}
		},

		updateValue(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>
