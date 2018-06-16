import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import Page01 from '../pages/page01.vue'

Vue.use(Router)

const routes = [{
        path: "/",
        component: IndexPage
    },
    {
        path: "/page01",
        component: Page01
    }
]

const router = new Router({
    mode: "history",
    routes
})

export default router;