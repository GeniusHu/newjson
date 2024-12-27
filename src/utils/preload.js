/**
 * 预加载工具
 * 用于提前加载即将需要的组件
 */

// 预加载组件
export function preloadComponent(importFn) {
  try {
    importFn();
  } catch (err) {
    // 忽略预加载错误
  }
}

// 预加载相关组件
export function preloadRelatedComponents(currentPath) {
  // 根据当前路径预加载相关组件
  switch (currentPath) {
    case '/formatter':
      // 格式化器页面可能会跳转到验证器
      preloadComponent(() => import('../components/JsonValidator'));
      break;
    case '/validator':
      // 验证器页面可能会跳转到编辑器
      preloadComponent(() => import('../components/JsonEditor'));
      break;
    case '/editor':
      // 编辑器页面可能会跳转到转换器
      preloadComponent(() => import('../components/JsonConverter'));
      break;
    case '/blog':
      // 博客列表页面可能会跳转到文章页
      preloadComponent(() => import('../components/articles/XmlToJsonGuide'));
      break;
    default:
      break;
  }
}

// 监听鼠标悬停事件来预加载
export function setupPreloadOnHover() {
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.addEventListener('mouseenter', () => {
      const path = link.getAttribute('href');
      preloadRelatedComponents(path);
    });
  });
} 