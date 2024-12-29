import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

// Route mapping
const routeMap = {
  formatter: 'JSON Formatter',
  validator: 'JSON Validator',
  editor: 'JSON Editor',
  converter: 'JSON Converter',
  blog: 'Blog',
  'xml-to-json-conversion-guide': 'XML to JSON Guide'
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Don't show breadcrumb on homepage
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <Link to="/" className="hover:text-white transition-colors">
            <HomeIcon className="w-4 h-4" />
          </Link>
          
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <div key={name} className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 mx-2" />
                {isLast ? (
                  <span className="text-white font-medium">
                    {routeMap[name] || name}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="hover:text-white transition-colors"
                  >
                    {routeMap[name] || name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 