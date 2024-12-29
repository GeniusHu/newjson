import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRightIcon, 
  ClockIcon, 
  CalendarIcon,
  BookOpenIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export default function JsonToYamlGuide() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>JSON to YAML Conversion Guide | JSON Tools</title>
        <meta name="description" content="Learn how to convert between JSON and YAML formats with our comprehensive guide. Includes best practices, examples, and common pitfalls to avoid." />
        <meta name="keywords" content="json to yaml, yaml to json, yaml converter, json converter, data format conversion, configuration files" />
        <meta property="og:title" content="JSON to YAML Conversion Guide" />
        <meta property="og:description" content="Master JSON and YAML conversion with detailed examples and best practices. Perfect for developers working with configuration files." />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2024-01-15" />
        <meta property="article:modified_time" content="2024-01-15" />
        <meta property="article:section" content="Technical Guide" />
        <meta property="article:tag" content="JSON,YAML,Data Conversion,Configuration" />
        <link rel="canonical" href="https://jsontools.com/blog/json-yaml" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "JSON to YAML Conversion Guide",
            "description": "Learn how to convert between JSON and YAML formats with our comprehensive guide. Includes best practices, examples, and common pitfalls to avoid.",
            "keywords": "json to yaml, yaml to json, yaml converter, json converter",
            "articleBody": "A comprehensive guide to converting between JSON and YAML formats, covering everything from basic concepts to advanced techniques.",
            "author": {
              "@type": "Organization",
              "name": "JSON Tools"
            },
            "publisher": {
              "@type": "Organization",
              "name": "JSON Tools",
              "logo": {
                "@type": "ImageObject",
                "url": "https://jsontools.com/logo.png"
              }
            },
            "datePublished": "2024-01-15",
            "dateModified": "2024-01-15"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-24 pb-16 px-6">
        <article className="container mx-auto py-8 max-w-5xl">
          {/* Article Header */}
          <header className="bg-white/10 backdrop-blur-lg rounded-xl p-12 mb-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                JSON to YAML Conversion Guide
              </h1>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Master the art of converting between JSON and YAML formats. Learn when to use each format
                and how to convert between them efficiently.
              </p>
              <div className="flex items-center justify-center gap-6 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  <time dateTime="2024-01-15">January 15, 2024</time>
                </div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5" />
                  <span>10 min read</span>
                </div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <BookOpenIcon className="w-5 h-5" />
                  <span>Technical Guide</span>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <nav className="bg-black/20 rounded-lg p-8">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <DocumentTextIcon className="w-5 h-5" />
                Table of Contents
              </h2>
              <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-gray-300">
                <li>
                  <a href="#introduction" className="hover:text-blue-400 transition-colors">
                    Introduction to JSON and YAML
                  </a>
                </li>
                <li>
                  <a href="#key-differences" className="hover:text-blue-400 transition-colors">
                    Format Differences
                  </a>
                </li>
                <li>
                  <a href="#conversion-basics" className="hover:text-blue-400 transition-colors">
                    Conversion Basics
                  </a>
                </li>
                <li>
                  <a href="#advanced-features" className="hover:text-blue-400 transition-colors">
                    Advanced Features
                  </a>
                </li>
                <li>
                  <a href="#best-practices" className="hover:text-blue-400 transition-colors">
                    Best Practices
                  </a>
                </li>
                <li>
                  <a href="#common-issues" className="hover:text-blue-400 transition-colors">
                    Common Issues
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          {/* Main Content */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:scroll-mt-20">
              {/* Tool Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Link 
                  to="/converter"
                  className="block group bg-black/20 backdrop-blur-lg rounded-xl p-8 border 
                    border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 
                    hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-blue-500/20 flex items-center 
                      justify-center group-hover:bg-blue-500/30 transition-colors">
                      <CodeBracketIcon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 
                        transition-colors">
                        JSON to YAML Converter
                      </h3>
                      <p className="text-gray-400">
                        Try our free online JSON to YAML converter. Fast, accurate, and easy to use.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link 
                  to="/xml"
                  className="block group bg-black/20 backdrop-blur-lg rounded-xl p-8 border 
                    border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 
                    hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center 
                      justify-center group-hover:bg-purple-500/30 transition-colors">
                      <ArrowRightIcon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 
                        transition-colors">
                        XML Converter
                      </h3>
                      <p className="text-gray-400">
                        Need to work with XML? Try our XML to JSON converter.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Introduction Section */}
              <section id="introduction">
                <h2 className="flex items-center gap-3 text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-400 to-purple-500">
                  Introduction to JSON and YAML
                </h2>
                <p>
                  JSON (JavaScript Object Notation) and YAML (YAML Ain't Markup Language) are two popular
                  data serialization formats. While JSON is widely used for APIs and data exchange, YAML
                  is often preferred for configuration files due to its human-readable format.
                </p>
              </section>

              {/* Key Differences Section */}
              <section id="key-differences" className="mt-12">
                <h2 className="flex items-center gap-3 text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-400 to-purple-500">
                  Format Differences
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">JSON Format</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Uses braces and brackets
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Requires quotes around strings
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        No comments supported
                      </li>
                    </ul>
                  </div>
                  <div className="bg-black/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">YAML Format</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Uses indentation for structure
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Optional quotes for strings
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Supports comments and anchors
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Conversion Basics Section */}
              <section id="conversion-basics" className="mt-12">
                <h2 className="flex items-center gap-3 text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-400 to-purple-500">
                  Conversion Basics
                </h2>
                <p>
                  Converting between JSON and YAML is straightforward in most cases. Here's a simple example:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-black/30 rounded-lg overflow-hidden">
                    <div className="bg-blue-500/20 px-4 py-2 border-b border-blue-500/40">
                      <p className="text-blue-400 font-mono font-semibold">JSON Input</p>
                    </div>
                    <pre className="p-4 text-sm overflow-x-auto">
                      <code>{`{
  "config": {
    "name": "My App",
    "version": "1.0.0",
    "settings": {
      "debug": true,
      "api": {
        "url": "https://api.example.com",
        "key": "abc123"
      }
    }
  }
}`}</code>
                    </pre>
                  </div>
                  <div className="bg-black/30 rounded-lg overflow-hidden">
                    <div className="bg-purple-500/20 px-4 py-2 border-b border-purple-500/40">
                      <p className="text-purple-400 font-mono font-semibold">YAML Output</p>
                    </div>
                    <pre className="p-4 text-sm overflow-x-auto">
                      <code>{`config:
  name: My App
  version: 1.0.0
  settings:
    debug: true
    api:
      url: https://api.example.com
      key: abc123`}</code>
                    </pre>
                  </div>
                </div>
              </section>

              {/* Advanced Features Section */}
              <section id="advanced-features" className="mt-12">
                <h2 className="flex items-center gap-3 text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-400 to-purple-500">
                  Advanced Features
                </h2>
                <div className="space-y-6">
                  <div className="bg-black/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">YAML-Specific Features</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center 
                          text-purple-400 font-semibold">1</span>
                        <div>
                          <h4 className="font-semibold text-white">Anchors and Aliases</h4>
                          <p className="text-gray-300">Reuse configuration blocks with YAML anchors</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center 
                          text-purple-400 font-semibold">2</span>
                        <div>
                          <h4 className="font-semibold text-white">Multi-line Strings</h4>
                          <p className="text-gray-300">Handle long text with various YAML string styles</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center 
                          text-purple-400 font-semibold">3</span>
                        <div>
                          <h4 className="font-semibold text-white">Comments</h4>
                          <p className="text-gray-300">Add explanatory comments to configuration</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Best Practices Section */}
              <section id="best-practices" className="mt-12">
                <h2 className="flex items-center gap-3 text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-400 to-purple-500">
                  Best Practices
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">When Converting to YAML</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        <span>Use consistent indentation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        <span>Add meaningful comments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        <span>Utilize YAML's advanced features</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-black/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">When Converting to JSON</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        <span>Validate JSON structure</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        <span>Handle special characters</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        <span>Maintain data types</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Common Issues Section */}
              <section id="common-issues" className="mt-12">
                <h2 className="flex items-center gap-3 text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                  Common Issues
                </h2>
                <div className="grid gap-6">
                  <div className="bg-black/20 backdrop-blur-lg rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <ExclamationTriangleIcon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Indentation Errors</h4>
                        <p className="text-gray-300">
                          YAML is sensitive to indentation. Always use consistent spacing and avoid mixing
                          tabs with spaces. Most tools use 2 spaces for indentation by default.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/20 backdrop-blur-lg rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <ExclamationTriangleIcon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Special Characters</h4>
                        <p className="text-gray-300">
                          Special characters in both formats need proper escaping. Pay special attention to
                          quotes, colons, and multi-line strings to ensure they are properly formatted.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/20 backdrop-blur-lg rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <ExclamationTriangleIcon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Data Type Preservation</h4>
                        <p className="text-gray-300">
                          Maintain proper data types during conversion. Be especially careful with numbers,
                          booleans, and null values to ensure they are correctly represented in both formats.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border 
                border-blue-500/40 rounded-lg p-12 mt-16 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Convert?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Try our free online JSON to YAML converter tool. It's fast, secure, and easy to use.
                </p>
                <Link
                  to="/converter"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 
                    to-purple-600 rounded-lg font-semibold text-white hover:from-blue-600 
                    hover:to-purple-700 transition-all duration-300 shadow-lg group"
                >
                  Try JSON-YAML Converter
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
} 