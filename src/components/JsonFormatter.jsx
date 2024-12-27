import { useState, useCallback, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { motion } from 'framer-motion';
import {
  ArrowPathIcon,
  ClipboardDocumentIcon,
  TrashIcon,
  DocumentDuplicateIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ArrowUpTrayIcon,
} from '@heroicons/react/24/outline';

const SAMPLE_JSON = {
  name: "JSON Formatter",
  version: "1.0.0",
  features: ["Format", "Validate", "Pretty Print"],
  settings: {
    indentation: 2,
    sortKeys: false,
    colorize: true
  }
};

// 按钮样式变体
const ButtonStyles = {
  primary: "px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold \
text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg \
flex items-center gap-2",

  secondary: "px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg font-semibold \
text-white hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg \
flex items-center gap-2",

  success: "px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold \
text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg \
flex items-center gap-2",

  warning: "px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg font-semibold \
text-white hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg \
flex items-center gap-2",

  danger: "px-4 py-2 bg-gradient-to-r from-red-500 to-rose-600 rounded-lg font-semibold \
text-white hover:from-red-600 hover:to-rose-700 transition-all duration-300 shadow-lg \
flex items-center gap-2",

  info: "px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold \
text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg \
flex items-center gap-2",
};

// 添加配置常量
const CONFIG = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['application/json', 'text/plain'],
  SAMPLE_JSON: SAMPLE_JSON // 使用现有的SAMPLE_JSON
};

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [indentSize, setIndentSize] = useState(2);
  const [sortKeys, setSortKeys] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isCompressed, setIsCompressed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // 格式化JSON的核心函数
  const formatJson = useCallback(() => {
    if (!input.trim()) {
      setOutput('');
      setError('');
      return;
    }
    
    try {
      let parsed = JSON.parse(input);
      
      if (sortKeys) {
        parsed = sortObjectKeys(parsed);
      }
      
      // 根据压缩状态决定缩进
      const indent = isCompressed ? 0 : indentSize;
      setOutput(JSON.stringify(parsed, null, indent));
      setError('');
    } catch (err) {
      setError('Invalid JSON: ' + err.message);
      setOutput('');
    }
  }, [input, indentSize, sortKeys, isCompressed]);

  // 监听设置变化自动格式化
  useEffect(() => {
    formatJson();
  }, [indentSize, sortKeys, formatJson, isCompressed]);

  // 递归排序对象键
  const sortObjectKeys = (obj) => {
    if (typeof obj !== 'object' || obj === null) return obj;
    if (Array.isArray(obj)) return obj.map(sortObjectKeys);
    
    return Object.keys(obj)
      .sort()
      .reduce((acc, key) => {
        acc[key] = sortObjectKeys(obj[key]);
        return acc;
      }, {});
  };

  // 复制到剪贴板
  const copyToClipboard = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError('Failed to copy to clipboard');
    }
  };

  // 加载示例数据
  const loadSample = () => {
    setInput(JSON.stringify(SAMPLE_JSON, null, 2));
  };

  // 清空数据
  const clearAll = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  // 切换压缩状态
  const toggleCompression = () => {
    setIsCompressed(!isCompressed);
  };

  // 添加文件处理函数
  const handleFile = async (file) => {
    if (!file) return;

    // 文件类型检查
    if (!CONFIG.ALLOWED_TYPES.includes(file.type)) {
      setError('Invalid file type. Please upload a JSON or text file.');
      return;
    }

    // 文件大小检查
    if (file.size > CONFIG.MAX_FILE_SIZE) {
      setError('File is too large. Maximum size is 5MB.');
      return;
    }

    try {
      const text = await file.text();
      // 尝试解析JSON以验证有效性
      JSON.parse(text);
      setInput(text);
      setError('');
    } catch (err) {
      setError('Invalid JSON file: ' + err.message);
    }
  };

  // 拖拽处理函数
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    await handleFile(file);
  };

  // 点击上传处理
  const handleFileSelect = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      await handleFile(file);
    }
  };

  // 触发文件选择
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20 px-4">
      <div className="container mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">JSON Formatter</h2>
          <p className="text-gray-300">Paste your JSON below and click format to beautify it.</p>
        </motion.div>

        {/* 工具栏 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex flex-wrap gap-4 items-center bg-white/5 p-4 rounded-lg"
        >
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={formatJson}
              className={ButtonStyles.primary}
            >
              <ArrowPathIcon className="w-5 h-5" />
              Format JSON
            </button>

            <select
              value={indentSize}
              onChange={(e) => setIndentSize(Number(e.target.value))}
              className="bg-white/10 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500"
              disabled={isCompressed}
            >
              <option value="2">2 Spaces</option>
              <option value="4">4 Spaces</option>
              <option value="8">8 Spaces</option>
            </select>

            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={sortKeys}
                onChange={(e) => setSortKeys(e.target.checked)}
                className="rounded bg-white/10 border-none focus:ring-2 focus:ring-purple-500"
              />
              Sort Keys
            </label>

            <button
              onClick={toggleCompression}
              className={ButtonStyles.info}
              title={isCompressed ? "Expand JSON" : "Compress JSON"}
            >
              {isCompressed ? (
                <>
                  <ChevronDownIcon className="w-5 h-5" />
                  Expand
                </>
              ) : (
                <>
                  <ChevronUpIcon className="w-5 h-5" />
                  Compress
                </>
              )}
            </button>
          </div>

          <div className="flex gap-4">
            <button
              onClick={triggerFileInput}
              className={ButtonStyles.secondary}
              title="Upload JSON File"
            >
              <ArrowUpTrayIcon className="w-5 h-5" />
              Upload
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json,text/plain"
              onChange={handleFileSelect}
              className="hidden"
            />
            <button
              onClick={loadSample}
              className={ButtonStyles.warning}
              title="Load Sample"
            >
              <DocumentDuplicateIcon className="w-5 h-5" />
              Sample
            </button>
            <button
              onClick={clearAll}
              className={ButtonStyles.danger}
              title="Clear All"
            >
              <TrashIcon className="w-5 h-5" />
              Clear
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Editor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`bg-white/10 backdrop-blur-lg rounded-xl p-4 relative ${
              isDragging ? 'ring-2 ring-purple-500' : ''
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {isDragging && (
              <div className="absolute inset-0 bg-purple-500/20 backdrop-blur-sm rounded-xl 
                flex items-center justify-center border-2 border-dashed border-purple-500 z-10">
                <p className="text-xl text-white font-semibold">Drop JSON file here</p>
              </div>
            )}
            <h3 className="text-xl font-semibold text-white mb-4">Input</h3>
            <div className="h-[500px] rounded-lg overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage="json"
                theme="vs-dark"
                value={input}
                onChange={(value) => {
                  setInput(value || '');
                  if (value) formatJson();
                }}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  formatOnPaste: true,
                  wordWrap: 'on',
                  lineNumbers: 'on',
                  renderWhitespace: 'selection',
                }}
              />
            </div>
          </motion.div>

          {/* Output Editor */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Output</h3>
              {output && (
                <button
                  onClick={copyToClipboard}
                  className={ButtonStyles.success}
                  title="Copy to Clipboard"
                >
                  <ClipboardDocumentIcon className="w-5 h-5" />
                  {copied ? 'Copied!' : 'Copy JSON'}
                </button>
              )}
            </div>
            <div className="h-[500px] rounded-lg overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage="json"
                theme="vs-dark"
                value={output}
                options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  fontSize: 14,
                  wordWrap: 'on',
                  lineNumbers: 'on',
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