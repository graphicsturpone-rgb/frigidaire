(function() {
  'use strict';
  
  // Only run on homepage
  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    return;
  }
  
  // Check if user has already been redirected (to avoid redirect loop)
  const hasVisited = sessionStorage.getItem('languageRedirectChecked');
  if (hasVisited) {
    return;
  }
  
  // Mark that we've checked
  sessionStorage.setItem('languageRedirectChecked', 'true');
  
  // Get browser language
  const browserLang = navigator.language || navigator.userLanguage;
  
  // Check if browser language is French (fr, fr-CA, fr-FR, etc.)
  if (browserLang && browserLang.toLowerCase().startsWith('fr')) {
    // Redirect to French version
    window.location.href = '/fr/';
  }
  // Otherwise stay on English version (default)
})();
