import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  resolve: {
    atomDirs: [{ type: 'component', dir: 'src/main' }],
    codeBlockMode: 'active',
    entryFile: './src/index.ts',
  },
  apiParser: {},
  extraPostCSSPlugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
  themeConfig: {
    name: 'zhiman',
    logo: '/logo.svg',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components' },
    ],
    footer: '作者 ❤  Zhiman Team',
    footerConfig: {
      bottom: 'Copyright © 2025 zhiman-design. All rights reserved.',
    },
    socialLinks: {
      // github: 'https://github.com/zhiman-design/zhiman-design',
    },
  },
  theme: {
    '@c-primary': '#3b9278',
  },

});
