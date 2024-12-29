import { useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { useTranslation } from 'react-i18next';
import { ArrowsRightLeftIcon, ClipboardDocumentIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';

// XML 转 JSON 的函数
function xmlToJson(xml) {
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "text/xml");
    
    function convertNodeToJson(node) {
      const obj = {};
      
      // 处理属性
      if (node.attributes) {
        for (let i = 0; i < node.attributes.length; i++) {
          const attr = node.attributes[i];
          obj[`@${attr.nodeName}`] = attr.nodeValue;
        }
      }
      
      // 处理子节点
      if (node.hasChildNodes()) {
        const children = node.childNodes;
        let hasElements = false;
        
        for (let i = 0; i < children.length; i++) {
          if (children[i].nodeType === 1) {
            hasElements = true;
            break;
          }
        }
        
        if (!hasElements && children.length === 1) {
          const content = children[0].nodeValue.trim();
          if (content) {
            if (Object.keys(obj).length > 0) {
              obj['#text'] = content;
            } else {
              return content;
            }
          }
          return obj;
        }
        
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          
          if (child.nodeType === 1) {
            const childJson = convertNodeToJson(child);
            
            if (obj[child.nodeName]) {
              if (!Array.isArray(obj[child.nodeName])) {
                obj[child.nodeName] = [obj[child.nodeName]];
              }
              obj[child.nodeName].push(childJson);
            } else {
              obj[child.nodeName] = childJson;
            }
          }
        }
      }
      
      return obj;
    }
    
    const result = {};
    result[xmlDoc.documentElement.nodeName] = convertNodeToJson(xmlDoc.documentElement);
    return result;
  } catch (error) {
    throw new Error('Invalid XML format');
  }
}

// JSON 转 XML 的函数
function jsonToXml(json, indent = '') {
  try {
    let xml = '';
    
    for (let prop in json) {
      if (!json.hasOwnProperty(prop)) continue;
      
      const value = json[prop];
      
      if (prop === '@type' || prop === '@value') continue;
      
      // 处理属性
      if (prop.startsWith('@')) {
        continue;
      }
      
      // 处理文本内容
      if (prop === '#text') {
        xml += indent + value + '\n';
        continue;
      }
      
      // 开始标签
      xml += indent + '<' + prop;
      
      // 添加属性
      const attrs = {};
      for (let p in json) {
        if (p.startsWith('@') && p !== '@type' && p !== '@value') {
          attrs[p.substring(1)] = json[p];
        }
      }
      
      for (let attr in attrs) {
        xml += ' ' + attr + '="' + attrs[attr] + '"';
      }
      
      if (value === null || value === '') {
        xml += '/>\n';
      } else if (typeof value === 'object') {
        xml += '>\n';
        if (Array.isArray(value)) {
          value.forEach(item => {
            if (typeof item === 'object') {
              const obj = {};
              obj[prop] = item;
              xml += jsonToXml(obj, indent + '  ');
            } else {
              xml += indent + '  <' + prop + '>' + item + '</' + prop + '>\n';
            }
          });
        } else {
          xml += jsonToXml(value, indent + '  ');
        }
        xml += indent + '</' + prop + '>\n';
      } else {
        xml += '>' + value + '</' + prop + '>\n';
      }
    }
    
    return xml;
  } catch (error) {
    throw new Error('Invalid JSON format');
  }
}

// 配置常量
const CONFIG = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['application/xml', 'application/json', 'text/xml', 'text/plain']
};

export default function XmlConverter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState('xml-to-json');
  const [copied, setCopied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const { t } = useTranslation();

  // 自动转换
  useEffect(() => {
    const timer = setTimeout(() => {
      if (input.trim()) {
        handleConvert();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [input, mode]);

  // 转换处理
  const handleConvert = () => {
    try {
      if (!input.trim()) {
        setOutput('');
        setError('');
        return;
      }

      if (mode === 'xml-to-json') {
        const result = xmlToJson(input);
        setOutput(JSON.stringify(result, null, 2));
      } else {
        const jsonData = JSON.parse(input);
        const result = jsonToXml(jsonData);
        setOutput(result);
      }
      setError('');
    } catch (err) {
      setError(err.message);
      setOutput('');
    }
  };

  // 切换转换模式
  const toggleMode = () => {
    setMode(mode === 'xml-to-json' ? 'json-to-xml' : 'xml-to-json');
    setInput(output);
    setOutput('');
    setError('');
  };

  // 复制到剪贴板
  const copyToClipboard = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError(t('common.error'));
    }
  };

  // 文件处理
  const handleFile = async (file) => {
    if (!file) return;

    if (!CONFIG.ALLOWED_TYPES.includes(file.type)) {
      setError(t('xml.fileError.invalidType'));
      return;
    }

    if (file.size > CONFIG.MAX_FILE_SIZE) {
      setError(t('xml.fileError.tooLarge'));
      return;
    }

    try {
      const text = await file.text();
      setInput(text);
      setError('');
    } catch (err) {
      setError(t('xml.fileError.readError'));
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
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            {mode === 'xml-to-json' ? 'XML to JSON Converter' : 'JSON to XML Converter'}
          </h2>
          <p className="text-gray-300">
            {mode === 'xml-to-json' 
              ? 'Convert XML documents to JSON format with support for attributes and nested structures.' 
              : 'Convert JSON data to well-formatted XML documents.'}
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-4 items-center bg-white/5 p-4 rounded-lg">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMode}
              className="h-10 px-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg 
                font-semibold text-white hover:from-amber-600 hover:to-orange-700 
                transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <ArrowsRightLeftIcon className="w-5 h-5" />
              <span>{mode === 'xml-to-json' ? 'XML → JSON' : 'JSON → XML'}</span>
            </button>

            <button
              onClick={copyToClipboard}
              disabled={!output}
              className={`h-10 px-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg 
                font-semibold text-white hover:from-green-600 hover:to-emerald-700 
                transition-all duration-300 shadow-lg flex items-center gap-2
                ${!output && 'opacity-50 cursor-not-allowed'}`}
            >
              <ClipboardDocumentIcon className="w-5 h-5" />
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            <button
              onClick={triggerFileInput}
              className="h-10 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg 
                font-semibold text-white hover:from-blue-600 hover:to-purple-700 
                transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <ArrowUpTrayIcon className="w-5 h-5" />
              <span>Upload</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".xml,.json,.txt"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
                <p className="text-xl text-white font-semibold">Drop file here</p>
              </div>
            )}
            <h3 className="text-xl font-semibold text-white mb-4">
              {mode === 'xml-to-json' ? 'XML Input' : 'JSON Input'}
            </h3>
            <div className="h-[500px] rounded-lg overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage={mode === 'xml-to-json' ? 'xml' : 'json'}
                theme="vs-dark"
                value={input}
                onChange={(value) => setInput(value || '')}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  formatOnPaste: true,
                  wordWrap: 'on',
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  renderWhitespace: 'selection',
                }}
              />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              {mode === 'xml-to-json' ? 'JSON Output' : 'XML Output'}
            </h3>
            <div className="h-[500px] rounded-lg overflow-hidden">
              <Editor
                height="100%"
                defaultLanguage={mode === 'xml-to-json' ? 'json' : 'xml'}
                theme="vs-dark"
                value={output}
                options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  fontSize: 14,
                  wordWrap: 'on',
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  renderWhitespace: 'selection',
                }}
              />
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {copied && (
          <div className="fixed bottom-4 right-4 bg-green-500/90 text-white px-4 py-2 rounded-lg shadow-lg">
            Copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
} 