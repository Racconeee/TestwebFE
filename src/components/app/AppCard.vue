<template>
	<v-card
		:title="`Test : ${item.title}`"
		:subtitle="`Subtitle for Content ${item.view}`"
		:text="12"
		class="custom-card"
	></v-card>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
});
</script>

<style scoped>
.custom-card {
	height: 100%; /* 카드의 높이를 부모의 높이로 설정 */
	box-sizing: border-box; /* padding과 border를 포함하여 높이 계산 */
}
</style>
