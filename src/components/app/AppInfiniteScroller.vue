<template>
	<v-infinite-scroll height="400" @load="load">
		<template v-for="(item, index) in items" :key="item">
			<div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
				Item #{{ item }}
			</div>
		</template>
		<template v-slot:empty>
			<v-alert type="warning">No more items!</v-alert>
		</template>
	</v-infinite-scroll>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 50 }, (k, v) => v + 1));

const load = ({ done }) => {
	setTimeout(() => {
		done('empty'); // 'empty' 또는 'more'를 사용하여 상태를 설정
	}, 1000);
};
</script>

<style scoped>
/* 스타일을 추가할 수 있습니다 */
</style>
