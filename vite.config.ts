import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';

import { readEnvConfig } from './build/utils';
import { createVitePlugins } from './build/vite/plugins';

export default defineConfig(({ command, mode }) => {
  /* 获取环境配置start */
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = readEnvConfig(env);
  const { VITE_PORT, VITE_PUBLIC_PATH } = viteEnv;
  const isBuild = command === 'build';
  /* 获取环境配置end */
  return {
    root,
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    },
    server: {
      host: true,
      port: VITE_PORT,
    },
    plugins: createVitePlugins(viteEnv, isBuild),
    // optimizeDeps: {
    //   include: ['ant-design-vue/es/locale/zh_CN', 'moment/dist/locale/zh-cn'],
    // },
  };
});
