(function() {
  'use strict';

  var links = [
    { href: '/',                           label: 'HOME' },
    { href: '/#product',                   label: 'PRODUCT' },
    { href: '/#where-to-buy',              label: 'WHERE TO BUY' },
    { href: '/#faq',                       label: 'FAQ' },
    { href: '/#contact',                   label: 'CONTACT US' },
    { href: '/home-page/product-registration/', label: 'REGISTER' },
    { href: null, label: '__LANG_SWITCHER__' }
  ];

  function insertHeader() {
    if (document.querySelector('.frigidaire-shared-header')) return;

    var style = document.createElement('style');
    style.textContent = [
      '.frigidaire-shared-header{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif!important;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.1);position:sticky;top:0;z-index:10000;}',
      '.frigidaire-shared-header *{box-sizing:border-box;}',
      '.fsh-inner{max-width:1400px;margin:0 auto;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;}',
      '.fsh-logo{display:block;line-height:0;flex-shrink:0;}',
      '.fsh-logo img{height:30px!important;width:auto!important;max-width:calc(100vw - 72px)!important;display:block!important;}',
      '.fsh-desktop-nav ul{display:flex;list-style:none;gap:32px;margin:0;padding:0;align-items:center;}',
      '.fsh-desktop-nav a{text-decoration:none;color:#333;font-weight:600;font-size:14px;transition:color .2s;}',
      '.fsh-desktop-nav a:hover{color:#DB4155;}',
      '.fsh-lang-switcher{display:flex;align-items:center;border:2px solid #DB4155;border-radius:99px;overflow:hidden;font-size:13px;font-weight:700;letter-spacing:.5px;flex-shrink:0;}',
      '.fsh-lang-switcher a,.fsh-lang-switcher span{padding:5px 13px;text-decoration:none;line-height:1;transition:background .2s,color .2s;}',
      '.fsh-lang-active{background:#DB4155;color:#fff!important;cursor:default;pointer-events:none;}',
      '.fsh-lang-inactive{color:#DB4155!important;background:transparent;}',
      '.fsh-lang-inactive:hover{background:#DB4155!important;color:#fff!important;}',
      '.fsh-lang-divider{color:#DB4155;padding:0;line-height:1;font-weight:400;align-self:center;}',
      '.fsh-overlay .fsh-lang-switcher{border-color:#DB4155;margin-top:8px;}',
      '.fsh-overlay .fsh-lang-active{font-size:18px;}',
      '.fsh-overlay .fsh-lang-inactive{font-size:18px;}',
      '.fsh-skip{position:absolute;left:-9999px;top:4px;z-index:99999;padding:8px 16px;background:#DB4155;color:#fff;font-weight:700;border-radius:4px;text-decoration:none;font-size:14px;}.fsh-skip:focus{left:4px;}',
      '.fsh-hamburger{display:none;background:none;border:none;cursor:pointer;padding:8px;flex-shrink:0;}',
      '.fsh-overlay{position:fixed;inset:0;width:100%;height:100%;background:#fff;z-index:99999;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:28px;list-style:none;margin:0;padding:80px 40px 40px;transform:translateX(100%);transition:transform .35s cubic-bezier(.4,0,.2,1);pointer-events:none;}',
      '.fsh-overlay.open{transform:translateX(0);pointer-events:auto;}',
      '.fsh-overlay li{opacity:0;transform:translateY(16px);transition:opacity .3s ease,transform .3s ease;}',
      '.fsh-overlay.open li{opacity:1;transform:translateY(0);}',
      '.fsh-overlay.open li:nth-child(1){transition-delay:.05s}',
      '.fsh-overlay.open li:nth-child(2){transition-delay:.10s}',
      '.fsh-overlay.open li:nth-child(3){transition-delay:.15s}',
      '.fsh-overlay.open li:nth-child(4){transition-delay:.20s}',
      '.fsh-overlay.open li:nth-child(5){transition-delay:.25s}',
      '.fsh-overlay.open li:nth-child(6){transition-delay:.30s}',
      '.fsh-overlay.open li:nth-child(7){transition-delay:.35s}',
      '.fsh-overlay a{text-decoration:none;color:#333;font-weight:700;font-size:22px;letter-spacing:1px;}',
      '.fsh-overlay a:hover{color:#DB4155;}',
      '.fsh-close-btn{position:absolute;top:20px;right:20px;background:none;border:none;cursor:pointer;padding:8px;color:#333;}',
      'body.fsh-open{overflow:hidden;}',
      '@media(max-width:768px){.fsh-hamburger{display:flex;align-items:center;justify-content:center;}.fsh-desktop-nav{display:none;}}'
    ].join('');
    document.head.appendChild(style);

    var skip = document.createElement('a');
    skip.href = '#main-content';
    skip.className = 'fsh-skip';
    skip.textContent = 'Skip to main content';
    document.body.insertBefore(skip, document.body.firstChild);

    var header = document.createElement('header');
    header.className = 'frigidaire-shared-header';
    header.setAttribute('role', 'banner');

    var inner = document.createElement('div');
    inner.className = 'fsh-inner';

    var logo = document.createElement('a');
    logo.href = '/';
    logo.className = 'fsh-logo';
    logo.setAttribute('aria-label', 'Frigidaire Outdoor Living — Home');
    logo.innerHTML = '<img src="/wp-content/uploads/2026/01/frigidaire-full-color-logo-1.svg" alt="Frigidaire Outdoor Living">';

    var hamburger = document.createElement('button');
    hamburger.className = 'fsh-hamburger';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    hamburger.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';

    var desktopNav = document.createElement('nav');
    desktopNav.className = 'fsh-desktop-nav';
    desktopNav.setAttribute('aria-label', 'Main navigation');
    var desktopUl = document.createElement('ul');
    links.forEach(function(l) {
      var li = document.createElement('li');
      if (l.label === '__LANG_SWITCHER__') {
        li.innerHTML = '<div class="fsh-lang-switcher"><span class="fsh-lang-active" aria-current="true">EN</span><span class="fsh-lang-divider" aria-hidden="true">|</span><a href="/fr/" class="fsh-lang-inactive" aria-label="Switch to French">FR</a></div>';
      } else {
        li.innerHTML = '<a href="' + l.href + '">' + l.label + '</a>';
      }
      desktopUl.appendChild(li);
    });
    desktopNav.appendChild(desktopUl);

    inner.appendChild(logo);
    inner.appendChild(hamburger);
    inner.appendChild(desktopNav);
    header.appendChild(inner);
    document.body.insertBefore(header, document.body.firstChild);

    var overlay = document.createElement('ul');
    overlay.className = 'fsh-overlay';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'fsh-close-btn';
    closeBtn.setAttribute('aria-label', 'Close menu');
    closeBtn.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    overlay.appendChild(closeBtn);

    links.forEach(function(l) {
      var li = document.createElement('li');
      if (l.label === '__LANG_SWITCHER__') {
        li.innerHTML = '<div class="fsh-lang-switcher"><span class="fsh-lang-active" aria-current="true">EN</span><span class="fsh-lang-divider" aria-hidden="true">|</span><a href="/fr/" class="fsh-lang-inactive" aria-label="Switch to French">FR</a></div>';
      } else {
        li.innerHTML = '<a href="' + l.href + '">' + l.label + '</a>';
      }
      overlay.appendChild(li);
    });

    document.body.appendChild(overlay);

    var hamSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    var xSVG   = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

    function openMenu() {
      overlay.classList.add('open');
      document.body.classList.add('fsh-open');
      hamburger.innerHTML = xSVG;
    }
    function closeMenu() {
      overlay.classList.remove('open');
      document.body.classList.remove('fsh-open');
      hamburger.innerHTML = hamSVG;
    }

    hamburger.addEventListener('click', function() {
      overlay.classList.contains('open') ? closeMenu() : openMenu();
    });
    closeBtn.addEventListener('click', closeMenu);

    overlay.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) closeMenu();
    });

    function handleAnchor(a) {
      a.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        var targetId = href.replace('/#', '');
        var el = document.getElementById(targetId);
        if (el) {
          e.preventDefault();
          closeMenu();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.pushState(null, null, href);
        }
      });
    }

    document.querySelectorAll('.frigidaire-shared-header a[href^="/#"]').forEach(handleAnchor);
    overlay.querySelectorAll('a[href^="/#"]').forEach(handleAnchor);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertHeader);
  } else {
    insertHeader();
  }
})();
