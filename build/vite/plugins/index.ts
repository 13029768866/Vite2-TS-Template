import type { Plugin } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

/* 创建插件配置项 */
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  console.log(viteEnv, isBuild);
  const vitePlugins: (Plugin | Plugin[])[] = [vue(), vueJsx()];
  return vitePlugins;
}
