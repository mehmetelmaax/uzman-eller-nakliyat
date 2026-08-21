# Canlıya Alma Sonrası Doğrulama ve Test Adımları (DEPLOY-SONRASI.md)

Bu kılavuz, uzmanellernakliyat.com / mersinuzmaneller.com web sitesi Vercel (veya benzeri edge CDN) ortamına canlıya alındıktan hemen sonra yapılması gereken manuel denetim ve pazarlama kurulum adımlarını içerir.

---

## 1. Yönlendirmeler ve Protokol Kontrolleri
- [ ] **HTTPS ve www Yönlendirmesi**: Tarayıcıya `http://mersinuzmaneller.com` yazıp `https://www.mersinuzmaneller.com` adresine 301 yönlendiğini doğrulayın.
- [ ] **Trailing Slash (Eğik Çizgi)**: `/iletisim/` adresinin `/iletisim` adresine yönlendiğini doğrulayın (trailingSlash: false politikası).
- [ ] **Bölgeler Kısa Link Yönlendirmesi**: `/bolgeler/yenisehir` adresinin otomatik olarak `/bolgeler/yenisehir-evden-eve-nakliyat` uzun slug sayfasına 301 yönlendiğini doğrulayın.

---

## 2. Google Search Console (GSC) Kurulumu & Site Haritası
- [ ] **Mülk Ekleme**: GSC panelinde `https://www.mersinuzmaneller.com` mülkünü ekleyin. DNS TXT kaydı ile alan adı mülkünü doğrulayın.
- [ ] **Sitemap Gönderimi**: Search Console sitemaps bölümüne giderek `/sitemap.xml` ve `/image-sitemap.xml` dosyalarını gönderin.
- [ ] **URL Denetimi (Indexation Request)**: Ana sayfa (`/`), `/mersin-nakliyat-fiyatlari` ve `/teklif-al` sayfalarını dizine eklenmesi için manuel olarak denetleyin ve talep gönderin.

---

## 3. Google Analytics 4 (GA4) & Clarity Doğrulaması
- [ ] **Gerçek Zamanlı Takip (Debug View)**: Sitede dolaşırken Google Analytics panelinde gerçek zamanlı trafik akışını görün.
- [ ] **WhatsApp Buton Tıklaması**: Sitedeki herhangi bir WhatsApp / Telefon butonuna tıklayın ve GA4 paneline `whatsapp_tikla` / `telefon_tikla` özel olaylarının (custom events) ulaştığını doğrulayın.
- [ ] **Teklif Formu Dönüşümü**: Hesaplama robotundan `/teklif-al` sayfasında teklif oluşturup başarıyla WhatsApp'a yönlenirken `form_teklif_basarili` olayının tetiklendiğini doğrulayın.
- [ ] **Microsoft Clarity Kayıtları**: Clarity panelinden canlı kullanıcı ekran kayıtlarının ve ısı haritalarının (heatmaps) çalıştığını test edin.

---

## 4. Yapılandırılmış Veri (Schema.org) Doğrulaması
- [ ] **Schema Rich Results Validator**: [Google Zengin Sonuçlar Testi](https://search.google.com/test/rich-results) sayfasına giderek ana sayfa ve hizmet sayfalarını test edin.
  - [ ] `MovingCompany` (Organizasyon) şemasının algılandığını doğrulayın.
  - [ ] `FAQPage` ve `BreadcrumbList` şemalarının hatasız çalıştığını görün.
  - [ ] `Trip`, `ItemList` ve `ImageGallery` şemalarında hiçbir dangling (havada asılı) `@id` referansı olmadığını teyit edin.

---

## 5. Performans ve Core Web Vitals (Lighthouse)
- [ ] **Pagespeed Insights (PSI)**: [Google PageSpeed Insights](https://pagespeed.web.dev/) aracında sitenin mobil ve masaüstü puanlarını ölçün. Mobil performansta LCP (En Büyük İçerikli Boyama) süresinin **2.5 saniyenin altında** ve performans skorunun yeşil olduğunu doğrulayın.
- [ ] **CLY (Kümülatif Düzen Kayması)**: Sayfa yüklenirken resimlerin veya slider'ın kayma yapıp yapmadığını mobil cihaz üzerinden manuel olarak gözlemleyin (CLS: 0 olmalıdır).
