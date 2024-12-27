/**
 * 性能监控工具
 * 用于收集和报告网站性能指标
 */

// 性能指标名称
const METRICS = {
  FCP: 'first-contentful-paint',
  LCP: 'largest-contentful-paint',
  FID: 'first-input-delay',
  CLS: 'cumulative-layout-shift',
  TTFB: 'time-to-first-byte'
};

/**
 * 报告性能指标
 * @param {Object} metric - 性能指标对象
 */
export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    const { name, value, rating } = metric;
    
    // 记录到控制台
    console.log(`Performance: ${name} = ${value} (${rating})`);
    
    // 如果配置了 Google Analytics，发送性能数据
    if (window.gtag) {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: rating,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        non_interaction: true,
      });
    }
  }
}

/**
 * 监控资源加载性能
 */
export function monitorResourceLoading() {
  if (window.performance && window.performance.getEntriesByType) {
    window.performance.getEntriesByType('resource').forEach(resource => {
      const duration = resource.duration;
      const size = resource.transferSize;
      
      if (duration > 1000 || size > 1000000) { // 超过1秒或1MB
        console.warn(`Slow resource: ${resource.name}`, {
          duration: `${duration}ms`,
          size: `${(size / 1024).toFixed(2)}KB`
        });
      }
    });
  }
}

/**
 * 监控组件加载时间
 * @param {string} componentName - 组件名称
 * @returns {Function} 计时结束函数
 */
export function measureComponentLoad(componentName) {
  const startTime = performance.now();
  
  return () => {
    const duration = performance.now() - startTime;
    console.log(`Component ${componentName} loaded in ${duration.toFixed(2)}ms`);
    
    // 发送到 Google Analytics
    if (window.gtag) {
      window.gtag('event', 'component_load', {
        event_category: 'Performance',
        event_label: componentName,
        value: Math.round(duration),
      });
    }
  };
}

// 监听性能指标
if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
  // 监控 LCP
  const lcpObserver = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    reportWebVitals({
      label: 'web-vital',
      name: METRICS.LCP,
      value: lastEntry.startTime,
      rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor'
    });
  });
  lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

  // 监控 FID
  const fidObserver = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      reportWebVitals({
        label: 'web-vital',
        name: METRICS.FID,
        value: entry.processingStart - entry.startTime,
        rating: entry.duration < 100 ? 'good' : entry.duration < 300 ? 'needs-improvement' : 'poor'
      });
    });
  });
  fidObserver.observe({ entryTypes: ['first-input'] });

  // 监控 CLS
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      clsValue += entry.value;
      reportWebVitals({
        label: 'web-vital',
        name: METRICS.CLS,
        value: clsValue,
        rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
      });
    });
  });
  clsObserver.observe({ entryTypes: ['layout-shift'] });
} 