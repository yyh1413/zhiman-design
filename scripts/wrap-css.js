const fs = require('fs');
const path = require('path');

// 读取生成的 CSS 文件
const cssPath = path.join(__dirname, '../dist/styles.css');
const css = fs.readFileSync(cssPath, 'utf8');

// 包装在 @layer base 中
const wrappedCss = `@layer base {
${css}
}`;

// 写回文件
fs.writeFileSync(cssPath, wrappedCss);

console.log('✅ CSS 已成功包装在 @layer base 中'); 