export interface BlogMetadata {
  id: string;
  title: string;
  desc: string;
  date: string;
  author: string;
  category: string;
  image: string;
  excerpt: string;
  readTime: number;
}

export const blogMetadataDatabase: Record<string, BlogMetadata> = {
  "mersin-nakliyat-fiyatlari": {
    "id": "mersin-nakliyat-fiyatlari",
    "title": "Mersin Nakliyat Bütçesi ve Ev Taşıma Maliyet Hesaplama Rehberi",
    "desc": "Mersin'de ev taşırken bütçe planlaması nasıl yapılır? Nakliyat maliyetini hesaplama yöntemleri, gizli maliyetlerden kaçınma yolları ve tasarruf ipuçları.",
    "date": "2026-08-01",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Fiyat",
    "image": "/img/slayt-1.jpg",
    "excerpt": "Ev taşıma maliyetlerini etkileyen oda sayısı, kat durumları, asansör kurulumu ve yol mesafesi gibi temel parametreleri inceliyoruz.",
    "readTime": 1
  },
  "esya-paketleme-rehberi": {
    "id": "esya-paketleme-rehberi",
    "title": "Taşınma Öncesi Pratik Eşya Paketleme Yöntemleri",
    "desc": "Kırılacak mutfak gereçleri, cam eşyalar ve mobilyaların taşınırken zarar görmemesi için kullanılan ambalajlama standartları ve pratik paketleme rehberi.",
    "date": "2026-07-28",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Rehber",
    "image": "/img/paketleme-detay.jpg",
    "excerpt": "Kırılacak cam eşyalar ve mobilyaların zarar görmemesi için kullanılan çift kat balonlu naylon ve Kraft kutu paketleme teknikleri.",
    "readTime": 1
  },
  "asansorlu-tasima-avantajlari": {
    "id": "asansorlu-tasima-avantajlari",
    "title": "Yüksek Katlı Binalarda Mobil Asansörlü Nakliyat Avantajları",
    "desc": "Yenişehir ve Mezitli bölgelerindeki yüksek katlı rezidanslarda dış cephe teleskopik mobil asansör sistemlerinin sağladığı eşya hasarsızlık avantajları.",
    "date": "2026-07-15",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Teknik",
    "image": "/img/slayt-2.jpg",
    "excerpt": "Yenişehir ve Mezitli gibi apartman yoğunluğu yüksek bölgelerde dış cephe eşya asansörlerinin hasarı önleme ve zaman tasarrufu faydaları.",
    "readTime": 1
  },
  "mersin-tasinma-maliyeti-2026": {
    "id": "mersin-tasinma-maliyeti-2026",
    "title": "Mersin Taşınma Maliyeti 2026: Fiyatlar & Masraflar",
    "desc": "Mersin evden eve nakliyat fiyatları 2026 maliyet rehberi. Yenişehir ve Mezitli taşınma giderleri, asansör kiralama ve gizli nakliye masrafları dökümü.",
    "date": "2026-02-10",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Fiyat",
    "image": "/img/slayt-1.jpg",
    "excerpt": "2026 yılı Mersin evden eve nakliyat fiyatları, gizli masraflar, asansör kurulum maliyetleri ve taşınma bütçesi hazırlama rehberi.",
    "readTime": 6
  },
  "nakliyat-sigortasi-nedir": {
    "id": "nakliyat-sigortasi-nedir",
    "title": "Nakliyat Sigortası Nedir, Neleri Kapsamaz?",
    "desc": "Evden eve nakliyat sigortası rehberi. Taşınma sigortası poliçe okuma adımları, emtia taşıma sigortası kapsamı ve nelerin garanti dışı kaldığı.",
    "date": "2026-03-05",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Yasal",
    "image": "/img/slayt-2.jpg",
    "excerpt": "Ev taşırken eşyalarınızı güvenceye alan nakliyat sigortasının türleri, kapsam dışı kalan durumlar ve poliçe doğrulama yöntemleri.",
    "readTime": 6
  },
  "k3-yetki-belgesi-nedir": {
    "id": "k3-yetki-belgesi-nedir",
    "title": "K3 Yetki Belgesi Nedir, Nasıl Sorgulanır?",
    "desc": "K3 yetki belgesi nedir, nasıl sorgulanır? Ev ve ofis taşımacılığında zorunlu olan Ulaştırma Bakanlığı K3 belgesi sorgulama adımları ve cezai yaptırımlar.",
    "date": "2026-04-18",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Yasal",
    "image": "/img/slayt-3.jpg",
    "excerpt": "Evden eve nakliyat firmalarında bulunması zorunlu olan K3 yetki belgesinin önemi, sorgulama aşamaları ve korsan firmaların riskleri.",
    "readTime": 5
  },
  "tasinmadan-30-gun-once-hazirlik": {
    "id": "tasinmadan-30-gun-once-hazirlik",
    "title": "Taşınmadan 30 Gün Önce Başlayan Hazırlık Takvimi",
    "desc": "Taşınma hazırlığı takvimi. Ev taşımadan 30 gün önce yapılması gereken abonelik iptalleri, koli hazırlığı, nakliye firması seçimi ve taşınma günü planı.",
    "date": "2026-05-12",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Rehber",
    "image": "/img/paketleme-detay.jpg",
    "excerpt": "Taşınma gününü stressiz atlatmak için 4 hafta öncesinden başlayan, gün gün detaylandırılmış ev taşıma hazırlık rehberi.",
    "readTime": 6
  },
  "asansorlu-nakliyat-mi-merdivenle-mi": {
    "id": "asansorlu-nakliyat-mi-merdivenle-mi",
    "title": "Asansörlü Nakliyat mı Merdiven mi? Karşılaştırma",
    "desc": "Asansörlü nakliyat ile merdivenle taşıma karşılaştırması. Mersin'de taşınırken maliyet, süre, güvenlik ve bina içi eşya hasarı karşılaştırma analizi.",
    "date": "2026-06-02",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Teknik",
    "image": "/img/slayt-2.jpg",
    "excerpt": "Ev taşırken modüler dış cephe asansörü kullanmak ile insan gücüyle merdivenden taşımanın maliyet, zaman ve hasar açısından detaylı karşılaştırması.",
    "readTime": 5
  },
  "beyaz-esya-tasima-rehberi": {
    "id": "beyaz-esya-tasima-rehberi",
    "title": "Beyaz Eşya Taşıma Rehberi & Dinlendirme Süresi",
    "desc": "Buzdolabı, çamaşır makinesi ve televizyon taşıma rehberi. Taşınma sonrası buzdolabının fişini takmadan önce neden 4 saat beklenmelidir?",
    "date": "2026-06-25",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Teknik",
    "image": "/img/paketleme-detay.jpg",
    "excerpt": "Hassas beyaz eşyaların taşınma öncesi hazırlıkları, tambur kilidi kullanımı, paketleme detayları ve taşınma sonrası kompresör dinlendirme süresi.",
    "readTime": 6
  },
  "tasinirken-yapilan-yasal-hatalar": {
    "id": "tasinirken-yapilan-yasal-hatalar",
    "title": "Kiracıdan Ev Sahibine: Taşınırken Yapılan 8 Yasal Hata",
    "desc": "Kiracı ve ev sahiplerinin taşınma sürecinde yaptığı yasal hatalar. Kira sözleşmesi feshi, depozito iadesi, ikametgah bildirimi ve yasal haklar.",
    "date": "2026-07-01",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Yasal",
    "image": "/img/slayt-3.jpg",
    "excerpt": "Kira sözleşmesinin feshinden depozito iadesine, resmi adres bildirim sürelerinden apartman yönetim yasalarına kadar taşınmanın hukuki boyutları.",
    "readTime": 5
  },
  "sehirlerarasi-tasimada-esya-hasari": {
    "id": "sehirlerarasi-tasimada-esya-hasari",
    "title": "Şehirlerarası Taşımada Eşya Hasar Görürse Ne Yapılır?",
    "desc": "Şehirlerarası ev taşımada eşya hasarı durumunda yapılması gerekenler. Hasar tespit tutanağı hazırlama, sigorta talep adımları ve yasal haklar.",
    "date": "2026-07-20",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Rehber",
    "image": "/img/slayt-1.jpg",
    "excerpt": "Uzun yol taşımacılığında kırılan, çizilen veya kaybolan eşyalar için hukuki süreç, hasar tutanağı yazımı ve sigorta şirketi başvuru rehberi.",
    "readTime": 5
  },
  "ofis-tasima-plani": {
    "id": "ofis-tasima-plani",
    "title": "Ofis Taşıma Planı: İş Kaybı Yaşamadan Hafta Sonu Taşınma",
    "desc": "Mersin kurumsal ofis ve işyeri taşıma planı rehberi. İş kaybı yaşamadan, hafta sonu kesintisiz ofis taşımacılığı adımları ve etiketli kutulama teknikleri.",
    "date": "2026-07-02",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Rehber",
    "image": "/img/slayt-3.jpg",
    "excerpt": "Kurumsal firmaların iş kaybı ve zaman zararı yaşamadan, cuma akşamından pazartesi sabahına kadar tamamlanan ofis nakliyesi planlama adımları.",
    "readTime": 6
  },
  "mersin-semt-rehberi": {
    "id": "mersin-semt-rehberi",
    "title": "Mersin'de Hangi Semtte Oturmalı? Taşınma Öncesi Semt Rehberi",
    "desc": "Mersin semt rehberi. Taşınma öncesinde Mezitli, Yenişehir ve Akdeniz ilçelerinin mahalleleri, ulaşım olanakları ve yaşam standartları karşılaştırması.",
    "date": "2026-07-10",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Bölge",
    "image": "/img/slayt-1.jpg",
    "excerpt": "Mersin'de konut arayanlar için Mezitli, Yenişehir ve Akdeniz semtlerinin yaşam kalitesi, konut yapıları ve sosyal imkanlar karşılaştırma analizi.",
    "readTime": 6
  },
  "kapora-tuzagi-ucuz-nakliyat": {
    "id": "kapora-tuzagi-ucuz-nakliyat",
    "title": "Kapora Tuzağı: Ucuz Nakliye Teklifleri Analizi",
    "desc": "Ucuz nakliyat firmalarının kapora tuzağı ve taşınma günü dolandırıcılığı rehberi. Güvenli nakliyat sözleşmesi ve doğru fiyat analizi.",
    "date": "2026-07-28",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Fiyat",
    "image": "/img/slayt-2.jpg",
    "excerpt": "İnternet reklamlarında maliyetin çok altında fiyat verip kapora aldıktan sonra taşınma günü ek ücret isteyen korsan firmaların çalışma yöntemleri.",
    "readTime": 6
  },
  "mersinde-tasinmak-icin-en-uygun-zaman": {
    "id": "mersinde-tasinmak-icin-en-uygun-zaman",
    "title": "Mersin'de Taşınmak İçin En Uygun Zaman Hangisi?",
    "desc": "Mersin'de taşınmak için en uygun zaman analizi. Yaz sıcakları, okul dönemleri, hafta içi/hafta sonu fiyat farkları ve taşınma tarihi seçimi tüyoları.",
    "date": "2026-08-05",
    "author": "Uzman Eller Nakliyat Editör Ekibi",
    "category": "Rehber",
    "image": "/img/slayt-1.jpg",
    "excerpt": "Mersin'in aşırı yaz sıcaklarından kaçınmak, okulların açılış dönemleri ve hafta içi taşınma avantajlarıyla bütçe dostu nakliyat tarihi belirleme rehberi.",
    "readTime": 5
  }
};

export async function getBlogPostContent(id: string): Promise<{ contentHtml: string; faqs: { question: string; answer: string }[] } | null> {
  try {
    const post = await import(`./posts/${id}`);
    return {
      contentHtml: post.contentHtml,
      faqs: post.faqs
    };
  } catch (err) {
    console.error(`Failed to load blog post content for: ${id}`, err);
    return null;
  }
}
