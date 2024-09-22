import { defineCustomElement } from 'vue';
import App from './App.ce.vue'

const App2 = defineCustomElement(App);
customElements.define('app-2', App2);
