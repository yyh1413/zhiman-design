# 组件概览

zhiman-design 为您提供了丰富的组件库，涵盖了常见的业务场景。

## 通用组件

### 基础组件

- [Foo](/components/foo) - 示例组件，展示基本用法
- [Input](/components/input) - 输入框组件，支持多种输入类型

## 组件分类

### 🔧 基础组件
基础 UI 组件，包含按钮、输入框等常用元素。

### 📋 数据录入
用于数据录入的组件，如表单、输入框、选择器等。

### 📊 数据展示
用于数据展示的组件，如表格、列表、卡片等。

### 🚀 反馈
用于给用户反馈的组件，如消息提示、确认框等。

### 🎯 导航
用于页面导航的组件，如菜单、面包屑等。

## 开发指南

所有组件都遵循以下设计原则：

1. **一致性** - 保持设计和交互的一致性
2. **可用性** - 优先考虑用户体验
3. **灵活性** - 支持自定义和扩展
4. **性能** - 优化组件性能，支持按需加载

## 快速开始

```jsx
import React from 'react';
import { Foo, Input } from 'zhiman-design';

const App = () => (
  <div>
    <Foo title="Hello World!" />
    <Input placeholder="请输入内容" />
  </div>
);

export default App;
``` 