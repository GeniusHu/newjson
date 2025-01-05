const TOOL_LIST = [
  {
    path: '/formatter',
    title: 'JSON格式化',
    description: '美化和格式化你的JSON数据'
  },
  {
    path: '/validator',
    title: 'JSON验证器',
    description: '验证JSON数据的正确性'
  },
  {
    path: '/converter',
    title: 'JSON转换器',
    description: '在不同格式间转换JSON数据'
  }
]

const RelatedTools = ({ currentTool }) => {
  const relatedTools = TOOL_LIST.filter(tool => tool.path !== `/${currentTool}`)
  
  return (
    <div className="related-tools">
      <h3>相关工具</h3>
      <div className="tools-grid">
        {relatedTools.map(tool => (
          <a key={tool.path} href={tool.path} className="tool-card">
            <h4>{tool.title}</h4>
            <p>{tool.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default RelatedTools 