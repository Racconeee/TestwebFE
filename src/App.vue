<template>
	<v-app>
		<TheHeader />
		<router-view />
		<TheFooter />
	</v-app>
</template>

<script setup>
import TheHeader from './layouts/TheHeader.vue';
import TheFooter from './layouts/TheFooter.vue';
</script>

<style scoped>
/* 전체 레이아웃 스타일 설정 */
.v-application {
	display: flex;
	flex-direction: column;
	min-height: 100vh; /* 전체 화면을 채우도록 설정 */
}

v-main {
	flex: 1; /* 메인 콘텐츠가 가능한 공간을 채우도록 설정 */
}
</style>
