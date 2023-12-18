import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

import Welcome from './pages/Welcome.vue';
import Home from './pages/Home.vue';
import News from './pages/News.vue';
import About from './pages/About.vue';
import Learn from './pages/Learn.vue';

const routes: RouteRecordRaw[]= [
    {
        path: "/",
        component: Welcome,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/news",
        component: News,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/learn",
        component: Learn,
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})