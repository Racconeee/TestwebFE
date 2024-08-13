<template>
	<v-infinite-scroll class="scroll-container" @load="handleLoad">
		<v-row dense>
			<v-col v-for="(item, index) in items" :key="index" cols="12" md="4">
				<AppCard :item="item" />
			</v-col>
		</v-row>
		<template v-slot:empty>
			<v-alert type="warning">No more items!</v-alert>
		</template>
	</v-infinite-scroll>
</template>

<script setup>
import { ref } from 'vue';
import AppCard from '@/components/app/AppCard.vue';

const props = defineProps({
	loadMore: Function,
});

const items = ref([]);

const handleLoad = async ({ done }) => {
	try {
		const newItems = await props.loadMore();
		if (newItems.length) {
			items.value.push(...newItems);
			done('more');
		} else {
			done('empty');
		}
	} catch (error) {
		console.error('Failed to load more items:', error);
		done('empty'); // 에러 발생 시 더 이상 로드하지 않음
	}
};
</script>

<style scoped>
.scroll-container {
	height: 70vh; /* 전체 화면의 70% 높이로 설정 */
	overflow-y: auto; /* 세로 스크롤이 가능하도록 설정 */
	overflow-x: hidden; /* 가로 스크롤 방지 */
}
</style>
