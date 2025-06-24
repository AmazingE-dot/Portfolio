class PerformanceOptimizer {
  constructor() {
    this.init();
  }
  
  init() {
    this.preloadCriticalResources();
    this.setupServiceWorker();
  }
  
  preloadCriticalResources() {
    const criticalResources = [
      '/images/avatar.jpg',
      '/images/hero-bg.jpg'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }
  
  setupServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }
}

new PerformanceOptimizer();