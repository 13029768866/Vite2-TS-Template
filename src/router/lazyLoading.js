/*
*   路由懒加载函数
* */
export default dir => () => import(`views/${dir}`);

