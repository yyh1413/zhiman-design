# Input 输入框

基础的表单输入组件，支持受控和非受控用法，适用于各种表单场景。

## 基本用法

```tsx
import { Input } from 'zhiman-design';
export default () => (
  <div className="flex flex-col flex-wrap gap-4">
    <Input placeholder="请输入内容" size="large" />
    <Input placeholder="请输入内容" />
    <Input placeholder="禁用状态" size="small" disabled />
  </div>
);
```

## prefix

```tsx
import React, { useState } from 'react';
import { Input, Icons } from 'zhiman-design';

export default () => {
  return (
    <div className="flex flex-col flex-wrap gap-4">
      <Input
        placeholder="prefix"
        prefix={<Icons.settings size="16px" color="gray" />}
      />
      <Input.Search placeholder="Search" />
    </div>
  );
};
```

## API

### Input

| 属性         | 说明                      | 类型          | 默认值  |
| ------------ | ------------------------- | ------------- | ------- |
| value        | 输入框的值                | `string`      | -       |
| defaultValue | 默认值                    | `string`      | -       |
| onChange     | 值变化回调                | `(e) => void` | -       |
| placeholder  | 占位符                    | `string`      | -       |
| disabled     | 是否禁用                  | `boolean`     | `false` |
| ...          | 原生 input 支持的所有属性 | -             | -       |

### Input.Search

| 属性         | 说明                     | 类型                      | 默认值  |
| ------------ | ------------------------ | ------------------------- | ------- |
| onSearch     | 点击搜索按钮或回车时回调 | `(value: string) => void` | -       |
| value        | 输入框的值               | `string`                  | -       |
| defaultValue | 默认值                   | `string`                  | -       |
| onChange     | 值变化回调               | `(e) => void`             | -       |
| placeholder  | 占位符                   | `string`                  | -       |
| disabled     | 是否禁用                 | `boolean`                 | `false` |
| ...          | 继承 Input 的所有属性    | -                         | -       |

> 说明：`Input.Search` 支持所有 `Input` 的属性，并额外支持 `onSearch` 回调。

---

### 说明

- `onSearch`：当用户点击搜索按钮或按下回车时触发，参数为当前输入框的值。
- 其他属性与 `Input` 保持一致。

---
