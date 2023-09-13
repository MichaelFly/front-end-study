import { defineConfig } from '@ice/app';
import fusion from '@ice/plugin-fusion';
import request from "@ice/plugin-request";

// The project config, see https://v3.ice.work/docs/guide/basic/config
const minify = process.env.NODE_ENV === 'production' ? 'swc' : false;
export default defineConfig(() => ({
  // Set your configs here.
  minify,
  routes: {
    ignoreFiles: [
      "**/components/**", // 如果每个页面下有 components 目录存放当前页面的组件，可以通过添加此配置忽略被解析成路由组件
    ],
  },
  server: {
    onDemand: true,
    format: 'esm',
  },
  plugins: [
    request(),
    fusion({
      themePackage: '@alifd/theme-design-pro',
    }),
  ],
}));
