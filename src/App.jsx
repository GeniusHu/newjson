import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CodeBracketIcon, CheckCircleIcon, PencilIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { trackPageView } from './utils/analytics'
import JsonFormatter from './components/JsonFormatter'
import JsonValidator from './components/JsonValidator'
import JsonEditor from './components/JsonEditor'
import JsonConverter from './components/JsonConverter'
import Blog from './components/Blog'
import XmlToJsonGuide from './components/articles/XmlToJsonGuide'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import Breadcrumb from './components/Breadcrumb'
import LanguageSwitcher from './components/LanguageSwitcher'

// 主应用组件
function AppContent() {
  const location = useLocation();
  const { t } = useTranslation();

  // 监听路由变化时跟踪页面访问
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
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
            <div className="hidden md:flex items-center space-x-6 text-white">
              <Link to="/formatter" className="hover:text-blue-400 transition-colors">
                {t('common.format')}
              </Link>
              <Link to="/validator" className="hover:text-blue-400 transition-colors">
                {t('common.validate')}
              </Link>
              <Link to="/editor" className="hover:text-blue-400 transition-colors">
                {t('common.edit')}
              </Link>
              <Link to="/converter" className="hover:text-blue-400 transition-colors">
                {t('common.convert')}
              </Link>
              <Link to="/blog" className="hover:text-blue-400 transition-colors">
                Blog
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* 面包屑导航 */}
      <div className="mt-16">
        <Breadcrumb />
      </div>

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* 页脚 */}
      <Footer />
    </div>
  );
}

// Home 组件
function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* 英雄区域 */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {t('home.title')}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-200">
              {t('home.subtitle')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('home.description')}
            </p>
            <Link to="/formatter">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold 
                text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                {t('home.tryNow')}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 功能卡片区域 */}
      <section className="py-20 px-4" aria-label="Features">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* JSON Formatter 卡片 */}
            <Link to="/formatter" className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 
                hover:scale-105 border border-white/20">
                <CodeBracketIcon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{t('formatter.title')}</h3>
                <p className="text-gray-400">
                  {t('formatter.description')}
                </p>
              </div>
            </Link>

            {/* JSON Validator 卡片 */}
            <Link to="/validator" className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 
                hover:scale-105 border border-white/20">
                <CheckCircleIcon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{t('validator.title')}</h3>
                <p className="text-gray-400">
                  {t('validator.description')}
                </p>
              </div>
            </Link>

            {/* JSON Editor 卡片 */}
            <Link to="/editor" className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 
                hover:scale-105 border border-white/20">
                <PencilIcon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{t('editor.title')}</h3>
                <p className="text-gray-400">
                  {t('editor.description')}
                </p>
              </div>
            </Link>

            {/* JSON Converter 卡片 */}
            <Link to="/converter" className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 
                hover:scale-105 border border-white/20">
                <ArrowsRightLeftIcon className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{t('converter.title')}</h3>
                <p className="text-gray-400">
                  {t('converter.description')}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// App 组件
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App
