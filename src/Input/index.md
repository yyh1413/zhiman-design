# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择

## 代码演示

### 基础用法

基本使用。

```jsx
import { Input } from 'zhiman-design';

export default () => <Input placeholder="请输入内容" />;
```

### 不同尺寸

我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。

```jsx
import { Input } from 'zhiman-design';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Input size="large" placeholder="大尺寸" />
    <Input placeholder="默认尺寸" />
    <Input size="small" placeholder="小尺寸" />
  </div>
);
```

### 禁用状态

禁用输入框。

```jsx
import { Input } from 'zhiman-design';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Input placeholder="禁用状态" disabled />
    <Input placeholder="默认值" defaultValue="有默认值的禁用输入框" disabled />
  </div>
);
```

### 密码输入框

密码框。

```jsx
import { Input } from 'zhiman-design';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Input.Password placeholder="请输入密码" />
    <Input.Password placeholder="显示密码强度" showPasswordStrength />
  </div>
);
```

## API

### Input

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| placeholder | 输入框占位文本 | string | - | - |
| value | 输入框内容 | string | - | - |
| defaultValue | 输入框默认内容 | string | - | - |
| size | 控件大小 | `large` \| `middle` \| `small` | - | - |
| disabled | 是否禁用状态 | boolean | false | - |
| maxLength | 最大长度 | number | - | - |
| showCount | 是否展示字符数 | boolean | false | - |
| allowClear | 可以点击清除图标删除内容 | boolean | - | - |
| onChange | 输入框内容变化时的回调 | function(e) | - | - |
| onPressEnter | 按下回车的回调 | function(e) | - | - |
| onFocus | 获取焦点回调 | function(e) | - | - |
| onBlur | 失去焦点回调 | function(e) | - | - |

### Input.Password

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visibilityToggle | 是否显示切换按钮 | boolean | true | - |
| iconRender | 自定义切换按钮 | (visible) => ReactNode | - | - |

## 设计指引

### 何时使用

- 需要用户输入表单域内容时
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择

### 何时不使用

- 当需要输入多行文本时，请使用 TextArea
- 当需要用户选择而不是输入时，请使用 Select
