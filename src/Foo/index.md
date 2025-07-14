# Foo 组件

Foo 是一个简单的标题组件，用于展示文本内容。这是一个示例组件，展示了 zhiman-design 组件库的基本用法。

## 何时使用

- 需要显示简单的标题文本时
- 作为页面或区块的标题
- 需要统一的文本样式时

## 代码演示

### 基础用法

最简单的用法，传入 title 属性即可。

```jsx
import { Foo } from 'zhiman-design';

export default () => <Foo title="Hello zhiman-design!" />;
```

### 自定义样式

可以通过 CSS 类名来自定义样式。

```jsx
import { Foo } from 'zhiman-design';

export default () => (
  <div>
    <Foo title="默认样式" />
    <Foo title="自定义样式" style={{ color: '#1890ff', fontSize: '20px' }} />
  </div>
);
```

## API

### Foo

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | 标题文本 | string | - | - |
| className | 自定义 CSS 类名 | string | - | - |
| style | 自定义样式 | CSSProperties | - | - |

## 设计指引

### 何时使用

- 需要在页面中展示标题信息
- 需要保持标题样式的一致性
- 作为其他复杂组件的子组件

### 何时不使用

- 当需要复杂的文本格式时，建议使用 Typography 组件
- 当需要可编辑的标题时，建议使用 Input 组件
