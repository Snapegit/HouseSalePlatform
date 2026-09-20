import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views'
import home from '../views/pages/home.vue'
import login from '../views/pages/login.vue'
import newsList from '@/views/pages/news/list'
import yonghuList from '@/views/pages/yonghu/list'
import yonghuDetail from '@/views/pages/yonghu/formModel'
import yonghuAdd from '@/views/pages/yonghu/formAdd'
import yonghuRegister from '@/views/pages/yonghu/register'
import yonghuCenter from '@/views/pages/yonghu/center'
import fangwuleixingList from '@/views/pages/fangwuleixing/list'
import fangwuleixingDetail from '@/views/pages/fangwuleixing/formModel'
import fangwuleixingAdd from '@/views/pages/fangwuleixing/formAdd'
import fangyuanxinxiList from '@/views/pages/fangyuanxinxi/list'
import fangyuanxinxiDetail from '@/views/pages/fangyuanxinxi/formModel'
import fangyuanxinxiAdd from '@/views/pages/fangyuanxinxi/formAdd'
import storeupList from '@/views/pages/storeup/list'
import yuyuegoufangList from '@/views/pages/yuyuegoufang/list'
import yuyuegoufangDetail from '@/views/pages/yuyuegoufang/formModel'
import yuyuegoufangAdd from '@/views/pages/yuyuegoufang/formAdd'
import goumaifangziList from '@/views/pages/goumaifangzi/list'
import goumaifangziDetail from '@/views/pages/goumaifangzi/formModel'
import goumaifangziAdd from '@/views/pages/goumaifangzi/formAdd'

const routes = [{
		path: '/',
		redirect: '/index/home'
	},
	{
		path: '/index',
		component: index,
		children: [{
			path: 'home',
			component: home
		}
		, {
			path: 'newsList',
			component: newsList
		}
		, {
			path: 'yonghuList',
			component: yonghuList
		}, {
			path: 'yonghuDetail',
			component: yonghuDetail
		}, {
			path: 'yonghuAdd',
			component: yonghuAdd
		}
		, {
			path: 'yonghuCenter',
			component: yonghuCenter
		}
		, {
			path: 'fangwuleixingList',
			component: fangwuleixingList
		}, {
			path: 'fangwuleixingDetail',
			component: fangwuleixingDetail
		}, {
			path: 'fangwuleixingAdd',
			component: fangwuleixingAdd
		}
		, {
			path: 'fangyuanxinxiList',
			component: fangyuanxinxiList
		}, {
			path: 'fangyuanxinxiDetail',
			component: fangyuanxinxiDetail
		}, {
			path: 'fangyuanxinxiAdd',
			component: fangyuanxinxiAdd
		}
		, {
			path: 'storeupList',
			component: storeupList
		}
		, {
			path: 'yuyuegoufangList',
			component: yuyuegoufangList
		}, {
			path: 'yuyuegoufangDetail',
			component: yuyuegoufangDetail
		}, {
			path: 'yuyuegoufangAdd',
			component: yuyuegoufangAdd
		}
		, {
			path: 'goumaifangziList',
			component: goumaifangziList
		}, {
			path: 'goumaifangziDetail',
			component: goumaifangziDetail
		}, {
			path: 'goumaifangziAdd',
			component: goumaifangziAdd
		}
		]
	},
	{
		path: '/login',
		component: login
	}
	,{
		path: '/yonghuRegister',
		component: yonghuRegister
	}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
