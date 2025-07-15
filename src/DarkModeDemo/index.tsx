import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { getCurrentTheme, setTheme } from '../lib/themes';

export const DarkModeDemo: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('teal');

  useEffect(() => {
    const { themeName, isDark: dark } = getCurrentTheme();
    setCurrentTheme(themeName);
    setIsDark(dark);
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    setTheme(currentTheme, newIsDark);
    
    // 切换HTML的dark类
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="space-y-6 p-6 bg-background text-foreground transition-colors duration-200">
      {/* 模式切换控制 */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-foreground">明暗模式演示</h3>
          <p className="text-muted-foreground">当前模式: {isDark ? '🌙 暗黑模式' : '☀️ 亮色模式'}</p>
        </div>
        
        <Button
          variant="outline"
          onClick={toggleDarkMode}
          className="gap-2"
        >
          {isDark ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
          切换到{isDark ? '亮色' : '暗黑'}模式
        </Button>
      </div>

      {/* 按钮变体在明暗模式下的展示 */}
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-foreground">按钮组件在不同模式下的表现</h4>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Button variant="default">默认按钮</Button>
          <Button variant="destructive">危险按钮</Button>
          <Button variant="outline">边框按钮</Button>
          <Button variant="secondary">次要按钮</Button>
          <Button variant="ghost">幽灵按钮</Button>
          <Button variant="gradientPrimary">渐变按钮</Button>
        </div>
      </div>

      {/* 卡片在明暗模式下的展示 */}
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-foreground">卡片组件自适应</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 主要卡片 */}
          <div className="p-4 bg-card border border-border rounded-lg shadow-sm">
            <h5 className="font-semibold text-card-foreground mb-2">主要内容卡片</h5>
            <p className="text-muted-foreground text-sm">
              这是一个使用主题颜色的卡片，背景和文字会根据明暗模式自动调整。
            </p>
            <Button variant="outline" size="sm" className="mt-3">
              操作按钮
            </Button>
          </div>

          {/* 强调卡片 */}
          <div className="p-4 bg-accent border border-border rounded-lg">
            <h5 className="font-semibold text-accent-foreground mb-2">强调内容</h5>
            <p className="text-accent-foreground/70 text-sm">
              强调区域使用不同的背景色来突出重要内容，同样支持明暗模式。
            </p>
            <Button variant="default" size="sm" className="mt-3">
              主要操作
            </Button>
          </div>
        </div>
      </div>

      {/* 状态指示器 */}
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-foreground">状态指示器</h4>
        
        <div className="flex gap-3 flex-wrap">
          <div className="px-3 py-2 bg-success/10 dark:bg-success/20 text-success rounded-lg text-sm border border-success/20">
            ✅ 成功状态
          </div>
          <div className="px-3 py-2 bg-warning/10 dark:bg-warning/20 text-warning rounded-lg text-sm border border-warning/20">
            ⚠️ 警告状态
          </div>
          <div className="px-3 py-2 bg-destructive/10 dark:bg-destructive/20 text-destructive rounded-lg text-sm border border-destructive/20">
            ❌ 错误状态
          </div>
          <div className="px-3 py-2 bg-info/10 dark:bg-info/20 text-info rounded-lg text-sm border border-info/20">
            ℹ️ 信息状态
          </div>
        </div>
      </div>

      {/* 表单元素 */}
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-foreground">表单元素</h4>
        
        <div className="space-y-3">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">输入框示例</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="请输入内容" 
                className="flex-1 px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
              <Button variant="outline" size="sm">搜索</Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">选择框</label>
            <select className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
              <option>选项一</option>
              <option>选项二</option>
              <option>选项三</option>
            </select>
          </div>
        </div>
      </div>

      {/* 技术说明 */}
      <div className="p-4 bg-muted/50 border border-border rounded-lg">
        <h5 className="font-medium text-foreground mb-2">🛠️ 技术实现</h5>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>• <strong>CSS 变量系统:</strong> 基于 HSL 颜色空间的动态主题切换</p>
          <p>• <strong>Tailwind 集成:</strong> 使用 <code className="px-1 py-0.5 bg-background rounded text-xs">dark:</code> 前缀类名</p>
          <p>• <strong>平滑过渡:</strong> 所有颜色变化都有 0.2s 的过渡动画</p>
          <p>• <strong>状态持久化:</strong> 用户选择会保存到 localStorage</p>
        </div>
      </div>
    </div>
  );
};

// 简化的明暗模式切换按钮
export const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const { isDark: dark } = getCurrentTheme();
    setIsDark(dark);
  }, []);

  const toggleDarkMode = () => {
    const { themeName } = getCurrentTheme();
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    setTheme(themeName, newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      className="w-9 h-9"
    >
      {isDark ? (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </Button>
  );
}; 