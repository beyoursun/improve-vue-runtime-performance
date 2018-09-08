import Vue from 'vue';
import VueRouter from 'vue-router';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import Demo3 from './components/Demo3';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/demo-1',
      name: 'Demo1',
      component: Demo1,
    },
    {
      path: '/demo-2',
      name: 'Demo2',
      component: Demo2,
    },
    {
      path: '/demo-3',
      name: 'Demo3',
      component: Demo3,
    },
  ],
});
