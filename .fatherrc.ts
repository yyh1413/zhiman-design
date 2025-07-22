import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: { 
    output: 'dist',
    // 添加 Babel 插件来处理样式
    extraBabelPlugins: [
      ['import', { libraryName: 'antd', style: true }]
    ]
  },
  // 添加 cjs 构建以支持 CommonJS
  cjs: {
    output: 'dist',
  },
  // 确保所有组件都被构建
  umd: {
    output: 'dist',
  }
});
