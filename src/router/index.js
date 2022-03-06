
import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieDescription from "@/pages/MovieDescription";
import Movies from "@/pages/Movies";
import HomeView from "@/pages/HomeView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movies/:id',
    name:'movie-description',
    component:MovieDescription
  },
  {
    path: '/movies',
    name:'movies',
    component:Movies
  },
]

const router = new VueRouter({
  routes
})

export default router