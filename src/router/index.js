import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

// master
import Barang from '../views/master/barang/index.vue'
import Barang_Mutasi from '../views/master/form.vue'

// penjualan
import POS from '../views/penjualan/pos/index.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/master/barang',
    name: "Barang",
    component : Barang
  },
  {
    path: '/master/barang/:id',
    name: "Mutasi Barang",
    component : Barang_Mutasi
  },
  {
    path: '/penjualan/pos',
    name: "Point of Sales",
    component : POS
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
