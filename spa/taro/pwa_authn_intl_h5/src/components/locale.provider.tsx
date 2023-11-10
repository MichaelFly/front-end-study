import { useMemo } from 'react';
import {
  IntlShape,
  RawIntlProvider,
  createIntl,
  createIntlCache,
} from 'react-intl';
import { isString } from '../utils/fn';
import ko from './lang/locales/ko-KR/index.json';
import zh from './lang/locales/zh-CN/index.json';

let intlFn: IntlShape;

function formatMessages(msg) {
  const keys = Object.keys(msg || {});
  const key = keys[0];
  if (!key) {
    console.debug('no intl cnf');
    return {};
  }
  const message = msg[key];
  if (isString(message)) return msg;
  return keys.reduce((acc, k) => {
    acc[k] = msg[k].message;
    return acc;
  }, {});
}

function getLang(locale: string) {
  if (locale === 'zh-CN') {
    return formatMessages(zh);
  }
  if (locale === 'ko-KR') {
    return formatMessages(ko);
  }
  return formatMessages(zh);
}

function WithLocaleProvider({ children }) {
  const locale = process.env.TARO_APP_LANG || 'zh-CN';
  const messages = useMemo(() => {
    return getLang(locale);
  }, [locale]);

  intlFn = useMemo(() => {
    if (!locale || !messages) return undefined as any;
    const cache = createIntlCache();
    return createIntl(
      {
        locale,
        messages,
      },
      cache,
    );
  }, [locale, messages]);

  return <RawIntlProvider value={intlFn}>{children}</RawIntlProvider>;
}

export { intlFn };

export default WithLocaleProvider;
