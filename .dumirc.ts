import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'zhiman',
    logo: '/logo.svg',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components' },
    ],
    // socialLinks: {
    //   github: 'https://github.com/zhiman/zhiman-design',
    // },
    footer: '作者 ❤  Zhiman Team',
    footerConfig: {
      bottom: 'Copyright © 2025 zhiman-design. All rights reserved.',
    },
  },
});
