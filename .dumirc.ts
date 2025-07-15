import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
  resolve: {
    atomDirs: [{ type: 'component', dir: 'src' }],
    codeBlockMode: 'active',
    entryFile: './src/index.ts',
  },
  apiParser: {},
  styles: [
    './src/globals.css', 
    './tailwind.css'
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
      github: 'https://github.com/zhiman-design/zhiman-design',
    },
  },
  // 头部脚本注入主题初始化
  headScripts: [
    {
      content: `
        // 主题初始化脚本
        (function() {
          function initTheme() {
            const themeName = localStorage.getItem('theme-name') || 'teal';
            const themeMode = localStorage.getItem('theme-mode') || 'light';
            
            // 预设主题颜色
            const themes = {
              teal: {
                primary: '162 43% 40%',
                background: '0 0% 100%',
                foreground: '222.2 84% 4.9%',
              },
              blue: {
                primary: '221.2 83.2% 53.3%',
                background: '0 0% 100%',
                foreground: '222.2 84% 4.9%',
              },
              purple: {
                primary: '262.1 83.3% 57.8%',
                background: '0 0% 100%',
                foreground: '222.2 84% 4.9%',
              },
              rose: {
                primary: '346.8 77.2% 49.8%',
                background: '0 0% 100%',
                foreground: '222.2 84% 4.9%',
              },
              green: {
                primary: '142 76% 36%',
                background: '0 0% 100%',
                foreground: '222.2 84% 4.9%',
              }
            };
            
            const darkColors = {
              background: '222.2 84% 4.9%',
              foreground: '210 40% 98%',
            };
            
            const currentTheme = themes[themeName] || themes.teal;
            const root = document.documentElement;
            
            // 应用基础颜色
            if (themeMode === 'dark') {
              root.style.setProperty('--primary', currentTheme.primary);
              root.style.setProperty('--background', darkColors.background);
              root.style.setProperty('--foreground', darkColors.foreground);
              root.classList.add('dark');
            } else {
              root.style.setProperty('--primary', currentTheme.primary);
              root.style.setProperty('--background', currentTheme.background);
              root.style.setProperty('--foreground', currentTheme.foreground);
              root.classList.remove('dark');
            }
          }
          
          // 立即执行主题初始化
          initTheme();
          
          // 页面加载完成后再次确保主题正确
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initTheme);
          } else {
            initTheme();
          }
        })();
      `,
    },
  ],
});
