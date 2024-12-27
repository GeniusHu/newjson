import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { motion } from 'framer-motion';

export default function JsonValidator() {
  const [input, setInput] = useState('');
  const [validationResult, setValidationResult] = useState(null);

  const validateJson = () => {
    try {
      JSON.parse(input);
      setValidationResult({
        isValid: true,
        message: 'JSON is valid!',
      });
    } catch (err) {
      setValidationResult({
        isValid: false,
        message: 'Invalid JSON: ' + err.message,
        line: err.lineNumber,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20 px-4">
      <div className="container mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">JSON Validator</h2>
          <p className="text-gray-300">Validate your JSON structure and check for syntax errors.</p>
        </motion.div>

        <div className="grid gap-6">
          {/* Input Editor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-4"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Input JSON</h3>
            <div className="h-[500px] rounded-lg overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage="json"
                theme="vs-dark"
                value={input}
                onChange={setInput}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Validation Result */}
        {validationResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-4 rounded-lg ${
              validationResult.isValid
                ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                : 'bg-red-500/20 border border-red-500/50 text-red-300'
            }`}
          >
            {validationResult.message}
          </motion.div>
        )}

        {/* Validate Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={validateJson}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold 
          text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
        >
          Validate JSON
        </motion.button>
      </div>
    </div>
  );
} 