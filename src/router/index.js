import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import AddWaffle from '@/components/AddWaffle.vue'
import EditWaffle from '@/components/EditWaffle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/add-waffle',
    name: 'addWaffle',
    component: AddWaffle
  },
  {
    path: '/edit-waffle/:waffle_slug',
    name: 'editWaffle',
    component: EditWaffle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
