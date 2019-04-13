import lazyLoading from './lazyLoading';


/* 
*  renderNav: 是否渲染路由名字到面包屑导航，默认true
*  hidden: 是否不渲染到导航菜单，默认false	
*  需要注意:	通过lazyLoading配置的是views中目录名
 */
const routes = [
	//	路由模板
	{
		path: '/',
		name: 'home',
		hidden: true,
		component: lazyLoading('home'),
		meta: {title:'首页', renderNav: false},
		children: []
	},
	// 配置错误路由跳转404页面
	{
		path: '/404',
		name: '404',
		hidden: true,
		component: lazyLoading('notFound/404')
	}
]