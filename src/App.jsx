import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CodeBracketIcon, CheckCircleIcon, PencilIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import JsonFormatter from './components/JsonFormatter'
import JsonValidator from './components/JsonValidator'
import JsonEditor from './components/JsonEditor'
import Blog from './components/Blog'
import XmlToJsonGuide from './components/articles/XmlToJsonGuide'
import Footer from './components/Footer'
import { trackPageView } from './utils/analytics'
import JsonConverter from './components/JsonConverter'

// 路由跟踪组件
function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    // 跟踪页面访问
    trackPageView(location.pathname);
  }, [location]);

  return null;
}

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* 英雄区域 - 网站主要展示部分 */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          {/* 标题动画 */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">JSON Tools</span>
          </motion.h1>
          {/* SEO优化的副标题 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-semibold mb-4 text-gray-200"
          >
            Format, Validate, and Edit JSON Online
          </motion.h2>
          {/* 描述文字动画 */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Free online JSON tools for developers. Format JSON with custom indentation, 
            validate JSON syntax, and edit JSON with real-time preview. Simple, fast, and secure.
          </motion.p>
          {/* 主要行动按钮 */}
          <Link to="/formatter">
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold 
              text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              Try JSON Formatter Now
            </motion.button>
          </Link>
        </div>
      </section>

      {/* 功能卡片区域 */}
      <section className="py-20 px-4" aria-label="Features">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* JSON Formatter 卡片 */}
            <Link to="/formatter">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 
                transition-all duration-300 border border-white/20"
              >
                <CodeBracketIcon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">JSON Formatter</h3>
                <p className="text-gray-400">
                  Format and beautify your JSON data with custom indentation, syntax highlighting, 
                  and key sorting. Support for file upload and copying to clipboard.
                </p>
              </motion.div>
            </Link>

            {/* JSON Validator 卡片 */}
            <Link to="/validator">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 
                transition-all duration-300 border border-white/20"
              >
                <CheckCircleIcon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">JSON Validator</h3>
                <p className="text-gray-400">
                  Validate your JSON data structure with detailed error messages. 
                  Real-time validation and syntax checking for quick debugging.
                </p>
              </motion.div>
            </Link>

            {/* JSON Editor 卡片 */}
            <Link to="/editor">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 
                transition-all duration-300 border border-white/20"
              >
                <PencilIcon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">JSON Editor</h3>
                <p className="text-gray-400">
                  Powerful JSON editor with real-time preview, syntax highlighting, 
                  and auto-completion. Edit and validate JSON simultaneously.
                </p>
              </motion.div>
            </Link>

            {/* JSON Converter 卡片 */}
            <Link to="/converter">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 
                transition-all duration-300 border border-white/20"
              >
                <ArrowsRightLeftIcon className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">JSON Converter</h3>
                <p className="text-gray-400">
                  Convert JSON to various formats including XML, YAML, Java, Kotlin, and more. 
                  Support for multiple programming languages.
                </p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <RouteTracker />
        
        {/* 导航栏 */}
        <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  JSON Tools - Format & Validate
                </h1>
              </Link>
              {/* 导航链接 */}
              <div className="hidden md:flex space-x-6 text-white">
                <Link to="/formatter" className="hover:text-blue-400 transition-colors">JSON Formatter</Link>
                <Link to="/validator" className="hover:text-blue-400 transition-colors">JSON Validator</Link>
                <Link to="/editor" className="hover:text-blue-400 transition-colors">JSON Editor</Link>
                <Link to="/converter" className="hover:text-blue-400 transition-colors">JSON Converter</Link>
                <Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* 主要内容区域 */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formatter" element={<JsonFormatter />} />
            <Route path="/validator" element={<JsonValidator />} />
            <Route path="/editor" element={<JsonEditor />} />
            <Route path="/converter" element={<JsonConverter />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/xml-to-json-conversion-guide" element={<XmlToJsonGuide />} />
          </Routes>
        </main>

        {/* 页脚 */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
