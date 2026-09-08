import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Admissions from '@/views/Admissions.vue'

const router = createRouter({

history:createWebHistory(),

routes:[

{

path:'/',

name:'home',

component:Home

},

{

path:'/admissions',

name:'activity2',

component:Admissions 

},

]

})

export default router
