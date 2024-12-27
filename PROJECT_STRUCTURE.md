# JSON Tools 项目结构文档

## 项目概述
这是一个在线JSON工具集网站，提供JSON格式化、验证和编辑功能。使用React + Vite构建，采用现代化的UI设计和用户体验。

## 目录结构

### 根目录配置文件
- `package.json` - 项目依赖和脚本配置
  - 定义项目依赖包
  - 定义开发和构建脚本
  - 配置项目元数据

- `vite.config.js` - Vite构建工具配置
  - 配置构建插件
  - 设置构建输出选项
  - 配置开发服务器

- `postcss.config.js` - PostCSS配置
  - 配置CSS处理插件
  - 设置Tailwind和Autoprefixer

- `tailwind.config.js` - Tailwind CSS配置
  - 自定义主题设置
  - 配置容器样式
  - 定义动画效果

### 源代码目录 (`src/`)

#### 主要文件
- `main.jsx` - 应用入口文件
  - 渲染根组件
  - 导入全局样式

- `App.jsx` - 根组件
  - 实现路由配置
  - 定义页面布局
  - 包含导航栏和主页面

- `index.css` - 全局样式文件
  - 导入Tailwind基础样式
  - 定义全局CSS变量
  - 设置自定义组件样式

#### 组件目录 (`src/components/`)
- `JsonFormatter.jsx` - JSON格式化组件
  - 实现JSON格式化功能
  - 支持文件上传
  - 提供多种格式化选项
  - 包含复制和清除功能

- `JsonValidator.jsx` - JSON验证组件
  - 验证JSON语法
  - 显示详细错误信息
  - 提供实时验证

- `JsonEditor.jsx` - JSON编辑器组件
  - 提供实时编辑功能
  - 支持语法高亮
  - 实时预览功能

#### 工具目录 (`src/utils/`)
- `analytics.js` - Google Analytics 工具
  - 提供页面访问跟踪
  - 提供事件跟踪
  - 处理路由变化

## 功能模块

### 1. 格式化功能
- 自定义缩进
- 键值排序
- 压缩/展开切换
- 文件上传支持
- 复制到剪贴板

### 2. 验证功能
- 语法检查
- 错误提示
- 实时验证

### 3. 编辑功能
- 实时预览
- 语法高亮
- 自动补全
- 错误检测

## 样式主题
- 使用深色主题
- 渐变色按钮
- 毛玻璃效果
- 响应式设计
- 动画过渡效果

## 开发指南

### 安装依赖
```bash
npm install
```

### 开发服务器
```bash
npm run dev
```

### 构建项目
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

## 注意事项
1. 修改样式时注意检查 `tailwind.config.js`
2. 添加新路由需要在 `App.jsx` 中配置
3. 新增组件请放在 `components` 目录下
4. 全局样式修改请在 `index.css` 中进行

## 部署说明
- 使用 Vercel 部署
- 确保 `vite.config.js` 中的 base 配置正确
- 注意环境变量的设置

## 维护建议
1. 定期更新依赖包
2. 保持代码注释的完整性
3. 遵循项目既定的代码风格
4. 进行代码审查和测试

## 扩展计划
1. 添加更多JSON工具功能
2. 优化移动端体验
3. 添加主题切换功能
4. 实现本地存储功能
5. 添加更多文件格式支持

## 分析和跟踪

### Google Analytics
- 跟踪ID: `G-Q3VTNFXX6T`
- 配置文件: `index.html`
- 跟踪工具: `src/utils/analytics.js`

#### 跟踪内容
1. 页面访问
   - 自动跟踪路由变化
   - 记录访问路径

2. 用户行为
   - 格式化操作
   - 验证操作
   - 文件上传
   - 复制操作

#### 实现方式
- 使用 gtag.js
- 路由跟踪组件
- 事件跟踪函数 