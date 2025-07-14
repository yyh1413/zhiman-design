# 快速开始

## 介绍

zhiman-design 是一个企业级 React 组件库，致力于提供高质量的组件和最佳实践，帮助开发者快速构建优秀的中后台产品。

## 特性

- 🌈 **企业级设计语言**：提炼自企业级中后台产品的交互语言和视觉风格
- 📦 **开箱即用**：丰富的组件和功能，满足绝大部分网站开发需求
- 🛡 **TypeScript**：使用 TypeScript 开发，提供完整的类型定义文件
- ⚡️ **按需加载**：支持 Tree Shaking，减小打包体积
- 🎨 **主题定制**：深入每个细节的主题定制能力
- 🌍 **国际化**：内建国际化方案，支持数十种语言

## 安装

### 使用 npm 或 yarn 安装

我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
# npm
npm install zhiman-design

# yarn  
yarn add zhiman-design

# pnpm
pnpm add zhiman-design
```

### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `zhiman`。

我们在 npm 发布包内的 `zhiman-design/dist` 目录下提供了：

- `zhiman-design.js`
- `zhiman-design.css`
- `zhiman-design.min.js` 
- `zhiman-design.min.css`

## 示例

```bash
import React from 'react';
import { Button, DatePicker } from 'zhiman-design';

const App = () => (
  <div>
    <Button type="primary">Primary Button</Button>
    <DatePicker placeholder="选择日期" />
  </div>
);

export default App;
```

## 按需加载

`zhiman-design` 的 JS 代码默认支持基于 ES modules 的 tree shaking。

如果你在开发环境的控制台看到下面的提示，那么你可能使用了 import 整个包的写法：

```
You are using a whole package of zhiman-design, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.
```

## TypeScript

`zhiman-design` 使用 TypeScript 进行书写并提供了完整的定义文件。（不要引用 @types/zhiman-design）

## 配置主题

参考 [定制主题](/docs/react/customize-theme) 文档。

## 国际化

参考 [国际化文档](/docs/react/i18n)。
