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

export default function XmlToJsonGuide() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Complete Guide to XML to JSON Conversion | JSON Tools</title>
        <meta name="description" content="Learn how to convert XML to JSON with our comprehensive guide. Includes best practices, common challenges, and practical examples for developers." />
        <meta name="keywords" content="xml to json, xml json conversion, xml parser, json converter, data transformation, xml to json converter" />
        <meta property="og:title" content="Complete Guide to XML to JSON Conversion" />
        <meta property="og:description" content="Master XML to JSON conversion with detailed examples and best practices. Perfect for developers working with data transformation." />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2024-01-15" />
        <meta property="article:modified_time" content="2024-01-15" />
        <meta property="article:section" content="Technical Guide" />
        <meta property="article:tag" content="XML,JSON,Data Conversion,Web Development" />
        <link rel="canonical" href="https://jsontools.com/blog/xml-to-json" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Complete Guide to XML to JSON Conversion",
            "description": "Learn how to convert XML to JSON with our comprehensive guide. Includes best practices, common challenges, and practical examples for developers.",
            "keywords": "xml to json, xml json conversion, xml parser, json converter",
            "articleBody": "A comprehensive guide to converting XML to JSON, covering everything from basic concepts to advanced techniques.",
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
                Complete Guide to XML to JSON Conversion
              </h1>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Master the art of converting XML to JSON with our comprehensive guide. Learn best practices,
                handle common challenges, and implement efficient solutions.
              </p>
              <div className="flex items-center justify-center gap-6 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  <time dateTime="2024-01-15">January 15, 2024</time>
                </div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5" />
                  <span>12 min read</span>
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
                    Introduction to XML and JSON
                  </a>
                </li>
                <li>
                  <a href="#key-differences" className="hover:text-blue-400 transition-colors">
                    Key Differences
                  </a>
                </li>
                <li>
                  <a href="#conversion-process" className="hover:text-blue-400 transition-colors">
                    Conversion Process
                  </a>
                </li>
                <li>
                  <a href="#handling-attributes" className="hover:text-blue-400 transition-colors">
                    Handling XML Attributes
                  </a>
                </li>
                <li>
                  <a href="#best-practices" className="hover:text-blue-400 transition-colors">
                    Best Practices
                  </a>
                </li>
                <li>
                  <a href="#common-challenges" className="hover:text-blue-400 transition-colors">
                    Common Challenges
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
                  to="/xml"
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
                        XML to JSON Converter
                      </h3>
                      <p className="text-gray-400">
                        Try our free online XML to JSON converter. Fast, accurate, and easy to use.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link 
                  to="/converter"
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
                        JSON to YAML Converter
                      </h3>
                      <p className="text-gray-400">
                        Need to convert JSON to YAML? Try our other conversion tool.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Introduction Section */}
              <section id="introduction">
                <h2 className="flex items-center gap-3 text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-400 to-purple-500">
                  Introduction to XML and JSON
                </h2>
                <p>
                  XML (eXtensible Markup Language) and JSON (JavaScript Object Notation) are two of the most widely used
                  data formats in web development and system integration. While XML has been a standard for decades,
                  JSON has gained massive popularity due to its simplicity and native JavaScript support.
                </p>
              </section>

              {/* Key Differences Section */}
              <section id="key-differences" className="mt-12">
                <h2 className="flex items-center gap-3 text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-400 to-purple-500">
                  Key Differences
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">XML Characteristics</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Tag-based structure with attributes
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Supports metadata through attributes
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        Allows comments and processing instructions
                      </li>
                    </ul>
                  </div>
                  <div className="bg-black/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">JSON Characteristics</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Key-value pair structure
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Native JavaScript support
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        Lightweight and easy to read
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Conversion Process Section */}
              <section id="conversion-process" className="mt-12">
                <h2 className="flex items-center gap-3 text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-400 to-purple-500">
                  Conversion Process
                </h2>
                <p>
                  Converting XML to JSON involves several key steps and considerations. Here's a practical example:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-black/30 rounded-lg overflow-hidden">
                    <div className="bg-blue-500/20 px-4 py-2 border-b border-blue-500/40">
                      <p className="text-blue-400 font-mono font-semibold">XML Input</p>
                    </div>
                    <pre className="p-4 text-sm overflow-x-auto">
                      <code>{`<person id="123">
  <name>John Doe</name>
  <age>30</age>
  <contact>
    <email>john@example.com</email>
    <phone>+1-555-555-0123</phone>
  </contact>
</person>`}</code>
                    </pre>
                  </div>
                  <div className="bg-black/30 rounded-lg overflow-hidden">
                    <div className="bg-purple-500/20 px-4 py-2 border-b border-purple-500/40">
                      <p className="text-purple-400 font-mono font-semibold">JSON Output</p>
                    </div>
                    <pre className="p-4 text-sm overflow-x-auto">
                      <code>{`{
  "person": {
    "@id": "123",
    "name": "John Doe",
    "age": "30",
    "contact": {
      "email": "john@example.com",
      "phone": "+1-555-555-0123"
    }
  }
}`}</code>
                    </pre>
                  </div>
                </div>
              </section>

              {/* Handling Attributes Section */}
              <section id="handling-attributes" className="mt-12">
                <h2 className="flex items-center gap-3 text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-400 to-purple-500">
                  Handling XML Attributes
                </h2>
                <div className="bg-black/20 rounded-lg p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center 
                        text-blue-400 font-semibold">1</span>
                      <div>
                        <h4 className="font-semibold text-white">Prefix Convention</h4>
                        <p className="text-gray-300">Use @ prefix for XML attributes in JSON</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center 
                        text-blue-400 font-semibold">2</span>
                      <div>
                        <h4 className="font-semibold text-white">Nested Elements</h4>
                        <p className="text-gray-300">Convert nested elements to nested objects</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center 
                        text-blue-400 font-semibold">3</span>
                      <div>
                        <h4 className="font-semibold text-white">Array Handling</h4>
                        <p className="text-gray-300">Convert repeated elements to arrays</p>
                      </div>
                    </li>
                  </ul>
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
                    <h3 className="text-lg font-semibold text-white mb-4">Input Handling</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        <span>Validate XML before conversion</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        <span>Handle character encoding properly</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        <span>Preserve data types when possible</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-black/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Error Handling</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        <span>Implement proper error handling</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        <span>Provide meaningful error messages</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        <span>Log conversion failures for debugging</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Common Challenges Section */}
              <section id="common-challenges" className="mt-12">
                <h2 className="flex items-center gap-3 text-transparent bg-clip-text 
                  bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                  Common Challenges
                </h2>
                <div className="grid gap-6">
                  <div className="bg-black/20 backdrop-blur-lg rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <ExclamationTriangleIcon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Mixed Content</h4>
                        <p className="text-gray-300">
                          Handling elements that contain both text and child elements requires special attention.
                          Use a consistent approach to preserve both the text content and the structure.
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
                        <h4 className="text-lg font-semibold text-white mb-2">Namespace Handling</h4>
                        <p className="text-gray-300">
                          XML namespaces need to be properly handled during conversion. Consider using
                          prefixes or full URIs in the JSON representation to maintain namespace information.
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
                        <h4 className="text-lg font-semibold text-white mb-2">Large File Processing</h4>
                        <p className="text-gray-300">
                          Converting large XML files requires efficient streaming approaches. Implement
                          chunked processing and memory management to handle files of any size.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border 
                border-blue-500/40 rounded-lg p-12 mt-16 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Convert Your XML?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Try our free online XML to JSON converter tool. It's fast, secure, and easy to use.
                </p>
                <Link
                  to="/xml"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 
                    to-purple-600 rounded-lg font-semibold text-white hover:from-blue-600 
                    hover:to-purple-700 transition-all duration-300 shadow-lg group"
                >
                  Try XML Converter
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