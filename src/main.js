// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout.vue'
import Index from './pages/IndexPage.vue'
import router from './routers/router'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { Layout, Index },
    template: '<Layout/>'
})