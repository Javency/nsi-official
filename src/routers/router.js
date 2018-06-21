import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import InformationPage from '../pages/InformationPage.vue'
import newestList from '../components/information/newList.vue'
import original from '../components/information/original.vue'
import visitschool from '../components/information/visitSchool.vue'
import policy from '../components/information/policy.vue'

Vue.use(Router)

const routes = [{
        path: "/",
        component: IndexPage
    },
    {
        path: "/InformationCenter",
        redirect: "/InformationCenter/newestArticle",
        component: InformationPage,
        children: [{
                path: "newestArticle",
                component: newestList
            },
            {
                path: "original",
                component: original
            },
            {
                path: "visitSchool",
                component: visitschool
            },
            {
                path: "policy",
                component: policy
            }
        ]
    }
]

const router = new Router({
    mode: "history",
    routes
})

export default router;