import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getTestList, createTest } from '@/api/TestApi';

export const useTestStore = defineStore('TestStore', () => {
	const Tests = ref([]); // 상태 관리: 테스트 항목 배열
	const loading = ref(false); // 로딩 상태
	const error = ref(null); // 오류 메시지
	const currentPage = ref(1); // 현재 페이지 상태 관리
	const itemsPerPage = ref(9); // 페이지당 항목 수
	const hasMore = ref(true); // 더 많은 데이터가 있는지 여부를 추적

	// 테스트 항목을 로드하는 함수
	const loadTests = async () => {
		if (!hasMore.value) return; // 더 이상 로드할 데이터가 없으면 종료

		loading.value = true;
		error.value = null;
		try {
			const data = await getTestList(currentPage.value, itemsPerPage.value);
			if (data.length > 0) {
				Tests.value.push(...data); // 새 데이터를 기존 데이터에 추가
				currentPage.value += 1; // 다음 페이지로 이동
			} else {
				hasMore.value = false; // 더 이상 데이터가 없으면 hasMore를 false로 설정
			}
		} catch (err) {
			error.value = err.message; // 오류 발생 시 오류 메시지 설정
		}
		loading.value = false; // 로딩 상태 종료
	};

	// 새로운 테스트 항목을 추가하는 함수
	const addTest = async TestData => {
		try {
			const newTest = await createTest(TestData);
			Tests.value.push(newTest); // 새 테스트 항목을 기존 데이터에 추가
		} catch (error) {
			error.value = error.message; // 오류 발생 시 오류 메시지 설정
		}
	};

	return {
		Tests,
		loading,
		error,
		currentPage,
		hasMore,
		loadTests,
		addTest,
	};
});
