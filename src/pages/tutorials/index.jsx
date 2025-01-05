import SEOHead from '@/components/SEOHead'

export default function Tutorials() {
  return (
    <>
      <SEOHead
        title="JSON 教程 - 完整的 JSON 学习指南 | JSONFormat.org"
        description="提供完整的 JSON 教程，包括基础语法、高级用法、最佳实践等。适合初学者和专业开发者。"
        keywords="JSON教程,JSON语法,JSON示例,JSON学习"
        canonicalUrl="https://www.jsonformat.org/tutorials"
      />
      
      <div className="tutorial-content">
        <h1>JSON 完整教程</h1>
        <div className="tutorial-list">
          {/* 教程目录 */}
          <article>
            <h2>JSON 基础入门</h2>
            <p>从零开始学习 JSON，掌握基本语法和使用方法...</p>
          </article>
          {/* 更多教程内容 */}
        </div>
      </div>
    </>
  )
} 