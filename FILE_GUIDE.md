# 文件快速导航指南

## 配置文件
| 文件名 | 位置 | 主要用途 |
|--------|------|----------|
| `package.json` | `/` | 项目依赖和脚本管理 |
| `vite.config.js` | `/` | Vite构建配置 |
| `postcss.config.js` | `/` | CSS处理配置 |
| `tailwind.config.js` | `/` | Tailwind样式配置 |

## 源代码文件
| 文件名 | 位置 | 主要用途 |
|--------|------|----------|
| `main.jsx` | `/src` | 应用入口 |
| `App.jsx` | `/src` | 根组件和路由 |
| `index.css` | `/src` | 全局样式 |

## 功能组件
| 文件名 | 位置 | 主要用途 |
|--------|------|----------|
| `JsonFormatter.jsx` | `/src/components` | JSON格式化功能 |
| `JsonValidator.jsx` | `/src/components` | JSON验证功能 |
| `JsonEditor.jsx` | `/src/components` | JSON编辑功能 |

## 文档文件
| 文件名 | 位置 | 主要用途 |
|--------|------|----------|
| `PROJECT_STRUCTURE.md` | `/` | 详细项目文档 |
| `FILE_GUIDE.md` | `/` | 文件快速导航 |

## 常见修改场景

### 样式修改
- 全局样式 → `src/index.css`
- 主题配置 → `tailwind.config.js`
- 组件样式 → 对应组件文件

### 功能修改
- 格式化功能 → `src/components/JsonFormatter.jsx`
- 验证功能 → `src/components/JsonValidator.jsx`
- 编辑功能 → `src/components/JsonEditor.jsx`

### 路由修改
- 路由配置 → `src/App.jsx`

### 构建配置
- 构建选项 → `vite.config.js`
- 依赖管理 → `package.json` 