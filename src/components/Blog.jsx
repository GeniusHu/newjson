/**
 * 博客列表组件
 * 
 * 功能特点:
 * 1. 展示所有博客文章列表
 * 2. 文章分类展示
 * 3. 响应式网格布局
 * 4. 动画效果
 * 
 * 文章信息显示:
 * 1. 标题
 * 2. 发布日期
 * 3. 阅读时间
 * 4. 文章摘要
 * 5. 分类标签
 * 
 * 交互功能:
 * 1. 文章链接跳转
 * 2. 分类筛选
 * 3. 搜索功能
 * 4. 分页导航
 * 
 * 注意事项:
 * 1. 确保所有文章链接正确
 * 2. 保持文章摘要长度一致
 * 3. 定期更新文章内容
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "How to Convert XML to JSON: A Step-by-Step Guide with Tool Recommendations",
      slug: "xml-to-json-conversion-guide",
      excerpt: "Learn how to effectively convert XML to JSON format using various methods and tools. This comprehensive guide covers manual conversion, online tools, and programming solutions.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Tutorials"
    },
    // More articles will be added here
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4">
      <div className="container mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            JSON Tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Tutorials, guides, and best practices for working with JSON data
          </motion.p>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 
              transition-all duration-300 border border-white/20"
            >
              <Link to={`/blog/${article.slug}`}>
                <span className="text-blue-400 text-sm font-medium mb-2 block">
                  {article.category}
                </span>
                <h2 className="text-xl font-semibold mb-3 text-white hover:text-blue-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 