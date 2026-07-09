const fs = require('fs');
const https = require('https');
const path = require('path');

const DOMAIN = 'https://frigidaireoutdoorliving.com';
const FILES_TO_SCAN = [
    'src/layouts/Layout.astro',
    'src/pages/index.astro',
    'src/pages/fr/index.astro'
];

let urlsToDownload = new Set();

FILES_TO_SCAN.forEach(file => {
    if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        const matches = content.match(/\/wp-content\/[^\s"'>]+/g);
        if (matches) {
            matches.forEach(m => urlsToDownload.add(m));
        }
    }
});

const downloadFile = (urlPath) => {
    return new Promise((resolve, reject) => {
        const fullUrl = DOMAIN + urlPath;
        const localPath = path.join(__dirname, 'public', urlPath);
        const dir = path.dirname(localPath);

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        if (fs.existsSync(localPath)) {
            resolve(`Already exists: ${localPath}`);
            return;
        }

        https.get(fullUrl, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to download ${fullUrl}: ${res.statusCode}`));
                return;
            }

            const file = fs.createWriteStream(localPath);
            res.pipe(file);
            file.on('finish', () => {
                file.close(() => resolve(`Downloaded: ${localPath}`));
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
};

async function main() {
    console.log(`Found ${urlsToDownload.size} unique /wp-content/ URLs.`);
    for (const urlPath of urlsToDownload) {
        try {
            const msg = await downloadFile(urlPath);
            console.log(msg);
        } catch (err) {
            console.error(err.message);
        }
    }
}

main();
