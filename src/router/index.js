import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Shetuan from '@/components/shetuan'
import Application from '@/components/application'
import Check from '@/components/check'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
		{
			path:"/shetuan",
			name:'shetuan',
			component:Shetuan
		},
		{
			path:"/application",
			name:'application',
			component:Application
		},
		{
			path:"/check",
			name:'check',
			component:Check
		}
  ]
})
