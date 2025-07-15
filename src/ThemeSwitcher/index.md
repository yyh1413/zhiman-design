# ThemeSwitcher 主题切换器

强大的主题切换系统，支持多种预设主题和明暗模式切换。

## 基础用法

```tsx
import React from 'react';
import { ThemeSwitcher } from 'zhiman-design';

export default () => (
  <div style={{ padding: '20px' }}>
    <h3>选择你喜欢的主题：</h3>
    <ThemeSwitcher />
  </div>
);
```

## 完整演示

```tsx
import React from 'react';
import { ThemeDemo } from 'zhiman-design';

export default () => <ThemeDemo />;
```

## 主题系统特性

### 🎨 多种预设主题
- **青绿主题** (teal) - 默认主题，清新的青绿色调
- **蓝色主题** (blue) - 经典的蓝色商务风格
- **紫色主题** (purple) - 优雅的紫色设计
- **玫瑰主题** (rose) - 温暖的玫瑰红色调
- **绿色主题** (green) - 自然的绿色风格

### 🌓 明暗模式
- 自动跟随系统主题偏好
- 手动切换明暗模式
- 平滑的过渡动画效果

### 💾 持久化存储
- 自动保存用户主题选择
- 页面刷新后保持主题状态
- localStorage 本地存储

## 程序化使用

### 设置主题

```tsx
import React from 'react';
import { Button, setTheme } from 'zhiman-design';

export default () => {
  const handleSetTheme = (themeName: string, isDark: boolean = false) => {
    setTheme(themeName, isDark);
    
    // 手动切换dark class
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button onClick={() => handleSetTheme('blue')}>
        切换到蓝色主题
      </Button>
      <Button onClick={() => handleSetTheme('purple')}>
        切换到紫色主题
      </Button>
      <Button onClick={() => handleSetTheme('rose', true)}>
        切换到玫瑰主题 (暗色)
      </Button>
    </div>
  );
};
```

### 获取当前主题

```tsx
import React, { useState, useEffect } from 'react';
import { getCurrentTheme } from 'zhiman-design';

export default () => {
  const [themeInfo, setThemeInfo] = useState({ themeName: 'teal', isDark: false });

  useEffect(() => {
    const currentTheme = getCurrentTheme();
    setThemeInfo(currentTheme);
  }, []);

  return (
    <div style={{ 
      padding: '16px', 
      backgroundColor: 'hsl(var(--muted))', 
      borderRadius: '8px',
      border: '1px solid hsl(var(--border))'
    }}>
      <h4>当前主题信息</h4>
      <p><strong>主题名称:</strong> {themeInfo.themeName}</p>
      <p><strong>模式:</strong> {themeInfo.isDark ? '暗色模式' : '亮色模式'}</p>
    </div>
  );
};
```

### 主题初始化

```tsx
import React, { useEffect } from 'react';
import { initTheme } from 'zhiman-design';

export default () => {
  useEffect(() => {
    // 在应用启动时初始化主题
    initTheme();
  }, []);

  return (
    <div style={{ padding: '16px' }}>
      <p>主题已初始化，会自动恢复用户之前的主题选择。</p>
    </div>
  );
};
```

## 自定义主题

### 扩展主题色彩

```tsx
import React from 'react';
import { themes, type Theme } from 'zhiman-design';

// 创建自定义主题
const customTheme: Theme = {
  name: 'orange',
  label: '橙色主题',
  colors: {
    primary: '24 74% 58%',
    primaryForeground: '210 40% 98%',
    // ... 其他颜色配置
  },
  darkColors: {
    primary: '24 74% 58%',
    background: '222.2 84% 4.9%',
    foreground: '210 40% 98%',
    // ... 暗色模式配置
  }
};

export default () => {
  const allThemes = [...themes, customTheme];
  
  return (
    <div style={{ padding: '16px' }}>
      <h4>可用主题 ({allThemes.length} 个)</h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
        {allThemes.map((theme) => (
          <div 
            key={theme.name}
            style={{ 
              padding: '12px', 
              border: '1px solid hsl(var(--border))', 
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <div 
              style={{ 
                width: '20px', 
                height: '20px', 
                borderRadius: '50%', 
                backgroundColor: `hsl(${theme.colors.primary})`,
                border: '2px solid hsl(var(--border))'
              }}
            />
            <span>{theme.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
```

## CSS 变量系统

主题系统基于 CSS 变量，所有颜色都会自动应用到 Tailwind CSS 类中：

```css
/* 主要颜色 */
--primary: 162 43% 40%;
--primary-foreground: 210 40% 98%;

/* 背景颜色 */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;

/* 语义颜色 */
--destructive: 0 84.2% 60.2%;
--success: 142 76% 36%;
--warning: 32 95% 44%;
--info: 221.2 83.2% 53.3%;

/* 交互元素 */
--border: 214.3 31.8% 91.4%;
--input: 214.3 31.8% 91.4%;
--ring: 162 43% 40%;
```

## 在组件中使用主题

```tsx
import React from 'react';

export default () => (
  <div style={{ 
    padding: '24px',
    backgroundColor: 'hsl(var(--card))',
    color: 'hsl(var(--card-foreground))',
    border: '1px solid hsl(var(--border))',
    borderRadius: '8px'
  }}>
    <h3 style={{ color: 'hsl(var(--primary))' }}>
      使用主题变量的自定义组件
    </h3>
    <p style={{ color: 'hsl(var(--muted-foreground))' }}>
      这个组件使用 CSS 变量，会随主题自动变化颜色。
    </p>
    <button style={{
      backgroundColor: 'hsl(var(--primary))',
      color: 'hsl(var(--primary-foreground))',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '6px',
      cursor: 'pointer'
    }}>
      主题按钮
    </button>
  </div>
);
```

## API

### 组件 API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义类名 | `string` | - |

### 工具函数 API

| 函数 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `setTheme` | 设置主题 | `(themeName: string, isDark?: boolean)` | `void` |
| `getCurrentTheme` | 获取当前主题 | `()` | `{themeName: string, isDark: boolean}` |
| `getTheme` | 根据名称获取主题对象 | `(name: string)` | `Theme \| undefined` |
| `initTheme` | 初始化主题系统 | `()` | `void` |

### 主题对象类型

```typescript
interface Theme {
  name: string;
  label: string;
  colors: {
    primary: string;
    primaryForeground: string;
    secondary: string;
    // ... 更多颜色属性
  };
  darkColors?: Partial<Theme['colors']>;
}
``` 