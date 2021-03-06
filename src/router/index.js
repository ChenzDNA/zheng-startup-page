import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '../components/Main.vue'
import Collection from '../components/center-components/collection/Collection.vue';
import Note from '../components/center-components/note/Note.vue';
import Todo from '../components/center-components/todo/Todo.vue';
import MobileMain from '../components/MobileMain.vue';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: Main,
    children: [
      {
        path: 'collection',
        component: Collection,
      },
      {
        path: 'note',
        component: Note,
      },
      {
        path: 'todo',
        component: Todo,
      },
      {
        path: '',
        redirect: 'collection',
      },
      {
        path: '*',
        redirect: 'collection',
      }
    ],
  },
  {
    path: '/',
    component: MobileMain,
  },
  {
    path: '*',
    redirect: '/',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
