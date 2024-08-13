<template>
	<div>
		<div>ContractView 데이터 받아보자</div>
		<button @click="emitEvent">Bitton</button>
		<div>{{ title }}</div>
		<div>{{ user }}</div>
		<div>ContractView 구역 끝</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';
import { defineProps } from 'vue';
import { watch } from 'vue';

const props = defineProps({
	title: String,
	user: String,
});

const emit = defineEmits(['updateTitle']);

const emitEvent = () => {
	emit('updateTitle', '변해버린 제목');
};
watch(
	() => props.title,
	newTitle => {
		title.value = newTitle;
	},
);
const title = ref(props.title);
const user = props.user;
</script>

<style></style>
