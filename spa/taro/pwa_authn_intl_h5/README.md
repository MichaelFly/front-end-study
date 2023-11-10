## 版本支持
> 浏览器对 **web-authn FIDO2** 和 **pwa** 的支持
- Iphone+Safari(全系)
  注⚠️:尚未发现不支持
- Android+Chrome(last)
  注⚠️: 目前除谷歌浏览器外可能三星自带浏览器 `Samsung Internet` 也是支持的(`尚未测试`)
  >  **Android** : 13
## 插件
-  [taro](https://docs.taro.zone/)
-  [nutui](https://nutui.jd.com/h5/react/2x/#/zh-CN/component/button)
-  [taro-iconfont-cli](https://github.com/iconfont-cli/taro-iconfont-cli )   
     需在[iconfont.json](iconfont.json)中维护在线地址后运行
     ```shell
      npm run build:iconfont
      ```
-  [tailwindcss](https://tailwindcss.com)  
    推荐的一个快捷查询网站:https://tailwindcomponents.com/cheatsheet/
-  [formatjs](https://formatjs.io/) 
## 示例
### 国际化使用
- 标签使用，适用于组件内部jsx
  ```
  <FormattedMessage defaultMessage="内容" description="描述" />
  ```
- hook使用，适用于组件内部函数或组件属性
  ```
  const { formatMessage } = useIntl();
  formatMessage({defaultMessage:'内容',description:'描述'})
  ```
- 函数式使用，适用于组件外部  
  ```
  intlFn.formatMessage({ defaultMessage: '内容', description: '描述' })
  ```
## 生产环境构建
- 中文
```
npm run build:h5:zh
```
- 韩文
```
npm run build:h5:ko
```
