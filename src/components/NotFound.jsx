import { Link } from 'react-router-dom';

// 404 Page Component
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          Sorry, the page you are looking for does not exist or has been removed.
        </p>
        <Link 
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold 
            text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
} 