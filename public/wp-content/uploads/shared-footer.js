(function() {
  'use strict';
  
  const footerHTML = `
    <footer class="frigidaire-shared-footer" style="background: #ffffff; padding: 60px 0 0; margin-top: 80px;">
      <div class="footer-container" style="max-width: 1400px; margin: 0 auto; padding: 0 20px;">
        <div class="footer-content" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 60px; margin-bottom: 40px;">
          <div class="footer-column">
            <img src="/wp-content/uploads/2026/01/frigidaire-full-color-logo-1.svg" 
                 alt="FRIGIDAIRE" 
                 class="footer-logo" 
                 style="max-width: 150px; margin-bottom: 15px; display: block;">
            <p class="footer-tagline" style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Offering durable, stylish appliances<br>for modern outdoor spaces.
            </p>
            <div class="social-icons" style="display: flex; gap: 15px;">
              <a href="https://www.instagram.com/frigidaireoutdoorliving/" 
                 target="_blank" 
                 rel="noopener"
                 aria-label="Follow us on Instagram"
                 class="social-icon" 
                 style="color: #353535; transition: color 0.2s;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@FrigidaireOutdoorLiving" 
                 target="_blank" 
                 rel="noopener"
                 aria-label="Watch us on YouTube"
                 class="social-icon" 
                 style="color: #353535; transition: color 0.2s;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="footer-column">
            <h6 style="color: #353535; font-size: 16px; font-weight: 700; margin-bottom: 20px;">Get In Touch</h6>
            <ul class="footer-contact" style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 12px;">
                <a href="mailto:info@frigidaireoutdoorliving.com" 
                   style="color: #666; text-decoration: none; transition: color 0.2s;">
                  info@frigidaireoutdoorliving.com
                </a>
              </li>
              <li>
                <a href="tel:1-844-298-7190" 
                   style="color: #666; text-decoration: none; transition: color 0.2s;">
                  1-844-298-7190
                </a>
              </li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h6 style="color: #353535; font-size: 16px; font-weight: 700; margin-bottom: 20px;">Quick Links</h6>
            <ul class="footer-links" style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 12px;">
                <a href="/home-page/freestanding-folding-electric-dual-element-grill-guide-overview/" 
                   style="color: #666; text-decoration: none; transition: color 0.2s;">
                  PRODUCT OVERVIEW
                </a>
              </li>
              <li style="margin-bottom: 12px;">
                <a href="/home-page/terms-of-use-and-sale/" 
                   style="color: #666; text-decoration: none; transition: color 0.2s;">
                  TERMS OF USE AND SALE
                </a>
              </li>
              <li style="margin-bottom: 12px;">
                <a href="/home-page/terms-and-conditions/" 
                   style="color: #666; text-decoration: none; transition: color 0.2s;">
                  TERMS AND CONDITIONS
                </a>
              </li>
              <li>
                <a href="/home-page/privacy-policy/" 
                   style="color: #666; text-decoration: none; transition: color 0.2s;">
                  PRIVACY POLICY
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom" style="background: #DB4155; padding: 20px; text-align: center; color: #ffffff; font-size: 13px;">
        ©FRIGIDAIRE is a pending or registered trademark of Electrolux Home Products Inc. and used under a license from Electrolux Home Products Inc.
      </div>
    </footer>
    
    <style>
      .frigidaire-shared-footer {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif !important;
      }
      
      .frigidaire-shared-footer * {
        box-sizing: border-box;
      }
      
      .frigidaire-shared-footer .social-icon:hover {
        color: #DB4155 !important;
      }
      
      .frigidaire-shared-footer .footer-contact a:hover,
      .frigidaire-shared-footer .footer-links a:hover {
        color: #DB4155 !important;
      }
      
      @media (max-width: 768px) {
        .frigidaire-shared-footer .footer-content {
          grid-template-columns: 1fr !important;
          gap: 40px !important;
        }
        
        .frigidaire-shared-footer {
          padding: 40px 0 0 !important;
          margin-top: 60px !important;
        }
      }
    </style>
  `;
  
  // Function to insert footer
  function insertFooter() {
    // Check if footer already exists
    if (document.querySelector('.frigidaire-shared-footer')) {
      return;
    }
    
    // Insert footer at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
  
  // Insert footer when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertFooter);
  } else {
    insertFooter();
  }
})();
