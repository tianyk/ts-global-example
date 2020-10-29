### 问题描述

自定义了一个命名空间 `NS` 用于放一些类型定义。在编辑器里面和`tsc`编译时都能找到命名空间 `NS`，但是使用在 `ts-node` 运行时就找不到 `NS` 这个明明空间了。

- npm start: ts-node 运行
- npm run build: tsc build

```
$ npm start 

> ts-global@1.0.0 start /xxxx/ts-global
> npx ts-node ./index.ts

⨯ Unable to compile TypeScript:
index.ts:3:27 - error TS2503: Cannot find namespace 'NS'.

3 const cookie = config.get<NS.Config.Cookie>('cookie');
                            ~~

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! ts-global@1.0.0 start: `npx ts-node ./index.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the ts-global@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
```

