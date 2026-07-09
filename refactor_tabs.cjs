const fs = require('fs');

const replacementTabs = `
    <!-- Getting Started Tabs (Tailwind CSS) -->
    <section class="bg-white">
        <!-- Header -->
        <div class="bg-[#DB4155] text-white py-4 px-8 text-center text-lg font-semibold uppercase tracking-widest">
            GETTING STARTED WITH YOUR GRILL
        </div>
        
        <!-- Tabs -->
        <div class="flex flex-wrap justify-center gap-2 md:gap-16 py-8 px-4 bg-white">
            <button class="tab-btn active text-sm md:text-base font-semibold text-[#666] border-b-4 border-transparent uppercase pb-2 transition-all duration-300" data-target="tab-0">ABOUT THE GRILL</button>
            <button class="tab-btn text-sm md:text-base font-semibold text-[#666] border-b-4 border-transparent uppercase pb-2 transition-all duration-300" data-target="tab-1">WHAT'S IN THE BOX?</button>
            <button class="tab-btn text-sm md:text-base font-semibold text-[#666] border-b-4 border-transparent uppercase pb-2 transition-all duration-300" data-target="tab-2">SAFETY & CERTIFICATION</button>
        </div>

        <!-- Tab Contents -->
        <div class="max-w-7xl mx-auto px-5 md:px-10 pb-20">
            
            <!-- Tab 0: ABOUT THE GRILL -->
            <div class="tab-pane active grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center" id="tab-0">
                <div class="text-center">
                    <img src="https://frigidaireoutdoorliving.com/wp-content/uploads/2026/01/DUAL-ELEC-GRILL-DIMENTIONS-1-scaled.webp" alt="Grill Specifications with Dimensions" loading="lazy" width="1200" height="849" class="w-full h-auto object-cover" />
                </div>
                <div class="bg-[#f5f5f5] p-8 md:p-10 rounded-lg">
                    <h3 class="text-2xl md:text-3xl font-bold text-[#333] mb-6 uppercase leading-tight font-['Gotham',sans-serif]">DUAL HIGH-PERFORMANCE HEATING ELEMENTS <span class="text-[#DB4155]">REACH UP TO 700&deg;F</span></h3>
                    <ul class="space-y-3">
                        <li class="relative pl-6 text-[#666] text-base leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[#DB4155] before:font-bold">Large 19" x 17" cast iron cooking surface with integrated warming rack.</li>
                        <li class="relative pl-6 text-[#666] text-base leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[#DB4155] before:font-bold">Heats up in just 20 minutes and includes two meat probes for accurate temperature monitoring.</li>
                        <li class="relative pl-6 text-[#666] text-base leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[#DB4155] before:font-bold">Pivoting side shelves provide convenient prep and serving space.</li>
                        <li class="relative pl-6 text-[#666] text-base leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[#DB4155] before:font-bold">IPX4 water-resistant construction with UL certification for safe outdoor use.</li>
                        <li class="relative pl-6 text-[#666] text-base leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[#DB4155] before:font-bold">1750W / 120V electric power supported by a two year manufacturer's warranty.</li>
                    </ul>
                </div>
            </div>

            <!-- Tab 1: WHAT'S IN THE BOX -->
            <div class="tab-pane hidden grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center" id="tab-1">
                <div class="bg-[#f5f5f5] p-8 md:p-10 rounded-lg">
                    <h3 class="text-2xl md:text-3xl font-bold text-[#333] mb-6 uppercase leading-tight font-['Gotham',sans-serif]">EVERYTHING YOU NEED TO GET STARTED <span class="text-[#DB4155]">RIGHT OUT OF THE BOX</span></h3>
                    <ul class="space-y-3">
                        <li class="relative pl-6 text-[#666] text-base leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[#DB4155] before:font-bold">Electric grill assembled with integrated grease tray.</li>
                        <li class="relative pl-6 text-[#666] text-base leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[#DB4155] before:font-bold">Panel base support featuring bottle opener and power cord holder.</li>
                        <li class="relative pl-6 text-[#666] text-base leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[#DB4155] before:font-bold">Side shelves and wheels for added workspace and mobility.</li>
                        <li class="relative pl-6 text-[#666] text-base leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[#DB4155] before:font-bold">Meat temperature probes for precise cooking control.</li>
                    </ul>
                </div>
                <div class="relative bg-[#DB4155] p-10" style="clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);">
                    <img src="/wp-content/uploads/2026/01/BOX-1-1024x645.webp" alt="Box Contents" loading="lazy" width="1024" height="645" class="w-full h-auto block" />
                </div>
            </div>

            <!-- Tab 2: SAFETY & CERTIFICATION -->
            <div class="tab-pane hidden grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start" id="tab-2">
                <div class="bg-[#f5f5f5] p-8 md:p-10 rounded-lg">
                    <h3 class="text-2xl md:text-3xl font-bold text-[#333] mb-6 uppercase leading-tight font-['Gotham',sans-serif]"><span class="text-[#DB4155]">CAUTION :</span> RISK OF ELECTRIC SHOCK</h3>
                    <ul class="space-y-3 mb-6">
                        <li class="relative pl-6 text-[#666] text-base leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[#DB4155] before:font-bold">Keep extension cord connection dry and off the ground.</li>
                        <li class="relative pl-6 text-[#666] text-base leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[#DB4155] before:font-bold">To ensure continued protection against risk of electric shock, connect to properly grounded outlets only.</li>
                        <li class="relative pl-6 text-[#666] text-base leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[#DB4155] before:font-bold">Household use only.</li>
                        <li class="relative pl-6 text-[#666] text-base leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[#DB4155] before:font-bold">Do not immerse in water.</li>
                    </ul>
                    <a href="/wp-content/uploads/2025/12/MANUAL-TEG-003-C-FRIGIDAIRE-FREE-STANDING-FOLDING-ELECTRIC-DUAL-ELEMENT-GRILL.pdf" target="_blank" class="inline-block bg-[#ccc] text-[#333] font-semibold py-3 px-6 rounded-full transition-colors hover:bg-gray-300">READ MANUAL BEFORE USE &rarr;</a>
                </div>
                <div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div class="bg-[#f5f5f5] p-10 text-center rounded-lg flex items-center justify-center">
                            <img src="/wp-content/uploads/2025/12/FRI-LISTED-300x180.webp" alt="UL Listed" loading="lazy" width="300" height="180" class="max-w-[200px]" />
                        </div>
                        <div class="bg-[#f5f5f5] p-10 text-center rounded-lg flex items-center justify-center">
                            <h2 class="text-[#DB4155] text-5xl md:text-7xl font-bold m-0 font-['Gotham',sans-serif]">IPX4</h2>
                        </div>
                    </div>
                    <div class="text-left text-[#666] font-['Gotham',sans-serif]">
                        <p class="mb-6 leading-relaxed">This Frigidaire Outdoor Living grill is UL certified for both the U.S. and Canada, ensuring it meets strict safety standards. It is also IPX4 weather-rated, providing reliable protection against splashing water for safe outdoor use.</p>
                        <a href="/wp-content/uploads/2025/12/MANUAL-TEG-003-C-FRIGIDAIRE-FREE-STANDING-FOLDING-ELECTRIC-DUAL-ELEMENT-GRILL.pdf" download class="inline-block bg-[#DB4155] text-white font-semibold py-3 px-6 rounded-full transition-colors hover:bg-[#c23648]">DOWNLOAD USER MANUAL</a>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Tailwind JS Tab Script -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const tabs = document.querySelectorAll('.tab-btn');
            const panes = document.querySelectorAll('.tab-pane');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active from all tabs
                    tabs.forEach(t => {
                        t.classList.remove('active', 'border-[#DB4155]', 'text-[#DB4155]');
                        t.classList.add('border-transparent', 'text-[#666]');
                    });
                    
                    // Add active to clicked
                    tab.classList.remove('border-transparent', 'text-[#666]');
                    tab.classList.add('active', 'border-[#DB4155]', 'text-[#DB4155]');
                    
                    // Hide all panes
                    panes.forEach(pane => {
                        pane.classList.add('hidden');
                    });
                    
                    // Show target pane
                    const target = document.getElementById(tab.getAttribute('data-target'));
                    if(target) {
                        target.classList.remove('hidden');
                    }
                });
            });
            
            // Set initial active state correctly based on HTML classes
            const initialActiveTab = document.querySelector('.tab-btn.active');
            if (initialActiveTab) {
                initialActiveTab.classList.remove('border-transparent', 'text-[#666]');
                initialActiveTab.classList.add('border-[#DB4155]', 'text-[#DB4155]');
            }
        });
    </script>
`;

function processAstroFile(file, isFrench) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Find the getting-started section
    const startIdx = content.indexOf('    <section class="getting-started">');
    const endIdx = content.indexOf('    <!-- Where to Buy -->');
    
    if (startIdx !== -1 && endIdx !== -1) {
        let finalHTML = replacementTabs;
        if (isFrench) {
            finalHTML = finalHTML.replace('GETTING STARTED WITH YOUR GRILL', "POUR COMMENCER AVEC VOTRE BARBECUE");
            finalHTML = finalHTML.replace('ABOUT THE GRILL', "À PROPOS DU BARBECUE");
            finalHTML = finalHTML.replace("WHAT'S IN THE BOX?", "QU'Y A-T-IL DANS LA BOÎTE ?");
            finalHTML = finalHTML.replace('SAFETY & CERTIFICATION', "SÉCURITÉ ET CERTIFICATION");
            finalHTML = finalHTML.replace('DUAL HIGH-PERFORMANCE HEATING ELEMENTS <span class="text-[#DB4155]">REACH UP TO 700&deg;F</span>', "LES DOUBLES ÉLÉMENTS CHAUFFANTS HAUTE PERFORMANCE <span class=\"text-[#DB4155]\">ATTEIGNENT JUSQU'À 700&deg;F</span>");
            finalHTML = finalHTML.replace('Large 19" x 17" cast iron cooking surface with integrated warming rack.', "Grande surface de cuisson en fonte de 19\" x 17\" avec grille de réchaud intégrée.");
            finalHTML = finalHTML.replace('Heats up in just 20 minutes and includes two meat probes for accurate temperature monitoring.', "Chauffe en seulement 20 minutes et comprend deux sondes à viande pour un contrôle précis de la température.");
            finalHTML = finalHTML.replace('Pivoting side shelves provide convenient prep and serving space.', "Des tablettes latérales pivotantes offrent un espace de préparation et de service pratique.");
            finalHTML = finalHTML.replace('IPX4 water-resistant construction with UL certification for safe outdoor use.', "Construction résistante à l'eau IPX4 avec certification UL pour une utilisation extérieure sécuritaire.");
            finalHTML = finalHTML.replace("1750W / 120V electric power supported by a two year manufacturer's warranty.", "Alimentation électrique 1750W / 120V couverte par une garantie constructeur de deux ans.");
            
            finalHTML = finalHTML.replace('EVERYTHING YOU NEED TO GET STARTED <span class="text-[#DB4155]">RIGHT OUT OF THE BOX</span>', "TOUT CE DONT VOUS AVEZ BESOIN POUR COMMENCER <span class=\"text-[#DB4155]\">DÈS LA SORTIE DE LA BOÎTE</span>");
            finalHTML = finalHTML.replace('Electric grill assembled with integrated grease tray.', "Barbecue électrique assemblé avec bac à graisse intégré.");
            finalHTML = finalHTML.replace('Panel base support featuring bottle opener and power cord holder.', "Support de base avec décapsuleur et support de cordon d'alimentation.");
            finalHTML = finalHTML.replace('Side shelves and wheels for added workspace and mobility.', "Tablettes latérales et roues pour plus d'espace de travail et de mobilité.");
            finalHTML = finalHTML.replace('Meat temperature probes for precise cooking control.', "Sondes de température à viande pour un contrôle précis de la cuisson.");
            
            finalHTML = finalHTML.replace('<span class="text-[#DB4155]">CAUTION :</span> RISK OF ELECTRIC SHOCK', "<span class=\"text-[#DB4155]\">ATTENTION :</span> RISQUE DE CHOC ÉLECTRIQUE");
            finalHTML = finalHTML.replace('Keep extension cord connection dry and off the ground.', "Gardez la connexion de la rallonge au sec et hors du sol.");
            finalHTML = finalHTML.replace('To ensure continued protection against risk of electric shock, connect to properly grounded outlets only.', "Pour garantir une protection continue contre les risques de chocs électriques, connectez uniquement à des prises correctement mises à la terre.");
            finalHTML = finalHTML.replace('Household use only.', "Usage domestique uniquement.");
            finalHTML = finalHTML.replace('Do not immerse in water.', "Ne pas plonger dans l'eau.");
            finalHTML = finalHTML.replace('READ MANUAL BEFORE USE &rarr;', "LIRE LE MANUEL AVANT UTILISATION &rarr;");
            
            finalHTML = finalHTML.replace('This Frigidaire Outdoor Living grill is UL certified for both the U.S. and Canada, ensuring it meets strict safety standards. It is also IPX4 weather-rated, providing reliable protection against splashing water for safe outdoor use.', "Ce barbecue Frigidaire Outdoor Living est certifié UL pour les États-Unis et le Canada, garantissant qu'il répond aux normes de sécurité strictes. Il est également classé IPX4 pour sa résistance aux intempéries, offrant une protection fiable contre les éclaboussures d'eau pour une utilisation extérieure en toute sécurité.");
            finalHTML = finalHTML.replace('DOWNLOAD USER MANUAL', "TÉLÉCHARGER LE MANUEL");
        }
        content = content.substring(0, startIdx) + finalHTML.trim() + '\n\n' + content.substring(endIdx);
        fs.writeFileSync(file, content);
    }
}

processAstroFile('src/pages/index.astro', false);
processAstroFile('src/pages/fr/index.astro', true);
