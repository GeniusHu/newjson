import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { motion } from 'framer-motion';

export default function JsonEditor() {
  const [input, setInput] = useState('{\n  \n}');
  const [parsedPreview, setParsedPreview] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const parsed = JSON.parse(input);
      setParsedPreview(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (err) {
      setError('Invalid JSON: ' + err.message);
    }
  }, [input]);

  const handleEditorChange = (value) => {
    setInput(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20 px-4">
      <div className="container mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">JSON Editor</h2>
          <p className="text-gray-300">Edit your JSON with real-time preview and validation.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Editor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-4"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Editor</h3>
            <div className="h-[500px] rounded-lg overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage="json"
                theme="vs-dark"
                value={input}
                onChange={handleEditorChange}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  formatOnPaste: true,
                  formatOnType: true,
                }}
              />
            </div>
          </motion.div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-4"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Preview</h3>
            <div className="h-[500px] rounded-lg overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage="json"
                theme="vs-dark"
                value={error ? '' : parsedPreview}
                options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  fontSize: 14,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300"
          >
            {error}
          </motion.div>
        )}
      </div>
    </div>
  );
} 