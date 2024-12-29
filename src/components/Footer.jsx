import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 工具链接 */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('common.tools')}</h4>
            <ul className="space-y-2">
              <li><Link to="/formatter" className="hover:text-blue-400 transition-colors">{t('formatter.title')}</Link></li>
              <li><Link to="/validator" className="hover:text-blue-400 transition-colors">{t('validator.title')}</Link></li>
              <li><Link to="/editor" className="hover:text-blue-400 transition-colors">{t('editor.title')}</Link></li>
            </ul>
          </div>

          {/* 功能特点 */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('common.features')}</h4>
            <ul className="space-y-2">
              <li>{t('formatter.indentation')}</li>
              <li>{t('formatter.sortKeys')}</li>
              <li>{t('validator.validJson')}</li>
              <li>{t('common.upload')}</li>
              <li>{t('editor.preview')}</li>
            </ul>
          </div>

          {/* 开发者资源 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Developer Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://www.json.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">JSON Specification</a></li>
              <li><a href="https://jsonlint.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">JSON Lint</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">MDN JSON Documentation</a></li>
            </ul>
          </div>

          {/* 关于我们 */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('common.about')}</h4>
            <p className="mb-4">{t('home.description')}</p>
            <p className="text-sm">{t('footer.rights')}</p>
          </div>
        </div>

        {/* 底部链接 */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm">
          <div className="flex flex-wrap justify-between items-center">
            <div className="space-x-4">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">{t('common.contact')}</Link>
            </div>
            <div className="mt-4 md:mt-0">
              <p>{t('footer.builtWith')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 