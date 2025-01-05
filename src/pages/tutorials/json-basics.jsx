import SEOHead from '@/components/SEOHead'

export default function JsonBasicsTutorial() {
  return (
    <>
      <SEOHead
        title="JSON基础教程：10分钟掌握JSON | JSONFormat.org"
        description="通过实例详细讲解JSON的基础语法、数据类型、最佳实践。适合初学者的JSON入门教程。"
        keywords="JSON教程,JSON语法,JSON示例,JSON入门,JSON数据类型"
        canonicalUrl="https://www.jsonformat.org/tutorials/json-basics"
      />
      
      <article className="tutorial-content">
        <h1>JSON基础教程</h1>
        
        <section>
          <h2>什么是JSON？</h2>
          <p>JSON (JavaScript Object Notation) 是一种轻量级的数据交换格式...</p>
        </section>

        <section>
          <h2>JSON语法规则</h2>
          <pre><code>{`{
  "name": "JSON Tutorial",
  "type": "article",
  "difficulty": "beginner"
}`}</code></pre>
        </section>

        {/* 添加更多教程内容 */}
      </article>
    </>
  )
} 