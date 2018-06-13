// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import Layout from './components/Layout.vue'
import Indexpage from './routers/IndexPage.vue';
import Page01 from './routers/page01.vue'

Vue.config.productionTip = false

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Indexpage
    }, {
        path: '/page01',
        component: Page01
    }]
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { Layout, Indexpage },
    template: '<Layout/>'
})