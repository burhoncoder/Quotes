<template>
	<div :class="['control', outerClass]">
		<app-text v-if="label" tag="p" size="sm" class-name="mb-2" weight="semibold">{{
			label
		}}</app-text>

		<div class="input__container">
			<input
				type="text"
				:required="required"
				:placeholder="placeholder"
				class="input__field input__field_lg input__field_outlined"
				:value="modelValue"
				@input="updateValue"
			/>
		</div>
	</div>
</template>

<script>
import AppText from "@/components/atoms/Text/Text.vue";

import "@/components/molecules/Input/Input.scss";
import "@/components/molecules/MultiInput/MultiInput.scss";

export default {
	name: "MultiInput",
	components: { AppText },
	props: {
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
		updateValue(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>
