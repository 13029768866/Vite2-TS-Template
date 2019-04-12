import axiosInstance from './axios';
// qs: 将js对象转换为 key1=val1&key2=val2格式的工具
import qs from 'qs';

// 常用请求
/*
* 1、get: 列表
* 2、post_json:  新增/保存
* 3、post_form: 字段比较简单的保存
* 4、export: 表格导出
* 5、upload: 文件上传
* */
const ajax = {
    // 表单/搜索
    get (url) {
        return (params = {}) => {
            return axiosInstance.get(url,{params});
        }
    },
    // json / form
    post (url,reqType = 'json') {
        return (params = {}) => {
            if(reqType === 'form'){
                params = qs.stringify(params);
            }
            return axiosInstance.post(url,params);
        }
    },
    // 文件 / 图片上传
    upload () {

    }
};
export default  ajax;
