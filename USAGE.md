# Zhiman Design 使用指南

## 问题解决

如果你在使用组件库时遇到样式不生效的问题，请按照以下步骤操作：

### 1. 引入样式文件

**重要：** 在使用任何组件之前，必须先引入样式文件！

```tsx
// 在你的应用入口文件（如 App.tsx 或 main.tsx）中引入
import 'zhiman-design/dist/styles.css';
```

### 2. 使用组件

```tsx
import React from 'react';
import { Button, ThemeSwitcher } from 'zhiman-design';

function App() {
  return (
    <div>
      <ThemeSwitcher />
      <Button variant="default">Hello Zhiman Design!</Button>
      <Button variant="destructive">危险按钮</Button>
      <Button variant="outline">边框按钮</Button>
    </div>
  );
}

export default App;
```

### 3. 配置 Tailwind CSS（推荐）

如果你在消费项目中使用 Tailwind CSS，建议将组件库的配置合并到你的 `tailwind.config.js` 中：

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/zhiman-design/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // 可以覆盖组件库的主题配置
    }
  },
  plugins: []
};
```

## 样式问题排查

如果组件样式仍然不生效，请检查：

### 1. 样式文件是否正确引入

确保在你的应用入口文件中引入了样式文件：

```tsx
// ✅ 正确
import 'zhiman-design/dist/styles.css';

// ❌ 错误 - 没有引入样式文件
import { Button } from 'zhiman-design';
```

### 2. 构建工具配置

如果你使用 Vite、Webpack 或其他构建工具，确保它们能正确处理 CSS 文件：

#### Vite 配置
```js
// vite.config.js
export default {
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  }
}
```

#### Webpack 配置
```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }
}
```

### 3. CSS 优先级问题

检查是否有其他样式覆盖了组件样式：

```css
/* 如果有其他样式覆盖，可以增加优先级 */
.zhiman-button {
  background-color: hsl(var(--primary)) !important;
}
```

### 4. 主题变量

确保 CSS 变量正确定义：

```css
:root {
  --primary: 162 43% 40%;
  --primary-foreground: 210 40% 98%;
  /* 其他变量... */
}
```

## 开发调试

### 1. 检查生成的样式

在浏览器开发者工具中检查元素，确认样式是否正确应用：

```html
<button class="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90">
  Button
</button>
```

### 2. 检查 CSS 变量

在开发者工具的控制台中检查 CSS 变量：

```js
// 检查 CSS 变量是否正确设置
getComputedStyle(document.documentElement).getPropertyValue('--primary');
```

### 3. 网络请求

检查 `dist/styles.css` 文件是否正确加载：

```js
// 在开发者工具的 Network 标签中查看
// 应该能看到 styles.css 文件的请求
```

## 常见问题

### Q: 为什么样式文件这么大？

A: `dist/styles.css` 包含了完整的 Tailwind CSS 样式，这是正常的。在生产环境中，你可以：

1. 使用 PurgeCSS 移除未使用的样式
2. 只引入需要的组件样式
3. 使用 CDN 加载样式文件

### Q: 可以自定义主题吗？

A: 可以！你可以通过修改 CSS 变量来自定义主题：

```css
:root {
  --primary: 220 14% 96%; /* 自定义主色调 */
  --primary-foreground: 220 9% 46%;
}
```

### Q: 支持暗色模式吗？

A: 支持！组件库内置了暗色模式支持，会自动根据系统设置切换。

## 技术支持

如果按照以上步骤仍然无法解决问题，请：

1. 检查浏览器控制台是否有错误信息
2. 确认组件库版本是最新的
3. 在 GitHub Issues 中提交问题，并提供：
   - 复现步骤
   - 环境信息（Node.js 版本、构建工具等）
   - 错误截图或日志 