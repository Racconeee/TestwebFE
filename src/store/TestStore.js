import { defineStore } from 'pinia';
import { getTestList, createTest } from '@/api/TestApi';

export const useTestStore = defineStore('TestStore', {
	state: () => ({
		Tests: [],
		loading: false,
		error: null,
	}),
	actions: {
		async loadTests() {
			this.loading = true;
			this.error = null;
			try {
				this.Tests = await getTestList();
			} catch (error) {
				this.error = error;
			}
			this.loading = false;
		},
		async addTest(TestData) {
			try {
				const newTest = await createTest(TestData);
				this.Tests.push(newTest);
			} catch (error) {
				this.error = error;
			}
		},
	},
});
