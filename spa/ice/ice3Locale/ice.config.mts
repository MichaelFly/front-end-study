import { defineConfig } from '@ice/app';
import i18n from '@ice/plugin-i18n';

// The project config, see https://v3.ice.work/docs/guide/basic/config
const minify = process.env.NODE_ENV === 'production' ? 'swc' : false;
export default defineConfig(() => ({
  // Set your configs here.
  plugins: [
    i18n({
      locales: ['zh-CN', 'en-US', 'ko-KR'],
      defaultLocale: 'zh-CN',
      autoRedirect: true,
    }),
  ],
  minify,
  server: {
    onDemand: true,
    format: 'esm',
  },
}));
