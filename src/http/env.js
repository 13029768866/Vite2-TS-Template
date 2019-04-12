// 根据开发环境不同，配置不同域名
const dev = {   // 开发环境
    baseURL: 'http://xxx.dev'
};
const test = {  // 测试环境
    baseURL: 'http://xxx.test'
};
const pro = {   // 生产环境
    baseURL: 'http://xxx.pro'
};

const envConfig = {
    dev,
    test,
    pro
};
export default envConfig[process.env.MODE].baseURL;
