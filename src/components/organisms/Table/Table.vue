<template>
	<div class="app-table-wrapper">
		<div v-if="!data.length" class="">
			<div class="app-table__no-data">
				<img src="@/assets/icons/no-data.svg" alt="" />
				<app-text tag="p" weight="bold" size="xlg" class="mt-6 max-w-6xl text-center"
					>Тут пусто</app-text
				>
			</div>
		</div>
		<table v-else class="app-table">
			<thead class="table__head">
				<tr>
					<th v-for="(col, index) in columns" :key="index" class="table__th">
						{{ col.title }}
					</th>
					<th class="table__th"></th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(row, index) in data"
					:key="index"
					class="table__body-tr"
					@click="$emit('onRowClick', row.id)"
				>
					<td v-for="(col, key) in columns" :key="key" class="table__td">
						{{ col.render(row) }}
					</td>
					<td class="table__td">
						<div class="flex items-center justify-end">
							<button class="mr-4" @click.stop="$emit('onEdit')">
								<img src="@/assets/icons/edit.svg" alt="" />
							</button>
							<button @click.stop="$emit('onDelete', row.id)">
								<img src="@/assets/icons/delete.svg" alt="" />
							</button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import "@/components/organisms/Table/Table.scss";
import AppText from "@/components/atoms/Text/Text.vue";

export default {
	name: "AppTable",
	components: { AppText },
	props: {
		columns: {
			type: Array,
			default: () => [],
		},
		data: {
			type: Array,
			default: () => [],
		},
	},
	emits: ["onDelete", "onEdit", "onRowClick"],
};
</script>
