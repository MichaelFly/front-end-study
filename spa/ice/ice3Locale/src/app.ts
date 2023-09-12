import { defineAppConfig } from 'ice';
// @ts-ignore
import { defineI18nConfig } from '@ice/plugin-i18n/types';

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({}));
export const i18nConfig = defineI18nConfig(() => ({
    // disabledCookie: true,
}));
