const fs = require('fs');
const path = require('path');

// 清理 index.js
const indexPath = path.join(__dirname, '../dist/index.js');
if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // 删除 __reExport 行
  content = content.replace(/__reExport\(src_exports, require\("\.\/components\/ui"\), module\.exports\);\n/g, '');
  
  // 删除 ...require("./components/ui") 部分
  content = content.replace(/,\s*\.\.\.require\("\.\/components\/ui"\)/g, '');
  
  fs.writeFileSync(indexPath, content);
  console.log('✅ 已清理 dist/index.js 中的 UI 组件导出');
} else {
  console.log('❌ dist/index.js 文件不存在');
}

// 清理 index.d.ts
const indexDtsPath = path.join(__dirname, '../dist/index.d.ts');
if (fs.existsSync(indexDtsPath)) {
  let content = fs.readFileSync(indexDtsPath, 'utf8');
  
  // 删除 export * from './components/ui'; 行
  content = content.replace(/export \* from '\.\/components\/ui';\n/g, '');
  
  fs.writeFileSync(indexDtsPath, content);
  console.log('✅ 已清理 dist/index.d.ts 中的 UI 组件导出');
} else {
  console.log('❌ dist/index.d.ts 文件不存在');
}