import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello/Hello'
import Education from '@/components/Education/Education'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/education',
    name: 'education',
    component: Education
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '*',
    redirect: '/education'
  }]
})
