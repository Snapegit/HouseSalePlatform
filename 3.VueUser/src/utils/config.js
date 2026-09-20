const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
			menuList:[
				{
					name: '房源信息管理',
					icon: 'icon-common22',
					child:[
						{
							name:'房源信息',
							url:'/index/fangyuanxinxiList'
						},
					]
				},
				{
					name: '新闻资讯管理',
					icon: 'icon-common28',
					child:[
						{
							name:'资讯信息',
							url:'/index/newsList'
						},
					]
				},
			]
        }
    },
    getProjectName(){
        return {
            projectName: "基于SpringBoot房屋买卖平台的设计与实现"
        } 
    }
}
export default config
