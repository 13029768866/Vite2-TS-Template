# `vue-cli3.0`初始化模板

为了防止项目初始化的一些重复性配置，在这提供一份基于`vue-cli3.0`的脚手架，每一个配置文件都有详细的注释，更方便新手阅读和理解，目录结构和项目功能也会随着学习不断优化与完善。

## 快速开始

我这里使用的`npm`作为包管理工具

```
git clone git@github.com:13029768866/vue-cli3.0-template.git
cd vue-cli-template
npm install
npm run start
```

# 项目依赖

- axios`](https://github.com/axios/axios):基于`Promise`的`http`客户端，用于浏览器和`node.js`
- [`qs`](https://github.com/ljharb/qs):支持解析嵌套的`querystring`。通俗来讲就是可以将以`key1=val1&key2=val2&...`格式的字符串转换为对象格式`{key1:val1,key2:val2,...}` 
- [`elemente ui`](http://element-cn.eleme.io/#/zh-CN/component/installation):基于`Vue 2.0`的桌面端组件库
- [`dayjs`](https://github.com/iamkun/dayjs): 一个轻量的日期处理库，用法和`moment.js`类似
- `vue`+`vuex`+`vue-router`全家桶

