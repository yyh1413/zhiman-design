# Button 按钮

功能丰富的按钮组件，支持多种样式变体、尺寸、动画效果和组合使用。

## 基础用法

```tsx
import React from 'react';
import { Button } from 'zhiman-design';

export default () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <Button variant="default">Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
);
```

## 所有按钮变体

```tsx
import React from 'react';
import { Button } from 'zhiman-design';

export default () => (
  <div
    style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}
  >
    <Button variant="default">默认</Button>
    <Button variant="destructive">危险</Button>
    <Button variant="outline">边框</Button>
    <Button variant="secondary">次要</Button>
    <Button variant="ghost">幽灵</Button>
    <Button variant="link">链接</Button>
    <Button variant="brandActive">品牌激活</Button>
    <Button variant="gradientPrimary">渐变主色</Button>
    <Button variant="glass">玻璃效果</Button>
  </div>
);
```

## 按钮尺寸

```tsx
import React from 'react';
import { Button } from 'zhiman-design';

export default () => (
  <div
    style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
  >
    <Button size="sm">小尺寸</Button>
    <Button size="default">默认尺寸</Button>
    <Button size="lg">大尺寸</Button>
    <Button size="icon">🏠</Button>
  </div>
);
```

## 图标按钮

```tsx
import React from 'react';
import { Button } from 'zhiman-design';

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const TrashIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

export default () => (
  <div
    style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}
  >
    <Button>
      <PlusIcon />
      添加
    </Button>
    <Button variant="destructive">
      <TrashIcon />
      删除
    </Button>
    <Button variant="outline" size="icon">
      <PlusIcon />
    </Button>
    <Button variant="ghost" size="icon">
      <TrashIcon />
    </Button>
  </div>
);
```

## 动画效果

```tsx
import React from 'react';
import { Button } from 'zhiman-design';

export default () => (
  <div
    style={{
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}
  >
    <Button withMotion>默认动画</Button>
    <Button
      withMotion
      variant="gradientPrimary"
      motionProps={{
        hoverScale: 1.05,
        tapScale: 0.95,
        hoverRotate: 2,
        tapRotate: -2,
      }}
    >
      自定义动画
    </Button>
    <Button
      withMotion
      variant="glass"
      motionProps={{
        hoverScale: 1.08,
        tapScale: 0.92,
      }}
    >
      玻璃效果动画
    </Button>
  </div>
);
```

## 禁用状态

```tsx
import React from 'react';
import { Button } from 'zhiman-design';

export default () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <Button disabled>禁用默认</Button>
    <Button variant="destructive" disabled>
      禁用危险
    </Button>
    <Button variant="outline" disabled>
      禁用边框
    </Button>
    <Button variant="gradientPrimary" disabled>
      禁用渐变
    </Button>
  </div>
);
```

## 加载状态

```tsx
import React, { useState } from 'react';
import { Button } from 'zhiman-design';

const LoadingIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="animate-spin"
  >
    <path d="M21 12a9 9 0 11-6.219-8.56" />
  </svg>
);

export default () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button disabled={loading} onClick={handleClick}>
        {loading && <LoadingIcon />}
        {loading ? '加载中...' : '点击加载'}
      </Button>
      <Button variant="outline" disabled={loading}>
        {loading && <LoadingIcon />}
        提交表单
      </Button>
    </div>
  );
};
```

## asChild 组合使用

```tsx
import React from 'react';
import { Button } from 'zhiman-design';

export default () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <Button asChild>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        外部链接
      </a>
    </Button>
    <Button variant="outline" asChild>
      <a href="/docs" style={{ textDecoration: 'none' }}>
        内部链接
      </a>
    </Button>
  </div>
);
```

## 按钮组

```tsx
import React, { useState } from 'react';
import { Button } from 'zhiman-design';

export default () => {
  const [selected, setSelected] = useState('left');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* 工具栏按钮组 */}
      <div
        style={{
          display: 'flex',
          gap: '0',
          border: '1px solid #e2e8f0',
          borderRadius: '6px',
          overflow: 'hidden',
        }}
      >
        <Button
          variant={selected === 'left' ? 'brandActive' : 'ghost'}
          style={{ borderRadius: '0' }}
          onClick={() => setSelected('left')}
        >
          左对齐
        </Button>
        <Button
          variant={selected === 'center' ? 'brandActive' : 'ghost'}
          style={{ borderRadius: '0' }}
          onClick={() => setSelected('center')}
        >
          居中
        </Button>
        <Button
          variant={selected === 'right' ? 'brandActive' : 'ghost'}
          style={{ borderRadius: '0' }}
          onClick={() => setSelected('right')}
        >
          右对齐
        </Button>
      </div>

      {/* 操作按钮组 */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="outline">取消</Button>
        <Button variant="gradientPrimary">保存</Button>
      </div>
    </div>
  );
};
```

## 明暗模式支持

所有按钮变体完美支持明暗模式切换：

```tsx
import React from 'react';
import { Button, DarkModeToggle } from 'zhiman-design';

export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '20px',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span>明暗模式切换:</span>
      <DarkModeToggle />
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '12px',
      }}
    >
      <Button variant="default">默认按钮</Button>
      <Button variant="destructive">危险按钮</Button>
      <Button variant="outline">边框按钮</Button>
      <Button variant="secondary">次要按钮</Button>
      <Button variant="ghost">幽灵按钮</Button>
      <Button variant="gradientPrimary">渐变按钮</Button>
      <Button variant="glass">玻璃按钮</Button>
      <Button variant="brandActive">品牌按钮</Button>
      <Button variant="link">链接按钮</Button>
    </div>
  </div>
);
```

## 实际应用场景

```tsx
import React, { useState } from 'react';
import { Button } from 'zhiman-design';

const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ShareIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

export default () => {
  const [downloaded, setDownloaded] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '20px',
        backgroundColor: '#f8fafc',
        borderRadius: '8px',
      }}
    >
      {/* 卡片操作 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3 style={{ margin: 0 }}>设计系统文档</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="ghost" size="icon">
            <ShareIcon />
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={downloaded}
            onClick={() => setDownloaded(true)}
          >
            <DownloadIcon />
            {downloaded ? '已下载' : '下载'}
          </Button>
        </div>
      </div>

      {/* 表单提交 */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'flex-end',
          paddingTop: '16px',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <Button variant="ghost">取消</Button>
        <Button variant="outline">保存草稿</Button>
        <Button
          variant="gradientPrimary"
          withMotion
          motionProps={{ hoverScale: 1.03 }}
        >
          发布文章
        </Button>
      </div>

      {/* 危险操作 */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          paddingTop: '16px',
          borderTop: '1px solid #fee2e2',
        }}
      >
        <Button variant="destructive" size="sm">
          删除项目
        </Button>
        <Button variant="outline" size="sm">
          重置设置
        </Button>
      </div>
    </div>
  );
};
```

## 特殊效果展示

```tsx
import React from 'react';
import { Button } from 'zhiman-design';

export default () => (
  <div
    style={{
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
      padding: '24px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '12px',
    }}
  >
    <Button variant="glass" withMotion motionProps={{ hoverScale: 1.05 }}>
      玻璃态按钮
    </Button>

    <Button variant="gradientPrimary" withMotion size="lg">
      渐变大按钮
    </Button>

    <Button
      variant="glass"
      size="icon"
      withMotion
      motionProps={{
        hoverScale: 1.1,
        hoverRotate: 5,
      }}
    >
      ✨
    </Button>
  </div>
);
```

## API 参数

| 参数        | 说明               | 类型                                                                                                                         | 默认值                                                               |
| ----------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| variant     | 按钮变体           | `default` \| `destructive` \| `outline` \| `secondary` \| `ghost` \| `link` \| `brandActive` \| `gradientPrimary` \| `glass` | `default`                                                            |
| size        | 按钮尺寸           | `default` \| `sm` \| `lg` \| `icon`                                                                                          | `default`                                                            |
| asChild     | 是否作为子组件渲染 | `boolean`                                                                                                                    | `false`                                                              |
| withMotion  | 是否启用动画效果   | `boolean`                                                                                                                    | `false`                                                              |
| motionProps | 自定义动画属性     | `{ hoverScale?: number; tapScale?: number; hoverRotate?: number; tapRotate?: number; }`                                      | `{ hoverScale: 1.02, tapScale: 0.98, hoverRotate: 0, tapRotate: 0 }` |
| disabled    | 是否禁用           | `boolean`                                                                                                                    | `false`                                                              |
| className   | 自定义类名         | `string`                                                                                                                     | -                                                                    |

## 样式变体说明

- **default**: 主色调按钮，用于主要操作
- **destructive**: 危险操作按钮，如删除、重置等
- **outline**: 边框按钮，用于次要操作
- **secondary**: 次要按钮，优先级较低的操作
- **ghost**: 幽灵按钮，最低优先级，通常用于取消操作
- **link**: 链接样式按钮
- **brandActive**: 品牌激活状态按钮
- **gradientPrimary**: 渐变主色按钮，用于突出重要操作
- **glass**: 玻璃态按钮，现代毛玻璃效果
