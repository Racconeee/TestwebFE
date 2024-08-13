<template>
	<v-app>
		<TheHeader />
		<v-container fluid>
			<AppInfiniteScroller :load-more="loadMoreTests" />
		</v-container>
		<TheFooter />
	</v-app>
</template>

<script setup>
import AppInfiniteScroller from '@/components/app/AppInfiniteScroller.vue';

import TheHeader from '@/layouts/TheHeader.vue';
import TheFooter from '@/layouts/TheFooter.vue';
import { useTestStore } from '@/store/TestStore';
import { storeToRefs } from 'pinia';

const TestStore = useTestStore();
const { Tests, hasMore } = storeToRefs(TestStore);

const loadMoreTests = async () => {
	if (!hasMore.value) return []; // 데이터가 더 이상 없으면 빈 배열 반환

	try {
		await TestStore.loadTests();
		return Tests.value; // 로드한 데이터 반환
	} catch (error) {
		console.error('loadMoreTests Failed:', error);
		return []; // 에러 발생 시 빈 배열 반환
	}
};
</script>
