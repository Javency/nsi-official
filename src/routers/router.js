import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import InformationPage from '../pages/InformationPage.vue'

Vue.use(Router)

const routes = [{
        path: "/",
        component: IndexPage
    },
    {
        path: "/InformationCenter",
        component: InformationPage
    }
]

const router = new Router({
    mode: "history",
    routes
})

export default router;