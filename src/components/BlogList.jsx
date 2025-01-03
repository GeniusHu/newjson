import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import JsoncGuide from './articles/JsoncGuide';
import JsonEscapeGuide from './articles/JsonEscapeGuide';
import JsonCompressionGuide from './articles/JsonCompressionGuide';
import JsonStringConversionGuide from './articles/JsonStringConversionGuide';
import JsonHttpExtractGuide from './articles/JsonHttpExtractGuide';

export default function BlogList() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-300">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid gap-8">
          {/* JSON HTTP Extract Guide */}
          <Link 
            to="/blog/json-http-extract"
            className="block group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border 
              border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 
              hover:scale-[1.02]"
          >
            <div className="flex items-start gap-8 p-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 
                  transition-colors">
                  {t('blog.jsonHttpExtract.title')}
                </h2>
                <p className="text-gray-300 mb-6">
                  {t('blog.jsonHttpExtract.description')}
                </p>
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5" />
                    <time dateTime="2024-01-15">January 15, 2024</time>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <span>12 min read</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                rounded-lg flex items-center justify-center text-2xl font-mono text-cyan-400 
                group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                HTTP → JSON
              </div>
            </div>
          </Link>

          {/* JSON String Conversion Guide */}
          <Link 
            to="/blog/json-string-conversion"
            className="block group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border 
              border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 
              hover:scale-[1.02]"
          >
            <div className="flex items-start gap-8 p-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 
                  transition-colors">
                  {t('blog.jsonStringConversion.title')}
                </h2>
                <p className="text-gray-300 mb-6">
                  {t('blog.jsonStringConversion.description')}
                </p>
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5" />
                    <time dateTime="2024-01-15">January 15, 2024</time>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <span>10 min read</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                rounded-lg flex items-center justify-center text-2xl font-mono text-indigo-400 
                group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                String → JSON
              </div>
            </div>
          </Link>

          {/* XML to JSON Guide */}
          <Link 
            to="/blog/xml-to-json"
            className="block group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border 
              border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 
              hover:scale-[1.02]"
          >
            <div className="flex items-start gap-8 p-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 
                  transition-colors">
                  {t('blog.xmlToJson.title')}
                </h2>
                <p className="text-gray-300 mb-6">
                  {t('blog.xmlToJson.description')}
                </p>
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5" />
                    <time dateTime="2024-01-15">January 15, 2024</time>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <span>8 min read</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                rounded-lg flex items-center justify-center text-2xl font-mono text-blue-400 
                group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                XML → JSON
              </div>
            </div>
          </Link>

          {/* JSON to YAML Guide */}
          <Link 
            to="/blog/json-yaml"
            className="block group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border 
              border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 
              hover:scale-[1.02]"
          >
            <div className="flex items-start gap-8 p-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 
                  transition-colors">
                  {t('blog.jsonToYaml.title')}
                </h2>
                <p className="text-gray-300 mb-6">
                  {t('blog.jsonToYaml.description')}
                </p>
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5" />
                    <time dateTime="2024-01-15">January 15, 2024</time>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <span>10 min read</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                rounded-lg flex items-center justify-center text-2xl font-mono text-purple-400 
                group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                JSON ↔ YAML
              </div>
            </div>
          </Link>

          {/* JSONC Guide */}
          <Link 
            to="/blog/jsonc-guide"
            className="block group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border 
              border-green-500/20 hover:border-green-500/40 transition-all duration-300 
              hover:scale-[1.02]"
          >
            <div className="flex items-start gap-8 p-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 
                  transition-colors">
                  {t('blog.jsoncGuide.title')}
                </h2>
                <p className="text-gray-300 mb-6">
                  {t('blog.jsoncGuide.description')}
                </p>
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5" />
                    <time dateTime="2024-01-15">January 15, 2024</time>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <span>10 min read</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                rounded-lg flex items-center justify-center text-2xl font-mono text-green-400 
                group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                JSONC
              </div>
            </div>
          </Link>

          {/* JSON Escape Guide */}
          <Link 
            to="/blog/json-escape-guide"
            className="block group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border 
              border-red-500/20 hover:border-red-500/40 transition-all duration-300 
              hover:scale-[1.02]"
          >
            <div className="flex items-start gap-8 p-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 
                  transition-colors">
                  {t('blog.jsonEscapeGuide.title')}
                </h2>
                <p className="text-gray-300 mb-6">
                  {t('blog.jsonEscapeGuide.description')}
                </p>
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5" />
                    <time dateTime="2024-01-15">January 15, 2024</time>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <span>10 min read</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                rounded-lg flex items-center justify-center text-2xl font-mono text-red-400 
                group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                JSON 转义和反转义
              </div>
            </div>
          </Link>

          {/* JSON Compression Guide */}
          <Link 
            to="/blog/json-compression-guide"
            className="block group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border 
              border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 
              hover:scale-[1.02]"
          >
            <div className="flex items-start gap-8 p-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 
                  transition-colors">
                  {t('blog.jsonCompressionGuide.title')}
                </h2>
                <p className="text-gray-300 mb-6">
                  {t('blog.jsonCompressionGuide.description')}
                </p>
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5" />
                    <time dateTime="2024-01-15">January 15, 2024</time>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5" />
                    <span>10 min read</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                rounded-lg flex items-center justify-center text-2xl font-mono text-yellow-400 
                group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                JSON 压缩和美化
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 