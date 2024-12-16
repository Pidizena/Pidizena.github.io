import {createRouter, createWebHashHistory, Router} from 'vue-router';
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/portfolio',
        name: 'About',
        component: Portfolio,
    },
];

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
