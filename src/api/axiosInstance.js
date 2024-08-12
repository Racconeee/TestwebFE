import axios from 'axios';

const axiosIntance = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL,
	timeout: 5000,
	headers: { 'Content-Type': 'application/json' },
});

axiosIntance.interceptors.request.use(
	config => {
		console.log('Request URL:', config); // 요청 URL 로그
		console.log(import.meta.env.VITE_APP_API_URL);

		console.log('axiosInstance 파일 실행 ');
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

export default axiosIntance;
