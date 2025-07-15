// 主题类型定义
export interface Theme {
  name: string;
  label: string;
  colors: {
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    destructive: string;
    destructiveForeground: string;
    success: string;
    successForeground: string;
    warning: string;
    warningForeground: string;
    info: string;
    infoForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    border: string;
    input: string;
    ring: string;
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
  };
  darkColors?: Partial<Theme['colors']>;
}

// 预定义主题
export const themes: Theme[] = [
  {
    name: 'teal',
    label: '青绿主题',
    colors: {
      primary: '162 43% 40%',
      primaryForeground: '210 40% 98%',
      secondary: '210 40% 96%',
      secondaryForeground: '222.2 84% 4.9%',
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '210 40% 98%',
      success: '142 76% 36%',
      successForeground: '355.7 100% 97.3%',
      warning: '32 95% 44%',
      warningForeground: '210 40% 98%',
      info: '221.2 83.2% 53.3%',
      infoForeground: '210 40% 98%',
      muted: '210 40% 96%',
      mutedForeground: '215.4 16.3% 46.9%',
      accent: '210 40% 96%',
      accentForeground: '222.2 84% 4.9%',
      border: '214.3 31.8% 91.4%',
      input: '214.3 31.8% 91.4%',
      ring: '162 43% 40%',
      background: '0 0% 100%',
      foreground: '222.2 84% 4.9%',
      card: '0 0% 100%',
      cardForeground: '222.2 84% 4.9%',
    },
    darkColors: {
      primary: '162 43% 50%',
      background: '222.2 84% 4.9%',
      foreground: '210 40% 98%',
      card: '222.2 84% 4.9%',
      cardForeground: '210 40% 98%',
      muted: '217.2 32.6% 17.5%',
      mutedForeground: '215 20.2% 65.1%',
      accent: '217.2 32.6% 17.5%',
      accentForeground: '210 40% 98%',
      border: '217.2 32.6% 17.5%',
      input: '217.2 32.6% 17.5%',
    }
  },
  {
    name: 'blue',
    label: '蓝色主题',
    colors: {
      primary: '221.2 83.2% 53.3%',
      primaryForeground: '210 40% 98%',
      secondary: '210 40% 96%',
      secondaryForeground: '222.2 84% 4.9%',
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '210 40% 98%',
      success: '142 76% 36%',
      successForeground: '355.7 100% 97.3%',
      warning: '32 95% 44%',
      warningForeground: '210 40% 98%',
      info: '221.2 83.2% 53.3%',
      infoForeground: '210 40% 98%',
      muted: '210 40% 96%',
      mutedForeground: '215.4 16.3% 46.9%',
      accent: '210 40% 96%',
      accentForeground: '222.2 84% 4.9%',
      border: '214.3 31.8% 91.4%',
      input: '214.3 31.8% 91.4%',
      ring: '221.2 83.2% 53.3%',
      background: '0 0% 100%',
      foreground: '222.2 84% 4.9%',
      card: '0 0% 100%',
      cardForeground: '222.2 84% 4.9%',
    },
    darkColors: {
      primary: '217.2 91.2% 59.8%',
      background: '222.2 84% 4.9%',
      foreground: '210 40% 98%',
      card: '222.2 84% 4.9%',
      cardForeground: '210 40% 98%',
      muted: '217.2 32.6% 17.5%',
      mutedForeground: '215 20.2% 65.1%',
      accent: '217.2 32.6% 17.5%',
      accentForeground: '210 40% 98%',
      border: '217.2 32.6% 17.5%',
      input: '217.2 32.6% 17.5%',
      ring: '217.2 91.2% 59.8%',
    }
  },
  {
    name: 'purple',
    label: '紫色主题',
    colors: {
      primary: '262.1 83.3% 57.8%',
      primaryForeground: '210 40% 98%',
      secondary: '270 3% 87%',
      secondaryForeground: '222.2 84% 4.9%',
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '210 40% 98%',
      success: '142 76% 36%',
      successForeground: '355.7 100% 97.3%',
      warning: '32 95% 44%',
      warningForeground: '210 40% 98%',
      info: '221.2 83.2% 53.3%',
      infoForeground: '210 40% 98%',
      muted: '270 3% 87%',
      mutedForeground: '215.4 16.3% 46.9%',
      accent: '270 3% 87%',
      accentForeground: '222.2 84% 4.9%',
      border: '270 3% 87%',
      input: '270 3% 87%',
      ring: '262.1 83.3% 57.8%',
      background: '0 0% 100%',
      foreground: '222.2 84% 4.9%',
      card: '0 0% 100%',
      cardForeground: '222.2 84% 4.9%',
    },
    darkColors: {
      primary: '263.4 70% 50.4%',
      background: '222.2 84% 4.9%',
      foreground: '210 40% 98%',
      card: '222.2 84% 4.9%',
      cardForeground: '210 40% 98%',
      muted: '217.2 32.6% 17.5%',
      mutedForeground: '215 20.2% 65.1%',
      accent: '217.2 32.6% 17.5%',
      accentForeground: '210 40% 98%',
      border: '217.2 32.6% 17.5%',
      input: '217.2 32.6% 17.5%',
      ring: '263.4 70% 50.4%',
    }
  },
  {
    name: 'rose',
    label: '玫瑰主题',
    colors: {
      primary: '346.8 77.2% 49.8%',
      primaryForeground: '355.7 100% 97.3%',
      secondary: '338.6 25% 94.1%',
      secondaryForeground: '222.2 84% 4.9%',
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '210 40% 98%',
      success: '142 76% 36%',
      successForeground: '355.7 100% 97.3%',
      warning: '32 95% 44%',
      warningForeground: '210 40% 98%',
      info: '221.2 83.2% 53.3%',
      infoForeground: '210 40% 98%',
      muted: '338.6 25% 94.1%',
      mutedForeground: '215.4 16.3% 46.9%',
      accent: '338.6 25% 94.1%',
      accentForeground: '222.2 84% 4.9%',
      border: '338.6 25% 94.1%',
      input: '338.6 25% 94.1%',
      ring: '346.8 77.2% 49.8%',
      background: '0 0% 100%',
      foreground: '222.2 84% 4.9%',
      card: '0 0% 100%',
      cardForeground: '222.2 84% 4.9%',
    },
    darkColors: {
      primary: '346.8 77.2% 49.8%',
      background: '222.2 84% 4.9%',
      foreground: '210 40% 98%',
      card: '222.2 84% 4.9%',
      cardForeground: '210 40% 98%',
      muted: '217.2 32.6% 17.5%',
      mutedForeground: '215 20.2% 65.1%',
      accent: '217.2 32.6% 17.5%',
      accentForeground: '210 40% 98%',
      border: '217.2 32.6% 17.5%',
      input: '217.2 32.6% 17.5%',
      ring: '346.8 77.2% 49.8%',
    }
  },
  {
    name: 'green',
    label: '绿色主题',
    colors: {
      primary: '142 76% 36%',
      primaryForeground: '355.7 100% 97.3%',
      secondary: '138 76% 97%',
      secondaryForeground: '222.2 84% 4.9%',
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '210 40% 98%',
      success: '142 76% 36%',
      successForeground: '355.7 100% 97.3%',
      warning: '32 95% 44%',
      warningForeground: '210 40% 98%',
      info: '221.2 83.2% 53.3%',
      infoForeground: '210 40% 98%',
      muted: '138 76% 97%',
      mutedForeground: '215.4 16.3% 46.9%',
      accent: '138 76% 97%',
      accentForeground: '222.2 84% 4.9%',
      border: '138 76% 97%',
      input: '138 76% 97%',
      ring: '142 76% 36%',
      background: '0 0% 100%',
      foreground: '222.2 84% 4.9%',
      card: '0 0% 100%',
      cardForeground: '222.2 84% 4.9%',
    },
    darkColors: {
      primary: '142 76% 36%',
      background: '222.2 84% 4.9%',
      foreground: '210 40% 98%',
      card: '222.2 84% 4.9%',
      cardForeground: '210 40% 98%',
      muted: '217.2 32.6% 17.5%',
      mutedForeground: '215 20.2% 65.1%',
      accent: '217.2 32.6% 17.5%',
      accentForeground: '210 40% 98%',
      border: '217.2 32.6% 17.5%',
      input: '217.2 32.6% 17.5%',
      ring: '142 76% 36%',
    }
  }
];

// 主题工具函数
export const getTheme = (name: string): Theme | undefined => {
  return themes.find(theme => theme.name === name);
};

export const setTheme = (themeName: string, isDark = false) => {
  const theme = getTheme(themeName);
  if (!theme) return;

  const root = document.documentElement;
  const colors = isDark && theme.darkColors 
    ? { ...theme.colors, ...theme.darkColors }
    : theme.colors;

  // 应用CSS变量
  Object.entries(colors).forEach(([key, value]) => {
    const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    root.style.setProperty(cssVar, value);
  });

  // 保存主题设置
  localStorage.setItem('theme-name', themeName);
  localStorage.setItem('theme-mode', isDark ? 'dark' : 'light');
};

export const getCurrentTheme = (): { themeName: string; isDark: boolean } => {
  const themeName = localStorage.getItem('theme-name') || 'teal';
  const themeMode = localStorage.getItem('theme-mode') || 'light';
  return { themeName, isDark: themeMode === 'dark' };
};

export const initTheme = () => {
  const { themeName, isDark } = getCurrentTheme();
  setTheme(themeName, isDark);
  
  // 设置dark class
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}; 