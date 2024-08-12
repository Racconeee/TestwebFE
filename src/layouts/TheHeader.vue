<template>
	<v-container class="custom-header bg-green-lighten-1">
		<v-row class="align-center justify-center" no-gutters>
			<!-- 중앙 정렬된 텍스트 -->
			<v-col class="text-center" cols="12">
				<router-link to="/" class="header-text">
					<button>Vue 게시판</button>
				</router-link>
			</v-col>
			<!-- 버튼들 -->
			<v-col class="text-center" cols="12">
				<v-btn
					class="mx-2 custom-btn"
					color="primary"
					rounded="xl"
					variant="text"
					:to="{ name: 'Popularity' }"
				>
					인기순
				</v-btn>
				<v-btn
					class="mx-2 custom-btn"
					color="primary"
					rounded="xl"
					variant="text"
					:to="{ name: 'Recent' }"
				>
					최신순
				</v-btn>
				<v-btn
					class="mx-2 custom-btn"
					color="primary"
					rounded="xl"
					variant="text"
					:to="{ name: 'Info' }"
				>
					Info
				</v-btn>
				<v-btn
					class="mx-2 custom-btn"
					color="primary"
					rounded="xl"
					variant="text"
					:to="{ name: 'Contract' }"
				>
					Contact Us
				</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goPage = () => {
	router.push('/posts/create');
	router.push({
		name: 'Home',
	});
};
</script>

<style scoped>
/* 헤더의 전체 스타일을 설정합니다 */
.custom-header {
	height: 80px; /* 헤더의 높이 */
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 16px; /* 좌우 패딩 */
}

/* 헤더 텍스트 스타일을 조정합니다 */
.header-text {
	font-size: 1.25rem; /* 텍스트 크기 */
	color: #333; /* 텍스트 색상 */
	font-weight: 500; /* 폰트 두께 */
	margin-bottom: 12px; /* 버튼과의 간격 */
	text-decoration: none; /* 링크의 기본 밑줄 제거 */
}

/* 버튼 스타일을 조정합니다 */
.custom-btn {
	font-size: 0.875rem; /* 버튼 글자 크기 */
	padding: 8px 16px; /* 버튼 패딩 */
	transition:
		background-color 0.3s ease,
		transform 0.3s ease; /* 호버 효과 */
}

/* 버튼의 호버 상태 */
.custom-btn:hover {
	background-color: rgba(0, 0, 0, 0.1); /* 호버 시 배경색 */
	transform: translateY(-2px); /* 호버 시 버튼을 살짝 위로 이동 */
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 호버 시 그림자 효과 */
}

/* 반응형 디자인을 위한 미디어 쿼리 */
@media (max-width: 600px) {
	.custom-header {
		height: auto; /* 화면 크기가 작은 경우 높이를 자동으로 조정 */
		padding: 8px 16px; /* 작은 화면에서는 패딩을 줄임 */
	}
	.header-text {
		font-size: 1rem; /* 작은 화면에서 텍스트 크기 줄임 */
		margin-bottom: 8px; /* 작은 화면에서 간격 줄임 */
	}
	.custom-btn {
		font-size: 0.75rem; /* 작은 화면에서 버튼 글자 크기 줄임 */
		padding: 6px 12px; /* 버튼 패딩 줄임 */
	}
}
</style>
