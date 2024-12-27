import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 工具链接 */}
          <div>
            <h4 className="text-white font-semibold mb-4">JSON Tools</h4>
            <ul className="space-y-2">
              <li><Link to="/formatter" className="hover:text-blue-400 transition-colors">JSON Formatter</Link></li>
              <li><Link to="/validator" className="hover:text-blue-400 transition-colors">JSON Validator</Link></li>
              <li><Link to="/editor" className="hover:text-blue-400 transition-colors">JSON Editor</Link></li>
            </ul>
          </div>

          {/* 功能特点 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>Custom Indentation</li>
              <li>Syntax Highlighting</li>
              <li>Error Detection</li>
              <li>File Upload Support</li>
              <li>Real-time Preview</li>
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
            <h4 className="text-white font-semibold mb-4">About</h4>
            <p className="mb-4">Professional JSON tools for developers. Free, fast, and secure online JSON formatting and validation services.</p>
            <p className="text-sm">© 2024 JSON Tools. All rights reserved.</p>
          </div>
        </div>

        {/* 底部链接 */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm">
          <div className="flex flex-wrap justify-between items-center">
            <div className="space-x-4">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            </div>
            <div className="mt-4 md:mt-0">
              <p>Built with ❤️ for developers worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 