# Button 按钮

功能丰富的按钮组件，支持多种样式变体、尺寸、动画效果和组合使用。

## 基础用法

```tsx
import React from 'react';
import { Button } from 'zhiman-design';

export default () => (
  <div className="flex flex-wrap gap-4">
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
import { Button, Icons } from 'zhiman-design';

export default () => (
  <div className="flex flex-wrap gap-4">
    <Button>Default</Button>
    <Button disabled>Disabled</Button>
    <Button variant="outline" className="border-dashed">
      Dashed
    </Button>
    <Button disabled>
      <Icons.spinner className="animate-spin" />
      Loading...
    </Button>
  </div>
);
```

## 所有按钮变体

```tsx
import React from 'react';
import { Button, Icons } from 'zhiman-design';

export default () => (
  <div className="flex flex-wrap gap-4">
    <Button variant="gradientPrimary">Gradient Button</Button>
    <Button variant="glass">Glass Button</Button>
    <Button variant="brandActive">Brand Active</Button>
  </div>
);
```

## 按钮尺寸

```tsx
import React from 'react';
import {
  Button,
  Icons,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from 'zhiman-design';

export default () => (
  <div className="flex flex-wrap items-center gap-4">
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon">
          <Icons.plus />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Add new item</TooltipContent>
    </Tooltip>
  </div>
);
```

## 图标按钮

```tsx
import React from 'react';
import {
  Button,
  Icons,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from 'zhiman-design';

export default () => (
  <div className="flex flex-wrap gap-4">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" variant="ghost">
          <Icons.settings />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Settings</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" variant="outline">
          <Icons.edit />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Edit</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" variant="destructive">
          <Icons.trash />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Delete</TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" variant="glass">
          <Icons.bookmark />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Add to favorites</TooltipContent>
    </Tooltip>
  </div>
);
```

## 动画效果

```tsx
import React from 'react';
import { Button } from 'zhiman-design';

export default () => (
  <div className="flex flex-wrap gap-4 items-center">
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


## asChild 组合使用

```tsx
import React from 'react';
import { Button } from 'zhiman-design';

export default () => (
  <div className="flex flex-wrap gap-4">
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

## 实际应用场景

```tsx
import React, { useState } from 'react';
import { Button, Icons } from 'zhiman-design';

export default () => {
  const [downloaded, setDownloaded] = useState(false);

  return (
    <div className="space-y-6 p-6 bg-muted/30 rounded-lg">
      {/* 卡片操作 */}
      <div className="flex justify-between items-center">
        <h3 className="m-0">设计系统文档</h3>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Icons.share />
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={downloaded}
            onClick={() => setDownloaded(true)}
          >
            <Icons.download />
            {downloaded ? '已下载' : '下载'}
          </Button>
        </div>
      </div>

      {/* 表单提交 */}
      <div className="flex gap-3 justify-end pt-4 border-t border-border">
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
      <div className="flex gap-2 pt-4 border-t border-destructive/20">
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
