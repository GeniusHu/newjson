/**
 * JSON转换工具组件
 * 
 * 功能特点:
 * 1. 支持多种格式转换:
 *    - XML
 *    - YAML
 *    - Java类
 *    - Kotlin数据类
 *    - TypeScript接口
 *    - C#类
 *    - Python类
 *    - Go结构体
 * 2. 实时预览
 * 3. 语法高亮
 * 4. 文件上传支持
 * 5. 拖拽上传
 * 6. 复制到剪贴板
 * 
 * 使用说明:
 * 1. 在左侧输入框输入或粘贴JSON
 * 2. 从下拉菜单选择目标格式
 * 3. 转换结果将在右侧实时显示
 * 4. 可以使用复制按钮复制转换结果
 * 5. 支持通过上传按钮或拖拽方式导入JSON文件
 * 
 * 注意事项:
 * 1. 输入必须是有效的JSON格式
 * 2. 文件大小限制为5MB
 * 3. 仅支持JSON和文本文件
 * 4. 某些复杂的JSON结构可能需要手动调整转换结果
 */

import { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowPathIcon, 
  DocumentDuplicateIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  ArrowUpTrayIcon
} from '@heroicons/react/24/outline';
import { TypeConverter, FormatConverter, CodeGenerator } from '../utils/converterUtils';

// 添加配置常量
const CONFIG = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['application/json', 'text/plain']
};

// 添加按钮样式常量
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
};

export default function JsonConverter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('xml');
  const [error, setError] = useState('');
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [editorMounted, setEditorMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  // 支持的格式
  const formats = [
    { id: 'xml', name: 'XML', language: 'xml' },
    { id: 'yaml', name: 'YAML', language: 'yaml' },
    { id: 'java', name: 'Java Class', language: 'java' },
    { id: 'kotlin', name: 'Kotlin Data Class', language: 'kotlin' },
    { id: 'typescript', name: 'TypeScript Interface', language: 'typescript' },
    { id: 'csharp', name: 'C# Class', language: 'csharp' },
    { id: 'python', name: 'Python Class', language: 'python' },
    { id: 'go', name: 'Go Struct', language: 'go' }
  ];

  // 编辑器主题配置
  const editorWillMount = (monaco) => {
    // 配置YAML语法高亮
    monaco.languages.register({ id: 'yaml' });
    monaco.languages.setMonarchTokensProvider('yaml', {
      tokenizer: {
        root: [
          [/^[\w\-_\s]*:/, 'key'],
          [/:\s*([A-Za-z0-9\-_]+)$/, 'string'],
          [/".*"/, 'string'],
          [/'.*'/, 'string'],
          [/\[|\]|\{|\}|,/, 'delimiter'],
          [/#.*$/, 'comment'],
          [/\s*-\s*/, 'delimiter'],
          [/\d+/, 'number'],
          [/true|false|null|undefined/, 'keyword'],
        ]
      }
    });

    // 配置XML语法高亮
    monaco.languages.register({ id: 'xml' });
    monaco.languages.setMonarchTokensProvider('xml', {
      tokenizer: {
        root: [
          [/[<&][\w\-.:]+/, 'tag'],
          [/\/>|>|<\/|\/>|>/, 'delimiter'],
          [/=/, 'delimiter'],
          [/"([^"]*)"/, 'string'],
          [/'([^']*)'/, 'string'],
        ]
      }
    });
  };

  // 编辑器挂载完成
  const handleEditorDidMount = () => {
    setEditorMounted(true);
  };

  // 转换JSON到其他格式
  const convertJson = () => {
    try {
      // 首先验证输入是否为有效的JSON
      const jsonObj = JSON.parse(input);
      
      let result = '';
      switch(selectedFormat) {
        case 'xml':
          result = FormatConverter.toXml(jsonObj);
          break;
        case 'yaml':
          result = FormatConverter.toYaml(jsonObj);
          break;
        case 'java':
          result = CodeGenerator.generateJavaClass(jsonObj);
          break;
        case 'kotlin':
          result = CodeGenerator.generateKotlinClass(jsonObj);
          break;
        case 'typescript':
          result = CodeGenerator.generateTypeScriptInterface(jsonObj);
          break;
        case 'csharp':
          result = CodeGenerator.generateCSharpClass(jsonObj);
          break;
        case 'python':
          result = CodeGenerator.generatePythonClass(jsonObj);
          break;
        case 'go':
          result = CodeGenerator.generateGoStruct(jsonObj);
          break;
        default:
          throw new Error('Unsupported format');
      }
      
      setOutput(result);
      setError('');
    } catch (err) {
      setError(err.message);
      setOutput('');
    }
  };

  // 复制到剪贴板
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      setError('Failed to copy to clipboard');
    }
  };

  // 编辑器配置
  const editorOptions = {
    minimap: { enabled: false },
    fontSize: 14,
    lineNumbers: 'on',
    scrollBeyondLastLine: false,
    automaticLayout: true,
    wordWrap: 'on',
    formatOnPaste: true,
    formatOnType: true,
    renderWhitespace: 'all',
    tabSize: 2,
  };

  // 获取当前格式的语言配置
  const getCurrentLanguage = () => {
    const format = formats.find(f => f.id === selectedFormat);
    return format?.language || 'plaintext';
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
      // 不需要在这里调用 convertJson，因为 useEffect 会处理
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

  // 添加 useEffect 来监听 input 和 selectedFormat 的变化
  useEffect(() => {
    if (input && selectedFormat) {
      convertJson();
    }
  }, [input, selectedFormat]);

  // 格式选择处理函数
  const handleFormatChange = (e) => {
    setSelectedFormat(e.target.value);
    // 不需要在这里调用 convertJson，因为 useEffect 会处理
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20 pb-12 px-4">
      <div className="container mx-auto">
        {/* 标题 */}
        <div className="text-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            JSON Format Converter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300"
          >
            Convert JSON to various formats including XML, YAML, and programming language classes
          </motion.p>
        </div>

        {/* 工具栏 */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-4 mb-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* 格式选择 */}
            <select
              value={selectedFormat}
              onChange={handleFormatChange}
              className="bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg px-4 py-2 outline-none 
                focus:ring-2 focus:ring-purple-500 border-none shadow-lg hover:from-gray-600 hover:to-gray-700 
                transition-all duration-300"
            >
              {formats.map(format => (
                <option key={format.id} value={format.id}>
                  {format.name}
                </option>
              ))}
            </select>

            {/* 上传按钮 */}
            <button
              onClick={triggerFileInput}
              className={ButtonStyles.primary}
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

            {/* 复制按钮 */}
            <button
              onClick={copyToClipboard}
              className={`${ButtonStyles.success} ${!output && 'opacity-50 cursor-not-allowed'}`}
              disabled={!output}
            >
              <DocumentDuplicateIcon className="w-5 h-5" />
              Copy
            </button>
          </div>
        </div>

        {/* 编辑器容器 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* 输入编辑器 */}
          <div 
            className={`bg-gray-800/50 backdrop-blur-lg rounded-lg p-4 relative ${
              isDragging ? 'ring-2 ring-blue-500' : ''
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {isDragging && (
              <div className="absolute inset-0 bg-blue-500/20 backdrop-blur-sm rounded-lg 
                flex items-center justify-center border-2 border-dashed border-blue-500 z-10">
                <p className="text-xl text-white font-semibold">Drop JSON file here</p>
              </div>
            )}
            <h2 className="text-white text-lg font-semibold mb-4">JSON Input</h2>
            <div className="h-[500px] rounded-lg overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage="json"
                theme="vs-dark"
                value={input}
                onChange={setInput}
                options={editorOptions}
                beforeMount={editorWillMount}
                onMount={handleEditorDidMount}
              />
            </div>
          </div>

          {/* 输出编辑器 */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-4">
            <h2 className="text-white text-lg font-semibold mb-4">
              {formats.find(f => f.id === selectedFormat)?.name} Output
            </h2>
            <div className="h-[500px] rounded-lg overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage={getCurrentLanguage()}
                theme="vs-dark"
                value={output}
                options={{
                  ...editorOptions,
                  readOnly: true
                }}
                beforeMount={editorWillMount}
              />
            </div>
          </div>
        </div>

        {/* 错误提示 - 居中显示的 Toast */}
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

        {/* 复制成功提示 */}
        <AnimatePresence>
          {showCopySuccess && (
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
                  <CheckCircleIcon className="w-6 h-6" />
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