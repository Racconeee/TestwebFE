<template>
	<v-card>
		<v-layout>
			<v-navigation-drawer app>
				<v-list density="compact" nav>
					<v-list-item
						prepend-icon="mdi-view-dashboard"
						title="AdminHome"
						value="home"
						:to="{ name: 'AdminHome' }"
					></v-list-item>

					<v-list-item
						prepend-icon="mdi-forum"
						title="TestList"
						value="TestList"
					></v-list-item>

					<v-list-item
						prepend-icon="mdi-forum"
						title="CreateTest"
						value="CreateTest"
						:to="{ name: 'CreateTest' }"
					></v-list-item>

					<v-list-item
						prepend-icon="mdi-forum"
						title="UserQraph"
						value="UserQraph"
					></v-list-item>
				</v-list>
			</v-navigation-drawer>
			<v-main>
				<slot></slot>
			</v-main>
		</v-layout>
	</v-card>
</template>

<script setup></script>

<style></style>
