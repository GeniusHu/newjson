import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const JsonEscapeTool = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleEscape = () => {
    try {
      const escaped = JSON.stringify(JSON.parse(input));
      setOutput(escaped);
    } catch (error) {
      setOutput('Invalid JSON input');
    }
  };

  const handleUnescape = () => {
    try {
      const unescaped = JSON.parse(input);
      setOutput(JSON.stringify(unescaped, null, 2));
    } catch (error) {
      setOutput('Invalid JSON input');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>JSON 转义和反转义工具 - JSON Tools</title>
        <meta name="description" content="使用我们的工具轻松进行 JSON 数据的转义和反转义。" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-4">JSON 转义和反转义工具</h1>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="6"
        placeholder="输入 JSON 数据"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex space-x-4 mb-4">
        <button onClick={handleEscape} className="px-4 py-2 bg-blue-500 text-white rounded">转义</button>
        <button onClick={handleUnescape} className="px-4 py-2 bg-green-500 text-white rounded">反转义</button>
      </div>
      <textarea
        className="w-full p-2 border rounded"
        rows="6"
        placeholder="输出结果"
        value={output}
        readOnly
      />
    </div>
  );
};

export default JsonEscapeTool; 