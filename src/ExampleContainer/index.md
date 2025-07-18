# ExampleContainer 示例容器

一个用于展示组件示例的容器组件，提供统一的样式和布局。

## 基础用法

```tsx
import React from 'react';
import { ExampleContainer, Button } from 'zhiman-design';

export default () => (
  <ExampleContainer title="基础按钮">
    <div className="flex gap-4">
      <Button>默认按钮</Button>
      <Button variant="outline">边框按钮</Button>
    </div>
  </ExampleContainer>
);
```

## 对齐方式

```tsx
import React from 'react';
import { ExampleContainer, Button } from 'zhiman-design';

export default () => (
  <div className="space-y-4">
    <ExampleContainer align="start" title="左对齐">
      <div className="flex gap-4">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
      </div>
    </ExampleContainer>

    <ExampleContainer align="center" title="居中对齐">
      <div className="flex gap-4 justify-center">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
      </div>
    </ExampleContainer>

    <ExampleContainer align="end" title="右对齐">
      <div className="flex gap-4 justify-end">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
      </div>
    </ExampleContainer>
  </div>
);
```

## 无标题容器

```tsx
import React from 'react';
import { ExampleContainer, Button } from 'zhiman-design';

export default () => (
  <ExampleContainer>
    <div className="flex gap-4">
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </div>
  </ExampleContainer>
);
```

## API 参数

| 参数   | 说明     | 类型                    | 默认值   |
| ------ | -------- | ----------------------- | -------- |
| children | 子内容   | `React.ReactNode`       | -        |
| align  | 对齐方式 | `"start" \| "center" \| "end"` | `"center"` |
| title  | 标题     | `string`                | -        |

## 特性

- **点状背景**：提供视觉上的网格背景效果
- **明暗模式支持**：自动适配明暗主题
- **灵活对齐**：支持左对齐、居中、右对齐
- **可选标题**：可以添加标题来组织示例
- **响应式设计**：适配不同屏幕尺寸
