import { useTestStore } from '@/store/TestStore';

export function useTest() {
	const TestStore = useTestStore();

	return {
		Tests: TestStore.tests,
		loading: TestStore.loading,
		error: TestStore.error,
		loaditems: TestStore.loaditems,
		additem: TestStore.additem,
	};
}
