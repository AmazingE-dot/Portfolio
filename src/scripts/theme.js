class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }
  
  init() {
    this.applyTheme();
    this.bindEvents();
  }
  
  bindEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-theme-toggle]')) {
        this.toggleTheme();
      }
    });
  }
  
  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    localStorage.setItem('theme', this.theme);
  }
  
  applyTheme() {
    document.documentElement.classList.toggle('dark', this.theme === 'dark');
  }
}

new ThemeManager();