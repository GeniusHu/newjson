import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | JSON Tools</title>
        <meta name="description" content="The page you are looking for could not be found." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-300 mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r 
                from-blue-500 to-purple-600 rounded-lg font-semibold text-white 
                hover:from-blue-600 hover:to-purple-700 transition-all duration-300 
                shadow-lg"
            >
              <HomeIcon className="w-5 h-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black/20 
                rounded-lg font-semibold text-white hover:bg-black/30 
                transition-all duration-300"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 