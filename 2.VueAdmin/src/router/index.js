	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import fangwuleixing from '@/views/fangwuleixing/list'
	import news from '@/views/news/list'
	import discussfangyuanxinxi from '@/views/discussfangyuanxinxi/list'
	import fangyuanxinxi from '@/views/fangyuanxinxi/list'
	import yonghu from '@/views/yonghu/list'
	import yuyuegoufang from '@/views/yuyuegoufang/list'
	import goumaifangzi from '@/views/goumaifangzi/list'
	import storeup from '@/views/storeup/list'
	import config from '@/views/config/list'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/fangwuleixing',
			name: '房屋类型',
			component: fangwuleixing
		}
		,{
			path: '/news',
			name: '资讯信息',
			component: news
		}
		,{
			path: '/discussfangyuanxinxi',
			name: '房源信息评论',
			component: discussfangyuanxinxi
		}
		,{
			path: '/fangyuanxinxi',
			name: '房源信息',
			component: fangyuanxinxi
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/yuyuegoufang',
			name: '预约购房',
			component: yuyuegoufang
		}
		,{
			path: '/goumaifangzi',
			name: '购买房子',
			component: goumaifangzi
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
