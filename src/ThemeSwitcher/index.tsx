import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { themes, setTheme, getCurrentTheme, type Theme } from '../lib/themes';

// 主题切换器组件
export const ThemeSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState('teal');
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const { themeName, isDark: dark } = getCurrentTheme();
    setCurrentTheme(themeName);
    setIsDark(dark);
  }, []);

  const handleThemeChange = (themeName: string) => {
    setCurrentTheme(themeName);
    setTheme(themeName, isDark);
    setIsOpen(false);
  };

  const handleModeToggle = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    setTheme(currentTheme, newIsDark);
    
    // 切换HTML类
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const currentThemeObj = themes.find(t => t.name === currentTheme);

  return (
    <div className="relative inline-block">
      {/* 主题选择按钮 */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
      >
        <div 
          className="w-3 h-3 rounded-full border border-border"
          style={{ backgroundColor: `hsl(${currentThemeObj?.colors.primary})` }}
        />
        {currentThemeObj?.label}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Button>

      {/* 主题选项面板 */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-card border border-border rounded-md shadow-lg z-50">
          <div className="p-2">
            <div className="text-sm font-medium text-muted-foreground mb-2 px-2">选择主题</div>
            <div className="space-y-1">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme.name)}
                  className={`
                    w-full flex items-center gap-3 px-2 py-2 text-sm rounded-sm transition-colors
                    hover:bg-accent hover:text-accent-foreground
                    ${currentTheme === theme.name ? 'bg-accent text-accent-foreground' : ''}
                  `}
                >
                  <div 
                    className="w-4 h-4 rounded-full border border-border"
                    style={{ backgroundColor: `hsl(${theme.colors.primary})` }}
                  />
                  {theme.label}
                  {currentTheme === theme.name && (
                    <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
            
            {/* 明暗模式切换 */}
            <div className="border-t border-border mt-2 pt-2">
              <button
                onClick={handleModeToggle}
                className="w-full flex items-center gap-3 px-2 py-2 text-sm rounded-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {isDark ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                )}
                {isDark ? '浅色模式' : '深色模式'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 点击外部关闭 */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

// 简化的主题展示组件
export const ThemeDemo: React.FC = () => {
  return (
    <div className="space-y-4 p-4 bg-card border border-border rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">主题演示</h3>
        <ThemeSwitcher />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button variant="default">默认按钮</Button>
        <Button variant="outline">边框按钮</Button>
        <Button variant="destructive">危险按钮</Button>
        <Button variant="ghost">幽灵按钮</Button>
        <Button variant="secondary">次要按钮</Button>
        <Button variant="gradientPrimary">渐变按钮</Button>
        <Button variant="glass">玻璃按钮</Button>
        <Button variant="brandActive">品牌按钮</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-muted rounded-lg">
          <h4 className="font-medium text-foreground mb-2">卡片示例</h4>
          <p className="text-muted-foreground text-sm">
            这是一个使用主题色彩的卡片示例。背景色和文字颜色会随主题变化。
          </p>
        </div>
        
        <div className="p-4 bg-accent rounded-lg">
          <h4 className="font-medium text-accent-foreground mb-2">强调内容</h4>
          <p className="text-accent-foreground/70 text-sm">
            强调区域使用不同的背景色来突出重要内容。
          </p>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm">成功状态</span>
        <span className="px-3 py-1 bg-warning/10 text-warning rounded-full text-sm">警告状态</span>
        <span className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm">错误状态</span>
        <span className="px-3 py-1 bg-info/10 text-info rounded-full text-sm">信息状态</span>
      </div>
    </div>
  );
}; 