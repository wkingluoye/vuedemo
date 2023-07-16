<script>
import {createRouter, createWebHashHistory} from 'vue-router'


import Element from './components/ContentElement.vue'
import Question from './components/ContentQuestion.vue'
import Damage from './components/ContentDamage.vue'


const routes = [
  {
    path: '/',
    name: 'Element',
    component: Element,
  },
  {
    path: '/question',
    name: 'Question',
    component: Question
  }  ,
  {
    path: '/damage',
    name: 'Damage',
    component: Damage
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path !== '/question' && to.path !== '/damage' && to.path !== '/'){
    next({path: '/'})
  }else{
    next()
  }
})
export default router
</script>
