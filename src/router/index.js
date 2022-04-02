import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/**
 {
      path: '/lexer',
      name: '词法分析器',
      component: () => import('../components/Lexer.vue'),
  },
 */
const routes = [
    {
        path: '',
        redirect: '/book/search'
    },
    {
        path: '/login',
        name: '登录页',
        component: () => import('../components/Login.vue'),
    },
    {
        path: '/register',
        name: '注册页',
        component: () => import('../components/Register.vue'),
    },
    {
        path: '/book',
        redirect: '/book/search'
    },
    {
        path: '/book/search',
        component: () => import('../components/book/Search.vue')
    },
    {
        path: '/book/:id',
        component: () => import('../components/book/Detail.vue')
    },
    {
        path: '/user',
        name: '用户页',
        component: () => import('../components/user/UserCenter.vue'),
    },
    {
        path: '/user/borrowing',
        component: () => import('../components/user/Borrowing.vue')
    },
    {
        path: '/user/borrowing/:id',
        component: () => import('../components/user/BorrowingDetail.vue')
    },
    {
        path: '/user/borrowing/history',
        component: () => import('../components/user/BorrowingHistory.vue')
    },
    {
        path: '/user/reservation',
        component: () => import('../components/user/Reservation.vue')
    },
    {
        path: '/user/reservation/:id',
        component: () => import('../components/user/ReservationDetail.vue')
    }
]
 
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
  