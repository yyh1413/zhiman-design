# Zhiman Design

一个现代化的 React 组件库，基于 Tailwind CSS 构建。

## 安装

```bash
npm install zhiman-design
# 或
yarn add zhiman-design
# 或
pnpm add zhiman-design
```

## 使用

### 1. 引入样式文件

**重要：** 在使用组件之前，必须先引入样式文件！

```tsx
// 在你的应用入口文件（如 App.tsx 或 main.tsx）中引入
import 'zhiman-design/dist/styles.css';
// 或者如果你使用 Tailwind CSS，可以引入原始文件
import 'zhiman-design/tailwind.css';
```


## 样式问题排查

如果组件样式不生效，请检查：

1. **是否引入了样式文件**：确保在应用入口引入了 `dist/styles.css`
2. **Tailwind CSS 配置**：确保你的 `tailwind.config.js` 包含了组件库的文件路径
3. **CSS 优先级**：检查是否有其他样式覆盖了组件样式

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 构建文档
pnpm docs:build
```

## 许可证

MIT
