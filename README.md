# Vue3 Base Template

## 特性

- ⚡️ [Vite](https://cn.vitejs.dev/) - 构建工具
- 🖖 [Vue 3](https://cn.vuejs.org/) - 渐进式框架
- 🚦 [Vue Router](https://router.vuejs.org/zh) - 路由管理器
- 📦 [Pinia](https://pinia.vuejs.org/zh) - 状态管理系统（轻量级）
- 🔗 [Axios](https://axios-http.com/zh/) - 一个基于 promise 的网络请求库，可以用于浏览器和 node.js
- 🧰 [Husky](https://typicode.github.io/husky/#/) + [Lint-Staged](https://github.com/okonet/lint-staged) - Git Hook 工具
- 🛡️ [EditorConfig](http://editorconfig.org/) + [ESLint](http://eslint.cn/) + [Prettier](https://prettier.cn/) + [Stylelint](https://stylelint.cn/) - 代码规范
- 🔨 [Commitizen](https://cz-git.qbb.sh/zh) + [Commitlint](https://commitlint.js.org/) - 提交规范

## TS 相关配置

- `types/node`
- `@vue/tsconfig`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`

### ts.config.json

```json
{
  "extends": "@vue/tsconfig/tsconfig.web.json",
  "compilerOptions": {
    "paths": {
      //	别名类型映射
      "@/*": ["./src/*"]
    },
    "target": "ESNext", //  指定ECMA目标版本
    "useDefineForClassFields": true, //  class不需要初始化字段
    "module": "ESNext", //  指定生成哪个模块
    "moduleResolution": "Node", //  模块的处理方式
    "strict": true, // 	是否开启严格模式
    "jsx": "preserve", //	支持jsx
    "resolveJsonModule": true, // 	支持导入模块
    "isolatedModules": true, //	每个文件作为单独的模块
    "esModuleInterop": true, //	可以通过import的方式导入CommonJS模块
    "lib": ["ESNext", "DOM"], //	编译过程中需要引入的库文件
    "skipLibCheck": true, //	忽略声明文件（xxx.d.ts）类型检查
    "noEmit": true //	不生成输出文件
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "exclude": ["node_modules", "tests/server/**/*.ts", "dist", "**/*.js"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

```bash
pnpm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

## ESLint

- `eslint`
- `eslint-plugin-vue`
- `vue-eslint-parser`

```bash
pnpm i eslint eslint-plugin-vue vue-eslint-parser -D
```

## Prettier

- `prettier`
- `eslint-config-prettier` ：关闭 ESLint 中与 Prettier 中会发生冲突的规则
- `eslint-plugin-prettier` ：将 Prettier 的规则设置到 ESLint 的规则中

```bash
pnpm i prettier eslint-config-prettier eslint-plugin-prettier -D
```

## StyleLint

- `stylelint`
- `stylelint-config-prettier`
- `stylelint-config-recommended`
- `stylelint-config-recommended-vue`（**依赖需要 15 版本以上的 stylelint，其他依赖暂时不支持 15 版本！**）
- `stylelint-config-standard`
- `stylelint-order`

**安装`postcss-html`,上面部分包依赖此插件**

```bash
pnpm i stylelint stylelint-config-prettier stylelint-config-recommended stylelint-config-recommended-vue stylelint-order -D
```

## Postcss

- `postcss`

- `postcss-html`

- `postcss-less`

## Git 提交规范

- `husky`

- `lint-staged`

  ```json
  // package.json中添加
  "lint-staged": {
      "*.{js,jsx,ts,tsx}": [
        "eslint --fix",
        "prettier --write"
      ],
      "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": [
        "prettier --write--parser json"
      ],
      "package.json": [
        "prettier --write"
      ],
      "*.vue": [
        "eslint --fix",
        "prettier --write",
        "stylelint --fix"
      ],
      "*.{scss,less,styl,html}": [
        "stylelint --fix",
        "prettier --write"
      ],
      "*.md": [
        "prettier --write"
      ]
    },
  ```

- `commitizen`全局安装，调用 cz 指令

- `cz-git`

  ```json
  // package.json指定适配器
  "config": {
      "commitizen": {
        "path": "node_modules/cz-git"
      }
    }
  ```

- `@commitlint/cli`

- `@commitlint/config-conventional`
