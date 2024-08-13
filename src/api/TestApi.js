import axiosIntance from './axiosInstance';

export const getTestList = async (currentPage, itemPerPage) => {
	console.log('fetchUsers 실행');
	const response = await axiosIntance.get(`/Test`, {
		params: {
			page: currentPage,
			limit: itemPerPage,
		},
		headers: {
			'Cache-Control': 'no-cache', // 캐시 무시
		},
	});
	console.log('response : ', response.data);
	console.log('response : ', response);

	return response.data;
};

export const createTest = async TestData => {
	console.log('createUser 실행');

	const response = await axiosIntance.post('/additem', TestData);
	return response.data;
};
