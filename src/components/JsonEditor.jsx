/**
 * JSON编辑器组件
 * 
 * 功能特点:
 * 1. 实时语法检查
 * 2. 自动格式化
 * 3. 语法高亮
 * 4. 文件上传支持
 * 5. 拖拽上传
 * 6. 实时预览
 * 7. 撤销/重做支持
 * 
 * 使用说明:
 * 1. 在左侧编辑器中编辑JSON
 * 2. 右侧实时预览格式化结果
 * 3. 通过上传按钮或拖拽导入JSON文件
 * 4. 使用工具栏按钮进行格式化和验证
 * 
 * 注意事项:
 * 1. 文件大小限制为5MB
 * 2. 仅支持JSON和文本文件
 * 3. 保持JSON格式正确以获得实时预览
 */

import { useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowPathIcon,
  ClipboardDocumentIcon,
  TrashIcon,
  DocumentDuplicateIcon,
  ArrowUpTrayIcon,
} from '@heroicons/react/24/outline';

// 配置常量
const CONFIG = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['application/json', 'text/plain']
};

// 按钮样式
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
flex items-center gap-2"
};

export default function JsonEditor() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // 格式化JSON
  const formatJson = () => {
    if (!input.trim()) {
      setOutput('');
      setError('');
      return;
    }

    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (err) {
      setError(err.message);
      setOutput('');
    }
  };

  // 监听输入变化
  useEffect(() => {
    formatJson();
  }, [input]);

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

  // 清空输入
  const clearAll = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  // 文件处理
  const handleFile = async (file) => {
    if (!file) return;

    if (!CONFIG.ALLOWED_TYPES.includes(file.type)) {
      setError('Invalid file type. Please upload a JSON or text file.');
      return;
    }

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

  // 拖拽处理
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

  // 文件选择处理
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
          <h2 className="text-3xl font-bold text-white mb-4">JSON Editor</h2>
          <p className="text-gray-300">Edit your JSON with real-time preview and validation.</p>
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

            <button
              onClick={copyToClipboard}
              className={`${ButtonStyles.success} ${!output && 'opacity-50 cursor-not-allowed'}`}
              disabled={!output}
            >
              <ClipboardDocumentIcon className="w-5 h-5" />
              {copied ? 'Copied!' : 'Copy JSON'}
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
          {/* 输入编辑器 */}
          <div 
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
            <h3 className="text-xl font-semibold text-white mb-4">Editor</h3>
            <div className="h-[500px] rounded-lg overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage="json"
                theme="vs-dark"
                value={input}
                onChange={(value) => setInput(value || '')}
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
          </div>

          {/* 预览编辑器 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
            <h3 className="text-xl font-semibold text-white mb-4">Preview</h3>
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
          </div>
        </div>

        {/* 错误提示 Toast */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 0, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-red-500/90 backdrop-blur-lg text-white px-6 py-4 rounded-lg shadow-xl z-50
                border border-red-400 max-w-md w-full mx-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Error</h3>
                  <p className="text-white/90">{error}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 复制成功提示 Toast */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 0, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-green-500/90 backdrop-blur-lg text-white px-6 py-4 rounded-lg shadow-xl z-50
                border border-green-400 max-w-md w-full mx-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Success</h3>
                  <p className="text-white/90">Content copied to clipboard!</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 