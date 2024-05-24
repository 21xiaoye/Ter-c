import { createRouter, createWebHashHistory } from 'vue-router';
import createGuard from './guard';

const ContactsView = () => import('../views/contacts/index.vue');
const HomeChatView = () => import('../views/chat/index.vue');
const LoginView = () => import('../views/login/index.vue');
const RegisterView = () => import('../views/register/index.vue');
const SetUpView = () => import('../views/setup/index.vue');
const ForGotPassWDView = () => import('../views/forgot/index.vue');
const TripartiteView = () => import('../views/login/tripartite/index.vue');


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
    },
    {
      path:'/chat',
      name:'chat',
      component: HomeChatView,
    },
    {
      path:'/login',
      name:'login',
      component: LoginView,
      meta: { hideSidebar: true } ,
    },
    {
      path:'/tripartite',
      name:'tripartite',
      component:TripartiteView,
      meta:{ hideSidebar: true }
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: ForGotPassWDView,
      meta: { hideSidebar: true } ,
    },
    {
      path:'/register',
      name:'register',
      component: RegisterView,
      meta: { hideSidebar: true } 
    },
    {
      path:'/set-up',
      name:'setup',
      component: SetUpView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/chat',
    }
  ],
});

createGuard(router);

export default router;