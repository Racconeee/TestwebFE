<template>
	<div>
		<v-container fluid>
			<v-row dense>
				<v-col v-for="(test, index) in Tests" :key="index" cols="12" md="4">
					<v-card
						:title="`Test : ${test.title}`"
						:subtitle="`Subtitle for Content ${test.view}`"
						:text="12"
					></v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script setup>
import { useTestStore } from '@/store/TestStore';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const TestStore = useTestStore();
const { loading, error, loadTests } = TestStore;
const { Tests } = storeToRefs(TestStore);

onMounted(async () => {
	try {
		await loadTests();
	} catch (error) {
		console.error('Failed to load users:', error);
	}
});
</script>
