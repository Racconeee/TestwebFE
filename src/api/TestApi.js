import axiosIntance from './axiosInstance';

export const getTestList = async () => {
	console.log('fetchUsers 실행');
	const response = await axiosIntance.get('/Test', {
		headers: {
			'Cache-Control': 'no-cache', // 캐시 무시
		},
	});

	return response.data;
};

export const createTest = async TestData => {
	console.log('createUser 실행');

	const response = await axiosIntance.post('/additem', TestData);
	return response.data;
};
