const fs = require('fs');

let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

// Smooth scroll and body fade per Premium Animation rules
if (!layout.includes("scroll-behavior: smooth")) {
    layout = layout.replace('html, body {', 'html { scroll-behavior: smooth; }\n        html, body {');
}

const bodyFadeCss = `
        body {
            animation: fadeInBody 1.2s ease-out forwards;
        }
        @keyframes fadeInBody {
            from { opacity: 0; }
            to { opacity: 1; }
        }
`;
if (!layout.includes('fadeInBody')) {
    layout = layout.replace('/* Header */', bodyFadeCss + '\n        /* Header */');
}

// Inject AOS CSS in <head>
if (!layout.includes('aos.css')) {
    layout = layout.replace('</head>', '    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">\n</head>');
}

// Inject AOS JS script and initialization
if (!layout.includes('aos.js')) {
    const aosScript = `
    <!-- AOS Premium Animations -->
    <script is:inline src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script is:inline>
        window.addEventListener('load', function() {
            AOS.init({ once: true, offset: 50, duration: 1500, easing: 'ease-out-cubic' });
            
            // Dynamically add AOS attributes
            document.querySelectorAll('section, .elementor-section, .elementor-container').forEach(function(sec) {
                sec.setAttribute('data-aos', 'fade-up');
            });
        });
    </script>
`;
    layout = layout.replace('</body>', aosScript + '\n</body>');
}

fs.writeFileSync('src/layouts/Layout.astro', layout);
console.log("Injected AOS!");
