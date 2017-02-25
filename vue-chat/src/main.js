// polyfill
import 'babel-polyfill';

import Vue from 'vue';
import App from './App';
import store from './store';

Vue.config.devtools = true;

new Vue({
    el: 'div.myApp',
    components: { App },
    store: store
});