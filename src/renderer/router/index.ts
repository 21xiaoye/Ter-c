import { createRouter,  createWebHashHistory} from 'vue-router'
import createGuard from './guard'

const HomeView = () => import(/* webpackChunkName: "Home" */ '../views/home/index.vue')
const HomeChatView = () => import(/* webpackChunkName: "Home" */ '../views/chat/index.vue')
const LoginView = () => import('../views/login/index.vue')
const RegisterView = () => import('../views/register/index.vue')
const SetUpView = () => import('../views/setup/index.vue')

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path:'/chat',
      name:'chat',
      component: HomeChatView
    },
    {
      path:'/login',
      name:'login',
      component:LoginView
    },
    {
      path:'/register',
      name:'register',
      component:RegisterView
    },
    {
      path:'/set-up',
      name:'setup',
      component:SetUpView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    }
  ],
})

createGuard(router)

export default router
