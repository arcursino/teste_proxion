import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index.vue'
import Todos from '~/pages/todos.vue'
import Login from '~/components/login.vue'
import Material from '~/components/material.vue'

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  routes: [
    {path: '/', component: Index, name: 'index'},
    {path: '/login', component: Login, name: 'login'},
    {path: '/todos', component: Todos, name: 'todos'},
    {path: '/material', component: Material, name: 'material'}
  ]
}

export function createRouter (ctx) {
  return new Router(routerOptions)
}
