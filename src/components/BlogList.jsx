import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

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
        </div>
      </div>
    </div>
  );
} 