import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  /*  打包路径  */
  base: "./",
  /* 服务设置 */
  server: {
    port: 9527,
    open: true, // 自动打开浏览器
    cors: true, // 允许跨域
  },
  resolve: {
    /* 别名配置 */
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
