# zhiman-design

[![NPM version](https://img.shields.io/npm/v/zhiman-design.svg?style=flat)](https://npmjs.org/package/zhiman-design)
[![NPM downloads](http://img.shields.io/npm/dm/zhiman-design.svg?style=flat)](https://npmjs.org/package/zhiman-design)
[![Build Status](https://img.shields.io/github/workflow/status/zhiman/zhiman-design/CI)](https://github.com/zhiman/zhiman-design/actions)
[![codecov](https://codecov.io/gh/zhiman/zhiman-design/branch/main/graph/badge.svg)](https://codecov.io/gh/zhiman/zhiman-design)

🚀 企业级 React 组件库，为开发者提供高质量的组件和最佳实践

[English](./README.en.md) | 简体中文

## ✨ 特性

- 🌈 提炼自企业级中后台产品的交互语言和视觉风格
- 📦 开箱即用的高质量 React 组件
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件  
- ⚡️ 支持按需加载，减小打包体积
- 🎨 深入每个细节的主题定制能力
- 🌍 国际化语言支持
- 📱 响应式设计，支持移动端
- 🎪 现代化的开发和构建工具链

## 📦 安装

```bash
# npm
npm install zhiman-design

# yarn
yarn add zhiman-design

# pnpm
pnpm add zhiman-design
```

## 🔨 使用

```jsx
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

### 按需引入

`zhiman-design` 默认支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入 `import { Button } from 'zhiman-design'` 就会有按需加载的效果。

## 🌍 国际化

`zhiman-design` 提供了数十种语言的国际化支持。详见[国际化文档](https://zhiman-design.github.io/docs/react/i18n)。

## 🔗 链接

- [官方文档](https://zhiman-design.github.io/)
- [更新日志](./CHANGELOG.md)
- [React 组件](https://zhiman-design.github.io/components/overview/)
- [设计规范](https://zhiman-design.github.io/docs/spec/introduce/)

## ⌨️ 本地开发

克隆到本地开发:

```bash
$ git clone git@github.com:zhiman/zhiman-design.git
$ cd zhiman-design
$ pnpm install
$ pnpm start
```

打开浏览器访问 http://localhost:8000

我们欢迎所有的贡献，请先阅读 [贡献指南](https://github.com/zhiman/zhiman-design/blob/main/.github/CONTRIBUTING.md)。

如果你希望参与贡献，请查看 [开发指南](https://github.com/zhiman/zhiman-design/wiki/Development) 并关注 [项目看板](https://github.com/zhiman/zhiman-design/projects)。

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html)，更好的问题更容易获得帮助。

## 🤝 参与贡献

我们非常欢迎你的贡献，你可以通过以下方式和我们一起共建:

- 通过 [Issue](https://github.com/zhiman/zhiman-design/issues) 报告 bug 或进行咨询
- 提交 [Pull Request](https://github.com/zhiman/zhiman-design/pulls) 改进代码
- 完善我们的[文档](https://github.com/zhiman/zhiman-design/tree/main/docs)
- 参与我们的[讨论](https://github.com/zhiman/zhiman-design/discussions)

## 📄 License

MIT

## 🙋‍♂️ 社区互助

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。

通过 GitHub Discussions 提问时，建议使用 `Q&A` 标签。

1. [GitHub Discussions](https://github.com/zhiman/zhiman-design/discussions)
2. [GitHub Issues](https://github.com/zhiman/zhiman-design/issues)（报告 bug）
3. [Discussions 历史讨论](https://github.com/zhiman/zhiman-design/discussions)（查看历史讨论）
