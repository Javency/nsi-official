import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import aboutusPage from '../pages/aboutusPage.vue'
import InformationPage from '../pages/InformationPage.vue'
import eventPage from "../pages/eventPage.vue"
import researchPage from '../pages/researchPage.vue'
import consultingPage from '../pages/consulting.vue'
import lotusPage from '../pages/lotusPage.vue'

import newestList from '../components/information/newList.vue'
import original from '../components/information/original.vue'
import visitschool from '../components/information/visitSchool.vue'
import policy from '../components/information/policy.vue'
import detailnews from '../components/information/newsDetail.vue'
import interview from '../components/information/interview.vue'

import eventDetail from '../components/event/eventDetail.vue'
import periodical from '../components/research/periodical.vue'

Vue.use(Router)

const routes = [{
    path: "/",
    component: IndexPage
}, {
    path: "/news",
    redirect: "/news/newestArticle",
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
        },
        {
            path: "interview",
            component: interview
        }
    ]
}, {
    path: "/news/detailnews/:id",
    name: "detailNews",
    component: detailnews
}, {
    path: "/event",
    component: eventPage
}, {
    path: "/event/detail",
    name: "eventDetail",
    component: eventDetail
}, {
    path: "/about",
    component: aboutusPage
}, {
    path: "/research",
    component: researchPage,
    redirect: '/research/periodical',
    children: [{
        path: 'periodical',
        component: periodical
    }]
}, {
    path: "/consulting",
    component: consultingPage,
}, {
    path: "/lotus",
    component: lotusPage
}]

const router = new Router({
    // mode: "history",
    routes
})

export default router;