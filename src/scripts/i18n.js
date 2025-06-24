const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects', 
      contact: 'Contact'
    }
  }
};

class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'es';
    this.init();
  }
  
  init() {
    this.updateContent();
    this.bindEvents();
  }
  
  bindEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-lang]')) {
        this.switchLanguage(e.target.dataset.lang);
      }
    });
  }
  
  switchLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    this.updateContent();
  }
  
  updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      const translation = this.getTranslation(key);
      if (translation) {
        element.textContent = translation;
      }
    });
  }
  
  getTranslation(key) {
    return key.split('.').reduce((obj, k) => obj?.[k], translations[this.currentLang]);
  }
}

// Initialize
new I18n();
