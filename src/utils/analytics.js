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
export const trackPageView = (page) => {
  // Google Analytics 代码
  gtag('config', 'GA-XXXXXXXXX', {
    page_path: page,
  });
  
  // 自定义事件跟踪
  gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: page
  });
}; 