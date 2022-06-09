import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/Product.vue'
import Category from "@/views/Category";
import search from "@/views/search";
import Cart from "@/views/Cart"

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: search
    },
    {
        path: '/:category_slug/:product_slug',
        name: 'Product',
        component: Product
    },
    {
        path: '/:category_slug',
        name: 'Category',
        component: Category
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
