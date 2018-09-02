import Vue from 'vue';
import VueRouter from 'vue-router';
import Demo1 from './components/Demo1';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/demo-1',
      name: 'Demo1',
      component: Demo1,
    },
  ],
});
