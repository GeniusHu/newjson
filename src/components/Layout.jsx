import { useEffect } from 'react'

export default function Layout({ children }) {
  useEffect(() => {
    // 实现性能监控
    if (typeof window !== 'undefined') {
      // 记录核心网页指标
      webVitals.getCLS(console.log);
      webVitals.getFID(console.log);
      webVitals.getLCP(console.log);
    }
  }, [])

  return (
    <div className="layout">
      <header>{/* ... */}</header>
      <main>{children}</main>
      <footer>
        {/* 添加网站地图链接 */}
        <div className="footer-links">
          <a href="/sitemap.html">网站地图</a>
          <a href="/about">关于我们</a>
          <a href="/contact">联系我们</a>
        </div>
      </footer>
    </div>
  )
} 