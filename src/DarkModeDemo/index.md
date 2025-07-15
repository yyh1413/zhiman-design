# DarkModeDemo 明暗模式演示

展示组件系统完整的明暗模式切换功能。

## 完整演示

```tsx
import React from 'react';
import { DarkModeDemo } from 'zhiman-design';

export default () => <DarkModeDemo />;
```

## 简单的明暗模式切换按钮

```tsx
import React from 'react';
import { DarkModeToggle } from 'zhiman-design';

export default () => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '20px' }}>
    <span>切换明暗模式:</span>
    <DarkModeToggle />
  </div>
);
```

## 程序化控制明暗模式

```tsx
import React, { useState } from 'react';
import { Button, getCurrentTheme, setTheme } from 'zhiman-design';

export default () => {
  const [mode, setMode] = useState('light');

  const switchToLight = () => {
    const { themeName } = getCurrentTheme();
    setTheme(themeName, false);
    document.documentElement.classList.remove('dark');
    setMode('light');
  };

  const switchToDark = () => {
    const { themeName } = getCurrentTheme();
    setTheme(themeName, true);
    document.documentElement.classList.add('dark');
    setMode('dark');
  };

  const toggleMode = () => {
    const { themeName, isDark } = getCurrentTheme();
    const newIsDark = !isDark;
    setTheme(themeName, newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      setMode('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setMode('light');
    }
  };

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '20px' }}>
      <span>当前模式: {mode === 'dark' ? '🌙 暗黑' : '☀️ 亮色'}</span>
      <Button onClick={switchToLight} variant={mode === 'light' ? 'default' : 'outline'}>
        亮色模式
      </Button>
      <Button onClick={switchToDark} variant={mode === 'dark' ? 'default' : 'outline'}>
        暗黑模式
      </Button>
      <Button onClick={toggleMode} variant="secondary">
        一键切换
      </Button>
    </div>
  );
};
```

## 组件明暗模式适配

### 按钮组件
所有按钮变体都完美支持明暗模式：

```tsx
import React from 'react';
import { Button } from 'zhiman-design';

export default () => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
    gap: '12px',
    padding: '20px'
  }}>
    <Button variant="default">默认</Button>
    <Button variant="destructive">危险</Button>
    <Button variant="outline">边框</Button>
    <Button variant="secondary">次要</Button>
    <Button variant="ghost">幽灵</Button>
    <Button variant="gradientPrimary">渐变</Button>
    <Button variant="glass">玻璃</Button>
    <Button variant="brandActive">品牌</Button>
    <Button variant="link">链接</Button>
  </div>
);
```

### 自定义组件适配

使用主题变量创建明暗模式自适应组件：

```tsx
import React from 'react';

export default () => (
  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    {/* 使用 Tailwind 类名 */}
    <div className="p-4 bg-card border border-border rounded-lg">
      <h3 className="text-card-foreground font-semibold">主题感知卡片</h3>
      <p className="text-muted-foreground mt-2">
        使用 Tailwind 的主题类名，自动适配明暗模式
      </p>
    </div>

    {/* 使用 CSS 变量 */}
    <div style={{
      padding: '16px',
      backgroundColor: 'hsl(var(--accent))',
      color: 'hsl(var(--accent-foreground))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '8px'
    }}>
      <h3 style={{ margin: '0 0 8px 0', fontWeight: '600' }}>CSS 变量卡片</h3>
      <p style={{ margin: 0, color: 'hsl(var(--muted-foreground))' }}>
        使用 CSS 变量直接引用主题颜色
      </p>
    </div>

    {/* 状态指示器 */}
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm">成功</span>
      <span className="px-3 py-1 bg-warning/10 text-warning rounded-full text-sm">警告</span>
      <span className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm">错误</span>
      <span className="px-3 py-1 bg-info/10 text-info rounded-full text-sm">信息</span>
    </div>
  </div>
);
```

## 技术实现原理

### CSS 变量系统
```css | pure
:root {
  /* 亮色模式 */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 162 43% 40%;
  --primary-foreground: 210 40% 98%;
}

.dark {
  /* 暗色模式 */
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 162 43% 50%;
  --primary-foreground: 210 40% 98%;
}
```

### Tailwind CSS 集成
```javascript | pure
/* 在 tailwind.config.js 中 */
theme: {
  extend: {
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
    }
  }
}
```

### 状态持久化
明暗模式选择会自动保存到 `localStorage`：

```typescript | pure
// 保存
localStorage.setItem('theme-mode', isDark ? 'dark' : 'light');

// 读取
const themeMode = localStorage.getItem('theme-mode') || 'light';
```

## 最佳实践

### 1. 使用语义化类名
```tsx | pure
// ✅ 推荐：使用语义化类名
<div className="bg-card text-card-foreground">内容</div>

// ❌ 避免：硬编码颜色
<div className="bg-white dark:bg-gray-900">内容</div>
```

### 2. 合理使用透明度
```tsx | pure
// ✅ 使用语义色彩的透明度变体
<div className="bg-primary/10 text-primary">淡色背景</div>
<div className="bg-destructive/10 text-destructive">错误提示</div>
```

### 3. 过渡动画
```css | pure
/* 为颜色变化添加平滑过渡 */
.transition-colors {
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
```

### 4. 响应系统偏好
```tsx | pure
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleChange = (e) => {
    const { themeName } = getCurrentTheme();
    setTheme(themeName, e.matches);
  };
  
  mediaQuery.addEventListener('change', handleChange);
  return () => mediaQuery.removeEventListener('change', handleChange);
}, []);
```

## API

### DarkModeDemo
展示明暗模式完整功能的演示组件。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |

### DarkModeToggle
简洁的明暗模式切换按钮。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |

### 工具函数

| 函数 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `setTheme` | 设置主题和模式 | `(themeName: string, isDark: boolean)` | `void` |
| `getCurrentTheme` | 获取当前主题信息 | `()` | `{themeName: string, isDark: boolean}` | 