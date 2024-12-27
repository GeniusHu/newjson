// 类型转换工具
class TypeConverterClass {
  // Java类型转换
  toJavaType(value, isNested = false) {
    if (value === null || value === undefined) return 'Object';
    if (typeof value === 'string') return 'String';
    if (typeof value === 'number') return Number.isInteger(value) ? 'Integer' : 'Double';
    if (typeof value === 'boolean') return 'Boolean';
    if (Array.isArray(value)) {
      if (value.length === 0) return 'List<Object>';
      const itemType = this.toJavaType(value[0], true);
      return `List<${itemType}>`;
    }
    if (typeof value === 'object') {
      return isNested ? getNestedClassName(value) : 'Object';
    }
    return 'Object';
  }

  // Kotlin类型转换
  toKotlinType(value, isNested = false) {
    if (value === null || value === undefined) return 'Any?';
    if (typeof value === 'string') return 'String';
    if (typeof value === 'number') return Number.isInteger(value) ? 'Int' : 'Double';
    if (typeof value === 'boolean') return 'Boolean';
    if (Array.isArray(value)) {
      if (value.length === 0) return 'List<Any>';
      const itemType = this.toKotlinType(value[0], true);
      return `List<${itemType}>`;
    }
    if (typeof value === 'object') {
      return isNested ? getNestedClassName(value) : 'Any';
    }
    return 'Any';
  }

  // TypeScript类型转换
  toTypeScriptType(value, isNested = false) {
    if (value === null || value === undefined) return 'null';
    if (typeof value === 'string') return 'string';
    if (typeof value === 'number') return 'number';
    if (typeof value === 'boolean') return 'boolean';
    if (Array.isArray(value)) {
      if (value.length === 0) return 'any[]';
      const itemType = this.toTypeScriptType(value[0], true);
      return `${itemType}[]`;
    }
    if (typeof value === 'object') {
      return isNested ? getNestedInterfaceName(value) : 'object';
    }
    return 'any';
  }
}

// 格式转换工具
class FormatConverterClass {
  // JSON转XML
  toXml(obj, indent = '') {
    let xml = '';
    for (let prop in obj) {
      const value = obj[prop];
      
      // 处理数组
      if (Array.isArray(value)) {
        // 如果是数组，为每个元素创建一个独立的标签
        for (let item of value) {
          if (typeof item === 'string') {
            xml += `${indent}<${prop}>${escapeXml(item)}</${prop}>\n`;
          } else if (typeof item === 'object' && item !== null) {
            xml += `${indent}<${prop}>\n${this.toXml(item, indent + '  ')}${indent}</${prop}>\n`;
          } else {
            xml += `${indent}<${prop}>${item === null ? '' : escapeXml(String(item))}</${prop}>\n`;
          }
        }
      }
      // 处理对象
      else if (typeof value === 'object' && value !== null) {
        xml += `${indent}<${prop}>\n${this.toXml(value, indent + '  ')}${indent}</${prop}>\n`;
      }
      // 处理基本类型
      else {
        if (value === null || value === undefined) {
          xml += `${indent}<${prop}/>\n`;
        } else {
          xml += `${indent}<${prop}>${escapeXml(String(value))}</${prop}>\n`;
        }
      }
    }
    return xml;
  }

  // JSON转YAML
  toYaml(obj, indent = '') {
    let yaml = '';
    for (let prop in obj) {
      const value = obj[prop];
      if (value === null || value === undefined) {
        yaml += `${indent}${prop}: null\n`;
      } else if (typeof value === 'object') {
        yaml += `${indent}${prop}:${Array.isArray(value) ? '' : '\n'}`;
        if (Array.isArray(value)) {
          if (value.length === 0) {
            yaml += ' []\n';
          } else {
            yaml += '\n';
            for (let item of value) {
              yaml += `${indent}- `;
              if (typeof item === 'object') {
                yaml += '\n' + this.toYaml(item, indent + '  ');
              } else {
                yaml += formatYamlValue(item) + '\n';
              }
            }
          }
        } else {
          yaml += this.toYaml(value, indent + '  ');
        }
      } else {
        yaml += `${indent}${prop}: ${formatYamlValue(value)}\n`;
      }
    }
    return yaml;
  }
}

// 代码生成工具
class CodeGeneratorClass {
  constructor() {
    this.typeConverter = new TypeConverterClass();
  }

  // 生成Java类
  generateJavaClass(obj, className = 'Root', isNested = false) {
    let code = '';
    const nestedClasses = new Set();

    // 生成嵌套类
    for (let prop in obj) {
      const value = obj[prop];
      if (isComplexObject(value)) {
        const nestedClassName = getNestedClassName(value);
        if (!nestedClasses.has(nestedClassName)) {
          nestedClasses.add(nestedClassName);
          code += this.generateJavaClass(value, nestedClassName, true) + '\n\n';
        }
      }
    }

    // 生成主类
    code += `public class ${className} {\n`;
    
    // 字段
    for (let prop in obj) {
      const type = this.typeConverter.toJavaType(obj[prop], true);
      code += `    private ${type} ${prop};\n`;
    }
    
    code += '\n';
    
    // Getter和Setter
    for (let prop in obj) {
      const type = this.typeConverter.toJavaType(obj[prop], true);
      const capitalizedProp = capitalize(prop);
      
      // Getter
      code += `    public ${type} get${capitalizedProp}() {\n`;
      code += `        return ${prop};\n`;
      code += '    }\n\n';
      
      // Setter
      code += `    public void set${capitalizedProp}(${type} ${prop}) {\n`;
      code += `        this.${prop} = ${prop};\n`;
      code += '    }\n\n';
    }
    
    code += '}';
    return code;
  }

  // 生成Kotlin数据类
  generateKotlinClass(obj, className = 'Root', isNested = false) {
    let code = '';
    const nestedClasses = new Set();

    // 生成嵌套类
    for (let prop in obj) {
      const value = obj[prop];
      if (isComplexObject(value)) {
        const nestedClassName = getNestedClassName(value);
        if (!nestedClasses.has(nestedClassName)) {
          nestedClasses.add(nestedClassName);
          code += this.generateKotlinClass(value, nestedClassName, true) + '\n\n';
        }
      }
    }

    // 生成主数据类
    code += `data class ${className}(\n`;
    
    const props = [];
    for (let prop in obj) {
      const type = this.typeConverter.toKotlinType(obj[prop], true);
      props.push(`    val ${prop}: ${type}`);
    }
    
    code += props.join(',\n');
    code += '\n)';
    return code;
  }

  // 生成C#类
  generateCSharpClass(obj, className = 'Root', isNested = false) {
    let code = '';
    const nestedClasses = new Set();

    // 生成嵌套类
    for (let prop in obj) {
      const value = obj[prop];
      if (isComplexObject(value)) {
        const nestedClassName = getNestedClassName(value);
        if (!nestedClasses.has(nestedClassName)) {
          nestedClasses.add(nestedClassName);
          code += this.generateCSharpClass(value, nestedClassName, true) + '\n\n';
        }
      }
    }

    // 生成主类
    code += `public class ${className}\n{\n`;
    
    // 属性
    for (let prop in obj) {
      const type = this.getCSharpType(obj[prop], true);
      const capitalizedProp = capitalize(prop);
      code += `    public ${type} ${capitalizedProp} { get; set; }\n`;
    }
    
    code += '}';
    return code;
  }

  // 生成Python类
  generatePythonClass(obj, className = 'Root', isNested = false) {
    let code = '';
    const nestedClasses = new Set();

    // 生成嵌套类
    for (let prop in obj) {
      const value = obj[prop];
      if (isComplexObject(value)) {
        const nestedClassName = getNestedClassName(value);
        if (!nestedClasses.has(nestedClassName)) {
          nestedClasses.add(nestedClassName);
          code += this.generatePythonClass(value, nestedClassName, true) + '\n\n';
        }
      }
    }

    // 导入
    if (!isNested) {
      code += 'from dataclasses import dataclass\n';
      code += 'from typing import List, Optional\n\n';
    }

    // 生成主类
    code += '@dataclass\n';
    code += `class ${className}:\n`;
    
    // 字段
    for (let prop in obj) {
      const type = this.getPythonType(obj[prop], true);
      code += `    ${prop}: ${type}\n`;
    }
    
    if (Object.keys(obj).length === 0) {
      code += '    pass\n';
    }
    
    return code;
  }

  // 生成Go结构体
  generateGoStruct(obj, structName = 'Root', isNested = false) {
    let code = '';
    const nestedStructs = new Set();

    // 生成嵌套结构体
    for (let prop in obj) {
      const value = obj[prop];
      if (isComplexObject(value)) {
        const nestedStructName = getNestedClassName(value);
        if (!nestedStructs.has(nestedStructName)) {
          nestedStructs.add(nestedStructName);
          code += this.generateGoStruct(value, nestedStructName, true) + '\n\n';
        }
      }
    }

    // 生成主结构体
    code += `type ${structName} struct {\n`;
    
    // 字段
    for (let prop in obj) {
      const type = this.getGoType(obj[prop], true);
      const capitalizedProp = capitalize(prop);
      code += `    ${capitalizedProp} ${type} \`json:"${prop}"\`\n`;
    }
    
    code += '}';
    return code;
  }

  // C#类型转换
  getCSharpType(value, isNested = false) {
    if (value === null || value === undefined) return 'object';
    if (typeof value === 'string') return 'string';
    if (typeof value === 'number') {
      return Number.isInteger(value) ? 'int' : 'double';
    }
    if (typeof value === 'boolean') return 'bool';
    if (Array.isArray(value)) {
      if (value.length === 0) return 'List<object>';
      const itemType = this.getCSharpType(value[0], true);
      return `List<${itemType}>`;
    }
    if (typeof value === 'object') {
      return isNested ? getNestedClassName(value) : 'object';
    }
    return 'object';
  }

  // Python类型转换
  getPythonType(value, isNested = false) {
    if (value === null || value === undefined) return 'Optional[object]';
    if (typeof value === 'string') return 'str';
    if (typeof value === 'number') {
      return Number.isInteger(value) ? 'int' : 'float';
    }
    if (typeof value === 'boolean') return 'bool';
    if (Array.isArray(value)) {
      if (value.length === 0) return 'List[object]';
      const itemType = this.getPythonType(value[0], true);
      return `List[${itemType}]`;
    }
    if (typeof value === 'object') {
      return isNested ? getNestedClassName(value) : 'object';
    }
    return 'object';
  }

  // Go类型转换
  getGoType(value, isNested = false) {
    if (value === null || value === undefined) return 'interface{}';
    if (typeof value === 'string') return 'string';
    if (typeof value === 'number') {
      return Number.isInteger(value) ? 'int' : 'float64';
    }
    if (typeof value === 'boolean') return 'bool';
    if (Array.isArray(value)) {
      if (value.length === 0) return '[]interface{}';
      const itemType = this.getGoType(value[0], true);
      return `[]${itemType}`;
    }
    if (typeof value === 'object') {
      return isNested ? getNestedClassName(value) : 'interface{}';
    }
    return 'interface{}';
  }

  // 生成TypeScript接口
  generateTypeScriptInterface(obj, interfaceName = 'Root', isNested = false) {
    let code = '';
    const nestedInterfaces = new Set();

    // 生成主接口
    code += `interface ${interfaceName} {\n`;
    
    // 属性
    for (let prop in obj) {
      const value = obj[prop];
      let type;
      
      if (value === null || value === undefined) {
        type = 'null';
      } else if (Array.isArray(value)) {
        if (value.length === 0) {
          type = 'any[]';
        } else if (typeof value[0] === 'object' && value[0] !== null) {
          const nestedInterfaceName = `I${capitalize(prop)}Item`;
          if (!nestedInterfaces.has(nestedInterfaceName)) {
            nestedInterfaces.add(nestedInterfaceName);
            code = this.generateTypeScriptInterface(value[0], nestedInterfaceName, true) + '\n\n' + code;
          }
          type = `${nestedInterfaceName}[]`;
        } else {
          type = `${this.typeConverter.toTypeScriptType(value[0])}[]`;
        }
      } else if (typeof value === 'object') {
        const nestedInterfaceName = `I${capitalize(prop)}`;
        if (!nestedInterfaces.has(nestedInterfaceName)) {
          nestedInterfaces.add(nestedInterfaceName);
          code = this.generateTypeScriptInterface(value, nestedInterfaceName, true) + '\n\n' + code;
        }
        type = nestedInterfaceName;
      } else {
        type = this.typeConverter.toTypeScriptType(value);
      }
      
      code += `    ${prop}: ${type};\n`;
    }
    
    code += '}';
    return code;
  }
}

// 辅助函数
const isComplexObject = (value) => {
  return value !== null && 
         typeof value === 'object' && 
         !Array.isArray(value) &&
         Object.keys(value).length > 0;
};

const getNestedClassName = (obj) => {
  const keys = Object.keys(obj);
  if (keys.length === 0) return 'Object';
  return capitalize(keys[0]) + 'Type';
};

const getNestedInterfaceName = (obj) => {
  const keys = Object.keys(obj);
  if (keys.length === 0) return 'object';
  return 'I' + capitalize(keys[0]);
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const escapeXml = (str) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

const formatYamlValue = (value) => {
  if (typeof value === 'string') {
    // 检查是否需要引号
    if (value.match(/[:#{}[\],&*?|<>=!%@`]/)) {
      return `"${value.replace(/"/g, '\\"')}"`;
    }
    return value;
  }
  return String(value);
};

// 导出实例
export const TypeConverter = new TypeConverterClass();
export const FormatConverter = new FormatConverterClass();
export const CodeGenerator = new CodeGeneratorClass(); 