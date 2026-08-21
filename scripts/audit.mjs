import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appBuildDir = path.join(__dirname, '..', '.next', 'server', 'app');
const siteCanonicalDomain = 'https://mersinuzmaneller.com';

function getHtmlFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      getHtmlFiles(filepath, files);
    } else if (stat.isFile() && file.endsWith('.html')) {
      if (!file.includes('_not-found') && !file.includes('_error') && !file.includes('global-error')) {
        files.push(filepath);
      }
    }
  }
  return files;
}

function calculateSimilarity(str1, str2) {
  const s1 = str1.toLowerCase().replace(/[^a-z0-9]/g, ' ');
  const s2 = str2.toLowerCase().replace(/[^a-z0-9]/g, ' ');
  const words1 = new Set(s1.split(/\s+/).filter(Boolean));
  const words2 = new Set(s2.split(/\s+/).filter(Boolean));
  
  const intersection = new Set([...words1].filter(x => words2.has(x)));
  const union = new Set([...words1, ...words2]);
  
  if (union.size === 0) return 0;
  return intersection.size / union.size;
}

function runAudit() {
  const htmlFiles = getHtmlFiles(appBuildDir);
  console.log(`\n=== NEXT.JS PRODUCTION SEO AUDIT ===`);
  console.log(`Scanning build outputs in ${htmlFiles.length} routes...\n`);

  const validFiles = new Set(htmlFiles.map(f => path.normalize(f)));
  const pageReports = [];
  const allInternalLinks = [];
  const anchorDiversity = {}; // targetRoute -> Set(anchorTexts)

  // 1. Analyze Each Page
  for (const file of htmlFiles) {
    const relativePath = path.relative(appBuildDir, file);
    let route = '/' + relativePath.replace('.html', '').replace(/\\/g, '/').replace('/index', '').replace('index', '');
    if (route.endsWith('/') && route !== '/') route = route.slice(0, -1);
    
    const html = fs.readFileSync(file, 'utf8');

    // Parse elements using simple Regex for speed and portability
    const titleMatch = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : '';

    const descMatch = html.match(/<meta\b[^>]*name="description"[^>]*content="([^"]*)"/i) || 
                      html.match(/<meta\b[^>]*content="([^"]*)"[^>]*name="description"/i);
    const description = descMatch ? descMatch[1].trim() : '';

    const canonicalMatch = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]*)"/i) ||
                           html.match(/<link\b[^>]*href="([^"]*)"[^>]*rel="canonical"/i);
    const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';

    const h1Matches = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]*>/g, '').trim());
    const headings = [...html.matchAll(/<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => ({
      tag: m[1].toLowerCase(),
      text: m[2].replace(/<[^>]*>/g, '').trim()
    }));

    // Word count inside <main>
    const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
    const mainContent = mainMatch ? mainMatch[1] : html;
    const cleanText = mainContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = cleanText.split(/\s+/).filter(Boolean).length;

    // Alt-less images
    const imgMatches = [...html.matchAll(/<img\b([^>]*)/gi)];
    const imagesWithoutAlt = [];
    imgMatches.forEach(img => {
      const attrs = img[1];
      if (!attrs.includes('alt="') || attrs.match(/alt=""/)) {
        const srcMatch = attrs.match(/src="([^"]*)"/);
        imagesWithoutAlt.push(srcMatch ? srcMatch[1] : 'unknown-src');
      }
    });

    // JSON-LD validations
    const jsonLdBlocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
    const parsedSchemas = [];
    let schemaErrors = [];
    jsonLdBlocks.forEach((block, idx) => {
      try {
        const parsed = JSON.parse(block.trim());
        parsedSchemas.push(parsed);
      } catch (err) {
        schemaErrors.push(`Failed to parse script block ${idx + 1}: ${err.message}`);
      }
    });

    // Check heading level jumps
    const headingJumps = [];
    let lastLevel = 0;
    headings.forEach(h => {
      const currentLevel = parseInt(h.tag[1]);
      if (lastLevel > 0 && currentLevel > lastLevel + 1) {
        headingJumps.push(`Jump from ${lastLevel} to ${currentLevel} (${h.text})`);
      }
      lastLevel = currentLevel;
    });

    // Link parsing
    const hrefMatches = [...html.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];
    const pageErrors = [];

    hrefMatches.forEach(m => {
      const href = m[1].trim();
      const anchorText = m[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

      if (href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('javascript:')) {
        return;
      }
      if (href.includes('wa.me') || href.includes('whatsapp.com') || href.includes('google.com/maps') || href.includes('share.google')) {
        return;
      }

      let cleanHref = href;
      if (cleanHref.startsWith(siteCanonicalDomain)) {
        cleanHref = cleanHref.substring(siteCanonicalDomain.length);
      }
      if (cleanHref.startsWith('http://') || cleanHref.startsWith('https://')) {
        return; // External
      }

      const hashIndex = cleanHref.indexOf('#');
      if (hashIndex !== -1) {
        cleanHref = cleanHref.substring(0, hashIndex);
      }
      if (cleanHref.endsWith('/') && cleanHref !== '/') {
        cleanHref = cleanHref.slice(0, -1);
      }

      let targetFile;
      if (cleanHref === '' || cleanHref === '/') {
        targetFile = path.join(appBuildDir, 'index.html');
      } else {
        targetFile = path.join(appBuildDir, `${cleanHref}.html`);
      }

      const normalizedTarget = path.normalize(targetFile);
      if (!validFiles.has(normalizedTarget)) {
        pageErrors.push(`Kırık link: "${href}"`);
      } else {
        let targetRoute = cleanHref === '' ? '/' : cleanHref;
        if (!anchorDiversity[targetRoute]) {
          anchorDiversity[targetRoute] = new Set();
        }
        if (anchorText) {
          anchorDiversity[targetRoute].add(anchorText);
        }
      }
    });

    pageReports.push({
      route,
      title,
      description,
      canonical,
      h1Count: h1Matches.length,
      headingJumps,
      wordCount,
      imagesWithoutAlt,
      schemaErrors,
      brokenLinks: pageErrors
    });
  }

  // 2. Cross-Page Cannibalization Check (>70% title similarity)
  const cannibalizationIssues = [];
  for (let i = 0; i < pageReports.length; i++) {
    for (let j = i + 1; j < pageReports.length; j++) {
      const sim = calculateSimilarity(pageReports[i].title, pageReports[j].title);
      if (sim > 0.7 && pageReports[i].title && pageReports[j].title) {
        cannibalizationIssues.push({
          pageA: pageReports[i].route,
          pageB: pageReports[j].route,
          titleA: pageReports[i].title,
          titleB: pageReports[j].title,
          similarity: (sim * 100).toFixed(0) + '%'
        });
      }
    }
  }

  // 3. Write Markdown Report
  let md = `# SEO ve Site Sağlığı Durum Raporu (SEO-DURUM.md)

*Rapor Oluşturulma Tarihi:* ${new Date().toLocaleString('tr-TR')}
*Taranan Sayfa Sayısı:* ${pageReports.length}

---

## 1. Sayfa Analiz Detayları

| Rota | Durum | H1 Sayısı | Kelime Sayısı | Kırık Linkler | A11y / Meta Uyarıları |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **${pageReports[0].route}** | ${pageReports[0].brokenLinks.length === 0 ? '✅ PASS' : '❌ FAIL'} | ${pageReports[0].h1Count} | ${pageReports[0].wordCount} | ${pageReports[0].brokenLinks.length} | - |
`;

  pageReports.slice(1).forEach(r => {
    let status = r.brokenLinks.length === 0 && r.h1Count === 1 && r.schemaErrors.length === 0 ? '✅ PASS' : '⚠️ WARN';
    if (r.brokenLinks.length > 0) status = '❌ FAIL';

    const warnings = [];
    if (r.h1Count !== 1) warnings.push(`H1 sayısı: ${r.h1Count}`);
    if (r.title.length > 60) warnings.push(`Başlık uzun (>60: ${r.title.length})`);
    if (r.description.length > 160) warnings.push(`Açıklama uzun (>160: ${r.description.length})`);
    if (r.headingJumps.length > 0) warnings.push(`Hiyerarşi hatası (${r.headingJumps.length} adet)`);
    if (r.imagesWithoutAlt.length > 0) warnings.push(`Altsız görsel (${r.imagesWithoutAlt.length} adet)`);
    if (r.schemaErrors.length > 0) warnings.push(`Şema hatası (${r.schemaErrors.length} adet)`);

    md += `| ${r.route} | ${status} | ${r.h1Count} | ${r.wordCount} | ${r.brokenLinks.length} | ${warnings.join(', ') || 'Temiz'} |\n`;
  });

  md += `\n---

## 2. Kanibalizasyon Riskleri (>70% Başlık Benzerliği)

`;

  if (cannibalizationIssues.length === 0) {
    md += `✅ Sayfalar arasında herhangi bir başlık çakışması tespit edilmedi.\n`;
  } else {
    md += `| Sayfa A | Sayfa B | Benzerlik Oranı | Başlık A | Başlık B |
| :--- | :--- | :---: | :--- | :--- |\n`;
    cannibalizationIssues.forEach(issue => {
      md += `| ${issue.pageA} | ${issue.pageB} | ${issue.similarity} | \`${issue.titleA}\` | \`${issue.titleB}\` |\n`;
    });
  }

  md += `\n---

## 3. Anchor Metin Çeşitliliği (İlk 15 Hedef)

| Hedef Rota | Benzersiz Anchor Sayısı | Örnek Çapa Metinleri |
| :--- | :---: | :--- |\n`;

  Object.entries(anchorDiversity).slice(0, 15).forEach(([route, anchors]) => {
    md += `| ${route} | ${anchors.size} | ${Array.from(anchors).slice(0, 5).join(', ')} |\n`;
  });

  fs.writeFileSync(path.join(__dirname, '..', 'SEO-DURUM.md'), md, 'utf8');
  console.log(`SEO Audit completed successfully. Report written to SEO-DURUM.md.`);

  // Print console logs
  const brokenCount = pageReports.reduce((acc, r) => acc + r.brokenLinks.length, 0);
  if (brokenCount > 0) {
    console.error(`❌ LINK INTEGRITY FAILED: Found ${brokenCount} broken internal links.`);
    process.exit(1);
  } else {
    console.log(`✅ LINK INTEGRITY PASSED: No broken internal links found.`);
    process.exit(0);
  }
}

runAudit();
