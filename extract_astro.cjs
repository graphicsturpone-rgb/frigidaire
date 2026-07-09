const fs = require('fs');

const html = fs.readFileSync('legacy_html/index.html', 'utf8');

const headMatch = html.match(/<head>([\s\S]*?)<\/head>/);
const head = headMatch ? headMatch[1] : '';

const headerMatch = html.match(/<header>([\s\S]*?)<\/header>/);
const header = headerMatch ? headerMatch[1] : '';

const footerMatch = html.match(/<footer class="site-footer">([\s\S]*?)<\/footer>/);
const footer = footerMatch ? footerMatch[1] : '';

const bodyScriptsMatch = html.match(/(<script src="https:\/\/challenges\.cloudflare\.com[\s\S]*?<\/html>)/);
const bodyScripts = bodyScriptsMatch ? bodyScriptsMatch[1].replace('</html>', '').replace('</body>', '') : '';

const layoutAstro = `---
export interface Props {
    title: string;
    lang: string;
}
const { title, lang } = Astro.props;
---
<!DOCTYPE html>
<html lang={lang}>
<head>
${head.replace(/<title>.*?<\/title>/, '<title>{title}</title>').replace(/<style>([\s\S]*?)<\/style>/, '<style is:global>\n$1\n</style>')}
</head>
<body>
    <header>
${header}
    </header>
    <main id="main-content">
        <slot />
    </main>
    <footer class="site-footer">
${footer}
    </footer>
${bodyScripts}
</body>
</html>`;

fs.mkdirSync('src/layouts', { recursive: true });
fs.writeFileSync('src/layouts/Layout.astro', layoutAstro);

const mainMatch = html.match(/<main id="main-content">([\s\S]*?)<\/main>/);
let main = mainMatch ? mainMatch[1] : '';

const indexAstro = `---
import Layout from '../layouts/Layout.astro';
import { getCollection } from 'astro:content';

const retailers = await getCollection('retailers');
retailers.sort((a, b) => a.data.display_order - b.data.display_order);

const faqs = await getCollection('faqs', ({ data }) => {
  return data.language === 'en';
});
---
<Layout title="Frigidaire Outdoor Living - Electric Dual Element Grill" lang="en">
${main}
</Layout>`;

fs.writeFileSync('src/pages/index.astro', indexAstro);

const frHtml = fs.readFileSync('legacy_html/fr/index.html', 'utf8');
const frMainMatch = frHtml.match(/<main id="main-content">([\s\S]*?)<\/main>/);
let frMain = frMainMatch ? frMainMatch[1] : '';

const frIndexAstro = `---
import Layout from '../../layouts/Layout.astro';
import { getCollection } from 'astro:content';

const retailers = await getCollection('retailers');
retailers.sort((a, b) => a.data.display_order - b.data.display_order);

const faqs = await getCollection('faqs', ({ data }) => {
  return data.language === 'fr';
});
---
<Layout title="Frigidaire Outdoor Living - Gril électrique à double élément" lang="fr">
${frMain}
</Layout>`;

fs.mkdirSync('src/pages/fr', { recursive: true });
fs.writeFileSync('src/pages/fr/index.astro', frIndexAstro);

console.log('Layout and Index generated.');
