// Google Analytics 事件跟踪
export const trackEvent = (category, action, label) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};

// 页面访问跟踪
export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', 'G-Q3VTNFXX6T', {
      page_path: path,
    });
  }
}; 