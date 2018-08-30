import Vue from 'vue';
// import App from './component/App';
import App from './component/App.vue';

console.log('%c reload ', 'color: #0f0; background: #00f;');

const app = new Vue({
    el: '#app',
    render: h => h(App),
});

if (window['dev'] == undefined) window['dev'] = {};
Object.assign(window['dev'], {
    app,
});
