import Vue from 'vue';
import Router from 'vue-router';
import BaseHome from '@/components/BaseHome';
import BaseAbout from '@/components/BaseAbout';
import BaseContact from '@/components/BaseContact';
import JavaScriptComponent from '@/components/JavaScriptComponent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'base-home',
      component: BaseHome,
    },
    {
      path: '/about',
      name: 'base-about',
      component: BaseAbout,
    },
    {
      path: '/contact',
      name: 'base-contact',
      component: BaseContact,
    },
    {
      path: '/javascript',
      name: 'component-js',
      component: JavaScriptComponent,
    },
  ],
});
