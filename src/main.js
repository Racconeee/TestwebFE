import './assets/main.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';

import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
	components,
	directives,
	// 추가 설정이 필요하다면 여기 추가
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(vuetify);

app.mount('#app');
