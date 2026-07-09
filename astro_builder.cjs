const fs = require('fs');

let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');

// Remove Firebase init
layout = layout.replace(/<!-- Firebase & Language Redirect -->[\s\S]*?<\/script>/, `<!-- Language Redirect -->
<script>
    const userLang = navigator.language || navigator.userLanguage;
    const isFrench = userLang.startsWith('fr');
    const isCurrentFrench = window.location.pathname.includes('/fr');
    if (isFrench && !isCurrentFrench) {
        window.location.replace('/fr/');
    } else if (!isFrench && isCurrentFrench) {
        window.location.replace('/');
    }
</script>`);

// Remove loadRetailers and loadFAQs from Layout
layout = layout.replace(/async function loadRetailers\(\) \{[\s\S]*?\}\s*async function loadFAQs\(\) \{[\s\S]*?\}\s*let contactFormPending/g, 'let contactFormPending');

// Remove the skeleton loading
layout = layout.replace(/\/\/ Pre-fill grid[\s\S]*?loadFAQs\(\);/g, '');

// Save Layout
fs.writeFileSync('src/layouts/Layout.astro', layout);

function processIndex(path) {
    let index = fs.readFileSync(path, 'utf8');
    
    // Replace retailers
    const retailersJSX = `{retailers.map((retailer) => (
                    <a href={retailer.data.url} target="_blank" rel="noopener" class="retailer-card" aria-label={\`Buy \${retailer.data.name} - \${retailer.data.availability}\`} style="--card-hover-bg: #DB4155; --title-color: #333; --availability-color: #DB4155; --button-bg: #DB4155; --button-text: #fff; --star-color: #FFD700;">
                        <div class="retailer-image-wrap">
                            <img src={retailer.data.default_image || ''} alt={retailer.data.name} class="retailer-img-default" loading="lazy" width="600" height="160" />
                            <img src={retailer.data.hover_image || ''} alt={retailer.data.name} class="retailer-img-hover" loading="lazy" width="600" height="160" />
                        </div>
                        <div class="retailer-info">
                            <h3 class="retailer-name">{retailer.data.name}</h3>
                            <p class="retailer-availability">{retailer.data.availability}</p>
                            <div class="retailer-btn">BUY NOW</div>
                        </div>
                    </a>
                ))}`;
    
    index = index.replace(/<div class="retailers-grid" id="retailers-container">[\s\S]*?<\/div>/, `<div class="retailers-grid" id="retailers-container">${retailersJSX}</div>`);

    // Replace faqs
    const faqsJSX = `
                <div>
                    {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq) => (
                        <div class="faq-item" onclick="toggleFAQ(this)">
                            <div class="faq-question">
                                <span>{faq.data.question}</span>
                                <span class="faq-icon">+</span>
                            </div>
                            <div class="faq-answer">
                                <div class="faq-answer-content" set:html={faq.body} />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    {faqs.slice(Math.ceil(faqs.length / 2)).map((faq) => (
                        <div class="faq-item" onclick="toggleFAQ(this)">
                            <div class="faq-question">
                                <span>{faq.data.question}</span>
                                <span class="faq-icon">+</span>
                            </div>
                            <div class="faq-answer">
                                <div class="faq-answer-content" set:html={faq.body} />
                            </div>
                        </div>
                    ))}
                </div>
    `;

    index = index.replace(/<div class="faq-container" id="faq-container">[\s\S]*?<\/div>/, `<div class="faq-container" id="faq-container">${faqsJSX}</div>`);

    // Fix unclosed tags from legacy HTML (Astro uses strict JSX parsing)
    // Replace <br> with <br/>, <img> with <img />, <input> with <input />
    index = index.replace(/<br>/g, '<br/>');
    index = index.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
    index = index.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');
    
    fs.writeFileSync(path, index);
}

processIndex('src/pages/index.astro');
processIndex('src/pages/fr/index.astro');

console.log('JSX parsing done.');
