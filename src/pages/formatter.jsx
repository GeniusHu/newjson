import SEOHead from '@/components/SEOHead'
import RelatedTools from '@/components/RelatedTools'

export default function JsonFormatter() {
  return (
    <>
      <SEOHead
        title="在线JSON格式化工具 - 免费JSON美化、压缩 | JSONFormat.org"
        description="最好用的在线JSON格式化工具，支持JSON美化、压缩、验证、修复等功能。快速格式化混乱的JSON代码。"
        keywords="JSON格式化,JSON美化,JSON压缩,JSON校验,JSON在线工具"
        canonicalUrl="https://www.jsonformat.org/formatter"
      />

      <div className="tool-container">
        <header className="tool-header">
          <h1>JSON格式化工具</h1>
          <p className="tool-description">
            输入或粘贴JSON数据，自动进行格式化和美化。支持大文件处理，具有语法高亮功能。
          </p>
        </header>

        {/* 工具主体部分 */}
        
        <section className="features-section">
          <h2>主要功能</h2>
          <ul>
            <li>✨ 自动格式化和美化JSON</li>
            <li>🔍 实时语法错误检测</li>
            <li>📋 一键复制格式化结果</li>
            <li>🔄 支持JSON压缩</li>
          </ul>
        </section>

        <RelatedTools currentTool="formatter" />
      </div>
    </>
  )
} 