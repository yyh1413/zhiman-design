# 设计系统指南

欢迎使用 Zhiman Design 设计系统！本指南将帮助你快速上手并掌握我们的组件库。

## 快速开始

### 安装

```bash
npm install zhiman-design
# 或
yarn add zhiman-design
# 或
pnpm add zhiman-design
```

### 基础使用

```tsx
import React from 'react';
import { Button, ThemeSwitcher } from 'zhiman-design';

function App() {
  return (
    <div>
      <ThemeSwitcher />
      <Button>Hello Zhiman Design!</Button>
    </div>
  );
}

export default App;
```

## 主题系统 🎨

### 核心理念

Zhiman Design 的主题系统基于以下核心理念：

1. **一致性** - 统一的色彩语义和使用规范
2. **灵活性** - 支持多主题切换和自定义扩展
3. **可访问性** - 良好的对比度和无障碍支持
4. **持久化** - 自动保存用户偏好设置

### 主题架构

#### CSS 变量系统
```css
:root {
  /* 主色调 */
  --primary: 162 43% 40%;
  --primary-foreground: 210 40% 98%;
  
  /* 背景色 */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  
  /* 语义色彩 */
  --destructive: 0 84.2% 60.2%;
  --success: 142 76% 36%;
  --warning: 32 95% 44%;
  --info: 221.2 83.2% 53.3%;
}
```

#### 预设主题
- **青绿主题** (teal) - 默认主题，适合现代化应用
- **蓝色主题** (blue) - 经典商务风格，专业可靠
- **紫色主题** (purple) - 创意设计，富有想象力
- **玫瑰主题** (rose) - 温暖友好，适合社交应用
- **绿色主题** (green) - 自然环保，健康生活类应用

### 使用主题系统

#### 1. 基础主题切换

```tsx
import React from 'react';
import { ThemeSwitcher } from 'zhiman-design';

// 在应用顶部添加主题切换器
export default () => (
  <div style={{ padding: '20px' }}>
    <h3>选择主题：</h3>
    <ThemeSwitcher />
  </div>
);
```

#### 2. 程序化控制主题

```tsx
import React, { useEffect } from 'react';
import { setTheme, getCurrentTheme, initTheme, Button } from 'zhiman-design';

export default () => {
  // 应用启动时初始化主题
  useEffect(() => {
    initTheme();
  }, []);

  const handleSetTheme = (themeName, isDark = false) => {
    setTheme(themeName, isDark);
  };

  const { themeName, isDark } = getCurrentTheme();

  return (
    <div style={{ padding: '16px', display: 'flex', gap: '8px', flexDirection: 'column' }}>
      <p>当前主题: {themeName} ({isDark ? '暗色' : '亮色'})</p>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button onClick={() => handleSetTheme('blue', false)}>蓝色主题</Button>
        <Button onClick={() => handleSetTheme('purple', true)}>紫色暗色</Button>
      </div>
    </div>
  );
};
```

#### 3. 在组件中使用主题变量

```tsx
import React from 'react';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    {/* 使用 Tailwind 类名 */}
    <div className="bg-primary text-primary-foreground p-4 rounded-lg">
      主色调背景
    </div>

    {/* 使用 CSS 变量 */}
    <div style={{
      backgroundColor: 'hsl(var(--primary))',
      color: 'hsl(var(--primary-foreground))',
      padding: '16px',
      borderRadius: '8px'
    }}>
      自定义样式
    </div>
  </div>
);
```

## 设计原则

### 色彩系统

#### 主色调 (Primary)
- 用于主要操作按钮、链接、图标等
- 体现品牌特色的核心颜色
- 确保在各种背景下有良好的可读性

#### 语义色彩
- **Success (成功)** - 绿色系，表示成功、完成、正确状态
- **Warning (警告)** - 橙/黄色系，表示警告、注意事项
- **Destructive (危险)** - 红色系，表示错误、删除、危险操作
- **Info (信息)** - 蓝色系，表示提示、信息、帮助

#### 中性色彩
- **Background/Foreground** - 页面背景和主要文字颜色
- **Muted** - 次要内容、辅助文字颜色
- **Border** - 边框、分割线颜色
- **Accent** - 强调背景、悬停状态颜色

### 尺寸系统

#### 按钮尺寸
- **sm** (32px) - 紧凑界面，表格内按钮
- **default** (36px) - 标准界面，通用按钮
- **lg** (40px) - 突出显示，主要操作按钮
- **icon** (36x36px) - 图标按钮，工具栏

#### 圆角系统
- **sm** (2px) - 小元素，标签、徽章
- **default** (6px) - 标准元素，按钮、输入框
- **lg** (8px) - 大元素，卡片、弹窗
- **xl** (12px) - 特大元素，页面容器

### 动画原则

#### 缓动函数
- **ease-out** - 快速启动，平缓结束，适合进入动画
- **ease-in** - 平缓启动，快速结束，适合退出动画
- **ease-in-out** - 平缓启动和结束，适合状态切换

#### 动画时长
- **150ms** - 微交互，按钮点击、悬停
- **200ms** - 组件状态变化
- **300ms** - 页面元素进入/退出
- **500ms** - 页面级别的转换

## 最佳实践

### 主题切换

#### 1. 应用初始化
```tsx | pure
import React, { useEffect } from 'react';
import { initTheme } from 'zhiman-design';

function App() {
  useEffect(() => {
    // 在应用启动时初始化主题
    initTheme();
  }, []);

  return <YourApp />;
}
```

#### 2. 主题持久化
```tsx | pure
// 主题系统会自动保存到 localStorage
// 无需额外配置，页面刷新后会自动恢复
```

#### 3. 响应系统主题
```tsx | pure
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleSystemThemeChange = (e) => {
    const { themeName } = getCurrentTheme();
    setTheme(themeName, e.matches);
  };
  
  mediaQuery.addEventListener('change', handleSystemThemeChange);
  
  return () => {
    mediaQuery.removeEventListener('change', handleSystemThemeChange);
  };
}, []);
```

### 自定义主题

#### 1. 扩展预设主题
```tsx | pure
import { themes, type Theme } from 'zhiman-design';

const customTheme: Theme = {
  name: 'brand',
  label: '品牌主题',
  colors: {
    primary: '210 100% 50%', // 自定义主色调
    primaryForeground: '0 0% 100%',
    // ... 其他颜色配置
  },
  darkColors: {
    primary: '210 100% 60%', // 暗色模式下的主色调
    // ... 暗色模式配置
  }
};

// 将自定义主题添加到应用中
const allThemes = [...themes, customTheme];
```

#### 2. 动态主题生成
```tsx | pure
const generateTheme = (primaryHue: number): Theme => {
  return {
    name: `custom-${primaryHue}`,
    label: `自定义主题 ${primaryHue}°`,
    colors: {
      primary: `${primaryHue} 70% 50%`,
      primaryForeground: '0 0% 100%',
      // 基于主色调生成其他颜色
      secondary: `${primaryHue} 30% 90%`,
      accent: `${primaryHue} 40% 95%`,
      // ...
    }
  };
};
```

### 组件开发

#### 1. 使用设计代币
```tsx | pure
// ✅ 推荐：使用 Tailwind 类名
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  主要按钮
</Button>

// ✅ 可行：使用 CSS 变量
<div style={{ backgroundColor: 'hsl(var(--primary))' }}>
  自定义组件
</div>

// ❌ 避免：硬编码颜色值
<Button style={{ backgroundColor: '#22c55e' }}>
  不推荐的写法
</Button>
```

#### 2. 支持暗色模式
```tsx | pure
// 使用 dark: 前缀类名
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  自适应内容
</div>

// 或使用主题变量
<div className="bg-background text-foreground">
  主题感知组件
</div>
```

#### 3. 语义化色彩使用
```tsx | pure
// ✅ 语义化使用
<Button variant="destructive">删除</Button>
<span className="text-success">操作成功</span>
<div className="bg-warning/10 text-warning">警告信息</div>

// ❌ 非语义化使用
<Button className="bg-red-500">保存</Button> // 红色不应该用于保存操作
```

## 常见问题

### Q: 如何确保主题在服务端渲染中正常工作？

A: 在 SSR 环境中，需要在客户端渲染时初始化主题：

```tsx | pure
useEffect(() => {
  initTheme();
}, []);
```

### Q: 可以同时使用多个主题吗？

A: 当前版本支持全局单一主题。如需局部主题，可以使用 CSS 变量覆盖：

```tsx | pure
<div style={{
  '--primary': '260 100% 50%', // 局部覆盖主色调
}}>
  <Button>局部主题按钮</Button>
</div>
```

### Q: 如何自定义动画效果？

A: 可以通过 Button 组件的 motionProps 自定义动画：

```tsx | pure
<Button 
  withMotion
  motionProps={{
    hoverScale: 1.05,
    tapScale: 0.95,
    hoverRotate: 2
  }}
>
  自定义动画
</Button>
```

## 技术支持

- 📖 [组件文档](/components)
- 🎨 [主题系统](/components/theme-switcher)
- 🔗 [GitHub 仓库](https://github.com/zhiman-design/zhiman-design)
- 💬 [问题反馈](https://github.com/zhiman-design/zhiman-design/issues)

---

*Zhiman Design - 让设计更简单，让开发更高效* ✨
