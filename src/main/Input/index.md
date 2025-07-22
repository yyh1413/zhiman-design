# Input 输入框

基础的表单输入组件，支持受控和非受控用法，适用于各种表单场景。

## 基本用法

```tsx
import { Input } from 'zhiman-design';
export default () => (
    <div className="flex flex-col flex-wrap gap-4">
      <Input placeholder="请输入内容" size='large' />
      <Input placeholder="请输入内容" />
      <Input placeholder="禁用状态" size='small' disabled/>
    </div>
);
```


## prefix

```tsx
import React, { useState } from 'react';
import { Input,Icons } from 'zhiman-design';

export default () => {
  return (
    <Input placeholder="prefix" prefix={ <Icons.settings size="16px" color='gray' />} />
  );
};
```

## API

| 属性        | 说明           | 类型                | 默认值   |
| ----------- | -------------- | ------------------- | -------- |
| value       | 输入框的值     | `string`            | -        |
| defaultValue| 默认值         | `string`            | -        |
| onChange    | 值变化回调     | `(e) => void`       | -        |
| placeholder | 占位符         | `string`            | -        |
| disabled    | 是否禁用       | `boolean`           | `false`  |
| ...         | 原生 input 支持的所有属性 | - | - |