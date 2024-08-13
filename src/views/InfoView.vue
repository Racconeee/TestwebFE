<template>
	<div>
		<div>231</div>
		<contract-view
			@updateTitle="ChangeTitleEvent"
			:title="Data.title"
			:user="Data.user"
		></contract-view>
	</div>
	<div>{{ Data.title }}</div>
</template>

<script setup>
import { ref } from 'vue';
import ContractView from './ContractView.vue';

const Data = ref({
	title: '제목',
	user: 'user1',
});

const ChangeTitleEvent = message => {
	Data.value.title = message;
	console.log(Data.value.title);
};
</script>

<style></style>
