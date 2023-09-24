<template>
	<button
		class="btn"
		:class="[`btn_variant-${variant}`, `btn_size-${size}`, className]"
		:type="type"
	>
		<slot />
	</button>
</template>

<script>
import "@/components/atoms/Button/Button.scss";

export default {
	name: "AppButton",
	props: {
		variant: {
			type: String,
			default: "primary",
		},
		size: {
			type: String,
			default: "md",
		},
		className: {
			type: String,
			default: "",
		},
		type: String,
	},
};
</script>
