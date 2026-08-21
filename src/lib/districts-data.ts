export interface DistrictData {
  slug: string;
  name: string;
  title: string;
  description: string;
  introSubtitle: string;
  introParagraph: string;
  block1Title: string;
  block1Paragraph: string;
  block3Title: string;
  block3Paragraph: string;
  mahalleler: string[];
  sss: { question: string; answer: string }[];
}

export const districtsDatabase: Record<string, DistrictData> = {
  "akdeniz": {
    "slug": "akdeniz",
    "name": "Akdeniz",
    "title": "Akdeniz Evden Eve Nakliyat | Uzman Eller Nakliyat",
    "description": "Mersin Akdeniz Kazanlı, Karaduvar, Çilek, Şevket Sümer mahallelerinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma.",
    "introSubtitle": "MERSİN MERKEZ İLÇE SERVİSİ",
    "introParagraph": "Akdeniz genelinde K3 yetki belgeli araçlarımız, kadrolu marangoz ve ambalaj ekiplerimiz ve dış cephe eşya asansörlerimizle sabit fiyat garantili profesyonel ev taşıma çözümleri sunuyoruz.",
    "block1Title": "Güvenilir Akdeniz Nakliye Çözümleri",
    "block1Paragraph": "Mersin'in yükselen değeri Akdeniz ilçesinde evden eve nakliyat süreçlerini sıfır hata ve maksimum memnuniyetle yürütüyoruz. Uzman Eller Nakliyat olarak, yasal K3 yetki belgemiz ve sigorta güvencemizle eşyalarınızı güvende tutuyoruz. Sökülmesi gereken dolap ve mobilyalarınız uzman marangozumuz tarafından demonte edilir, kalın koruyucu patpat naylonlarla sarılır ve yeni evinizde montajı tamamlanarak çalışır vaziyette teslim edilir. Sabit fiyat garantimiz sayesinde yol ortasında ek ücret sürprizleriyle karşılaşmazsınız.",
    "block3Title": "Akdeniz Bina Yapısı ve Eşya Asansörü İhtiyacı",
    "block3Paragraph": "Akdeniz ilçesinde binaların kat yükseklikleri ve site kuralları nedeniyle dış cephe mobil eşya asansörlerinin kullanımı taşıma güvenliğini üst seviyeye taşır. Dar merdiven boşluklarında eşyaların çizilmesini engellemek ve bina sakinlerini rahatsız etmemek adına 25. kata kadar uzanabilen asansörlerimizle balkon veya pencerelerden doğrudan yükleme yapıyoruz. Ekiplerimiz taşınma öncesinde asansör kurulum alanı fiziki şartlarını inceleyerek en güvenli planı hazırlar.",
    "mahalleler": [
      "Kazanlı",
      "Karaduvar",
      "Çilek",
      "Şevket Sümer",
      "Hal",
      "Gündoğdu",
      "Bahçe",
      "Mesudiye"
    ],
    "sss": [
      {
        "question": "Mesudiye'deki dar sokaklarda asansör kurulabilir mi?",
        "answer": "Evet, dar sokaklarda yanaşabilen kompakt hidrolik asansörlerimizle Akdeniz'in dar sokaklarında da hizmet vermekteyiz."
      },
      {
        "question": "Bahçe Mahallesi'ndeki eski binalarda de-montaj nasıl yapılıyor?",
        "answer": "Deneyimli marangoz ustalarımız gardırop ve yatak odası mobilyalarını söküp paketler, yeni evinizde tekrar monte eder."
      },
      {
        "question": "Akdeniz içi ev taşıma süresi ortalama kaç saat sürmektedir?",
        "answer": "Akdeniz sınırları içerisindeki evden eve nakliye işlemleri ortalama 6-8 saat içinde biter."
      }
    ]
  },
  "erdemli": {
    "slug": "erdemli",
    "name": "Erdemli",
    "title": "Erdemli Evden Eve Nakliyat | Uzman Eller Nakliyat",
    "description": "Mersin Erdemli Kocahasanlı, Limonlu, Kızkalesi, Merkez mahallelerinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma.",
    "introSubtitle": "MERSİN İLÇE SERVİSİ",
    "introParagraph": "Erdemli genelinde K3 yetki belgeli araçlarımız, kadrolu marangoz ve ambalaj ekiplerimiz ve dış cephe eşya asansörlerimizle sabit fiyat garantili profesyonel ev taşıma çözümleri sunuyoruz.",
    "block1Title": "Güvenilir Erdemli Nakliye Çözümleri",
    "block1Paragraph": "Mersin'in yükselen değeri Erdemli ilçesinde evden eve nakliyat süreçlerini sıfır hata ve maksimum memnuniyetle yürütüyoruz. Uzman Eller Nakliyat olarak, yasal K3 yetki belgemiz ve sigorta güvencemizle eşyalarınızı güvende tutuyoruz. Sökülmesi gereken dolap ve mobilyalarınız uzman marangozumuz tarafından demonte edilir, kalın koruyucu patpat naylonlarla sarılır ve yeni evinizde montajı tamamlanarak çalışır vaziyette teslim edilir. Sabit fiyat garantimiz sayesinde yol ortasında ek ücret sürprizleriyle karşılaşmazsınız.",
    "block3Title": "Erdemli Bina Yapısı ve Eşya Asansörü İhtiyacı",
    "block3Paragraph": "Erdemli ilçesinde binaların kat yükseklikleri ve site kuralları nedeniyle dış cephe mobil eşya asansörlerinin kullanımı taşıma güvenliğini üst seviyeye taşır. Dar merdiven boşluklarında eşyaların çizilmesini engellemek ve bina sakinlerini rahatsız etmemek adına 25. kata kadar uzanabilen asansörlerimizle balkon veya pencerelerden doğrudan yükleme yapıyoruz. Ekiplerimiz taşınma öncesinde asansör kurulum alanı fiziki şartlarını inceleyerek en güvenli planı hazırlar.",
    "mahalleler": [
      "Kocahasanlı",
      "Limonlu",
      "Kızkalesi",
      "Merkez",
      "Ayaş",
      "Çeşmeli",
      "Kargıpınarı",
      "Tömük"
    ],
    "sss": [
      {
        "question": "Kargıpınarı yazlık sitelerinde asansör kurulabilir mi?",
        "answer": "Evet, Kargıpınarı ve Tömük bölgesindeki yüksek katlı yazlık sitelerde dış cephe eşya asansörlerimizi kuruyoruz."
      },
      {
        "question": "Erdemli yazlık taşımalarında ambalajlama kalitesi nasıldır?",
        "answer": "Tüm mobilya ve beyaz eşyalarınız darbe emici balonlu patpat naylonlarla sarılır."
      },
      {
        "question": "Erdemli nakliye süresi ne kadardır?",
        "answer": "Erdemli nakliyat süreçleri mesafe ve kat durumuna göre aynı gün içinde 6-8 saatte tamamlanmaktadır."
      }
    ]
  },
  "mezitli": {
    "slug": "mezitli",
    "name": "Mezitli",
    "title": "Mezitli Evden Eve Nakliyat | Uzman Eller Nakliyat",
    "description": "Mersin Mezitli Fatih, Viranşehir, Menderes, Davultepe mahallelerinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma.",
    "introSubtitle": "MERSİN MERKEZ İLÇE SERVİSİ",
    "introParagraph": "Mezitli genelinde K3 yetki belgeli araçlarımız, kadrolu marangoz ve ambalaj ekiplerimiz ve dış cephe eşya asansörlerimizle sabit fiyat garantili profesyonel ev taşıma çözümleri sunuyoruz.",
    "block1Title": "Güvenilir Mezitli Nakliye Çözümleri",
    "block1Paragraph": "Mersin'in yükselen değeri Mezitli ilçesinde evden eve nakliyat süreçlerini sıfır hata ve maksimum memnuniyetle yürütüyoruz. Uzman Eller Nakliyat olarak, yasal K3 yetki belgemiz ve sigorta güvencemizle eşyalarınızı güvende tutuyoruz. Sökülmesi gereken dolap ve mobilyalarınız uzman marangozumuz tarafından demonte edilir, kalın koruyucu patpat naylonlarla sarılır ve yeni evinizde montajı tamamlanarak çalışır vaziyette teslim edilir. Sabit fiyat garantimiz sayesinde yol ortasında ek ücret sürprizleriyle karşılaşmazsınız.",
    "block3Title": "Mezitli Bina Yapısı ve Eşya Asansörü İhtiyacı",
    "block3Paragraph": "Mezitli ilçesinde binaların kat yükseklikleri ve site kuralları nedeniyle dış cephe mobil eşya asansörlerinin kullanımı taşıma güvenliğini üst seviyeye taşır. Dar merdiven boşluklarında eşyaların çizilmesini engellemek ve bina sakinlerini rahatsız etmemek adına 25. kata kadar uzanabilen asansörlerimizle balkon veya pencerelerden doğrudan yükleme yapıyoruz. Ekiplerimiz taşınma öncesinde asansör kurulum alanı fiziki şartlarını inceleyerek en güvenli planı hazırlar.",
    "mahalleler": [
      "Fatih",
      "Viranşehir",
      "Menderes",
      "Davultepe",
      "Tece",
      "Kuyuluk",
      "Yeni Mahalle",
      "Atatürk"
    ],
    "sss": [
      {
        "question": "Tece'deki yüksek katlı yazlıklarda eşya asansörü kurulabilir mi?",
        "answer": "Evet, Tece sahil şeridindeki yazlık ve yüksek katlı sitelerde 25. kata kadar ulaşabilen modern mobil eşya asansörlerimizle hasarsız taşıma yapmaktayız."
      },
      {
        "question": "Viranşehir'deki dar merdivenli apartmanlarda eşya hasarı nasıl önleniyor?",
        "answer": "Viranşehir'de dar merdivenli eski binalarda taşınırken mobilyaları tamamen söküp havalı koruyucu patpat sargılarla kaplayarak asansörle hasarsız taşıyoruz."
      },
      {
        "question": "Fatih Mahallesi'ndeki sitelerde asansör iznini kim alıyor?",
        "answer": "Müşteri site yönetiminden izin alır. Operasyon ekibimiz ise asansör kurulumu için emniyet şeritlerini çeker."
      },
      {
        "question": "Mezitli ev taşıma süresi ortalama kaç saat sürmektedir?",
        "answer": "Mezitli içi evden eve nakliye işlemleri ortalama 6-8 saat içinde tamamlanır."
      }
    ]
  },
  "silifke": {
    "slug": "silifke",
    "name": "Silifke",
    "title": "Silifke Evden Eve Nakliyat | Uzman Eller Nakliyat",
    "description": "Mersin Silifke Atakent, Taşucu, Göksu, Saracalar mahallelerinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma.",
    "introSubtitle": "MERSİN İLÇE SERVİSİ",
    "introParagraph": "Silifke genelinde K3 yetki belgeli araçlarımız, kadrolu marangoz ve ambalaj ekiplerimiz ve dış cephe eşya asansörlerimizle sabit fiyat garantili profesyonel ev taşıma çözümleri sunuyoruz.",
    "block1Title": "Güvenilir Silifke Nakliye Çözümleri",
    "block1Paragraph": "Mersin'in yükselen değeri Silifke ilçesinde evden eve nakliyat süreçlerini sıfır hata ve maksimum memnuniyetle yürütüyoruz. Uzman Eller Nakliyat olarak, yasal K3 yetki belgemiz ve sigorta güvencemizle eşyalarınızı güvende tutuyoruz. Sökülmesi gereken dolap ve mobilyalarınız uzman marangozumuz tarafından demonte edilir, kalın koruyucu patpat naylonlarla sarılır ve yeni evinizde montajı tamamlanarak çalışır vaziyette teslim edilir. Sabit fiyat garantimiz sayesinde yol ortasında ek ücret sürprizleriyle karşılaşmazsınız.",
    "block3Title": "Silifke Bina Yapısı ve Eşya Asansörü İhtiyacı",
    "block3Paragraph": "Silifke ilçesinde binaların kat yükseklikleri ve site kuralları nedeniyle dış cephe mobil eşya asansörlerinin kullanımı taşıma güvenliğini üst seviyeye taşır. Dar merdiven boşluklarında eşyaların çizilmesini engellemek ve bina sakinlerini rahatsız etmemek adına 25. kata kadar uzanabilen asansörlerimizle balkon veya pencerelerden doğrudan yükleme yapıyoruz. Ekiplerimiz taşınma öncesinde asansör kurulum alanı fiziki şartlarını inceleyerek en güvenli planı hazırlar.",
    "mahalleler": [
      "Atakent",
      "Taşucu",
      "Göksu",
      "Saracalar",
      "Mukaddem",
      "Say",
      "Yeşilovacık",
      "Kapızlı"
    ],
    "sss": [
      {
        "question": "Taşucu'nda dar sokaklarda asansör kurulabiliyor mu?",
        "answer": "Evet, Taşucu ve Silifke genelinde asansörlü araçlarımızla taşımacılık hizmeti vermekteyiz."
      },
      {
        "question": "Atakent yazlıklarında beyaz eşya montajı dahil midir?",
        "answer": "Evet, Silifke ev taşımalarında beyaz eşya de-montaj ve montaj işlemleri marangozumuzca ücretsiz yapılır."
      },
      {
        "question": "Silifke Mersin arası nakliye kaç saat sürer?",
        "answer": "Silifke-Mersin arası yolculuk yaklaşık 1.5 saat sürer, taşınma aynı gün anahtar teslim tamamlanır."
      }
    ]
  },
  "tarsus": {
    "slug": "tarsus",
    "name": "Tarsus",
    "title": "Tarsus Evden Eve Nakliyat | Uzman Eller Nakliyat",
    "description": "Mersin Tarsus Kırklarsırtı, Anıt, Yarenlik, Gözlükule mahallelerinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma.",
    "introSubtitle": "MERSİN İLÇE SERVİSİ",
    "introParagraph": "Tarsus genelinde K3 yetki belgeli araçlarımız, kadrolu marangoz ve ambalaj ekiplerimiz ve dış cephe eşya asansörlerimizle sabit fiyat garantili profesyonel ev taşıma çözümleri sunuyoruz.",
    "block1Title": "Güvenilir Tarsus Nakliye Çözümleri",
    "block1Paragraph": "Mersin'in yükselen değeri Tarsus ilçesinde evden eve nakliyat süreçlerini sıfır hata ve maksimum memnuniyetle yürütüyoruz. Uzman Eller Nakliyat olarak, yasal K3 yetki belgemiz ve sigorta güvencemizle eşyalarınızı güvende tutuyoruz. Sökülmesi gereken dolap ve mobilyalarınız uzman marangozumuz tarafından demonte edilir, kalın koruyucu patpat naylonlarla sarılır ve yeni evinizde montajı tamamlanarak çalışır vaziyette teslim edilir. Sabit fiyat garantimiz sayesinde yol ortasında ek ücret sürprizleriyle karşılaşmazsınız.",
    "block3Title": "Tarsus Bina Yapısı ve Eşya Asansörü İhtiyacı",
    "block3Paragraph": "Tarsus ilçesinde binaların kat yükseklikleri ve site kuralları nedeniyle dış cephe mobil eşya asansörlerinin kullanımı taşıma güvenliğini üst seviyeye taşır. Dar merdiven boşluklarında eşyaların çizilmesini engellemek ve bina sakinlerini rahatsız etmemek adına 25. kata kadar uzanabilen asansörlerimizle balkon veya pencerelerden doğrudan yükleme yapıyoruz. Ekiplerimiz taşınma öncesinde asansör kurulum alanı fiziki şartlarını inceleyerek en güvenli planı hazırlar.",
    "mahalleler": [
      "Kırklarsırtı",
      "Anıt",
      "Yarenlik",
      "Gözlükule",
      "Atatürk",
      "Fevzi Çakmak",
      "Şahin",
      "Yunus Emre"
    ],
    "sss": [
      {
        "question": "Tarsus Yarenlik bölgesindeki dar sokaklarda asansör kurulabilir mi?",
        "answer": "Evet, Tarsus genelinde kompakt asansörlerimizle dar caddelerde de asansörlü ev taşıma yapıyoruz."
      },
      {
        "question": "Kırklarsırtı'ndaki yüksek binalarda taşınma nasıl oluyor?",
        "answer": "Dış cephe asansörlerimizle balkondan veya pencereden yükleme gerçekleştirerek hasar riskini sıfıra indiriyoruz."
      },
      {
        "question": "Tarsus nakliye süresi ne kadardır?",
        "answer": "Mersin merkezden Tarsus'a taşınma veya Tarsus içi nakliye işlemleri aynı gün 6-8 saat içinde tamamlanır."
      }
    ]
  },
  "toroslar": {
    "slug": "toroslar",
    "name": "Toroslar",
    "title": "Toroslar Evden Eve Nakliyat | Uzman Eller Nakliyat",
    "description": "Mersin Toroslar Halkkent, Çağdaşkent, Yusuf Kılıç, Yalınayak mahallelerinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma.",
    "introSubtitle": "MERSİN MERKEZ İLÇE SERVİSİ",
    "introParagraph": "Toroslar genelinde K3 yetki belgeli araçlarımız, kadrolu marangoz ve ambalaj ekiplerimiz ve dış cephe eşya asansörlerimizle sabit fiyat garantili profesyonel ev taşıma çözümleri sunuyoruz.",
    "block1Title": "Güvenilir Toroslar Nakliye Çözümleri",
    "block1Paragraph": "Mersin'in yükselen değeri Toroslar ilçesinde evden eve nakliyat süreçlerini sıfır hata ve maksimum memnuniyetle yürütüyoruz. Uzman Eller Nakliyat olarak, yasal K3 yetki belgemiz ve sigorta güvencemizle eşyalarınızı güvende tutuyoruz. Sökülmesi gereken dolap ve mobilyalarınız uzman marangozumuz tarafından demonte edilir, kalın koruyucu patpat naylonlarla sarılır ve yeni evinizde montajı tamamlanarak çalışır vaziyette teslim edilir. Sabit fiyat garantimiz sayesinde yol ortasında ek ücret sürprizleriyle karşılaşmazsınız.",
    "block3Title": "Toroslar Bina Yapısı ve Eşya Asansörü İhtiyacı",
    "block3Paragraph": "Toroslar ilçesinde binaların kat yükseklikleri ve site kuralları nedeniyle dış cephe mobil eşya asansörlerinin kullanımı taşıma güvenliğini üst seviyeye taşır. Dar merdiven boşluklarında eşyaların çizilmesini engellemek ve bina sakinlerini rahatsız etmemek adına 25. kata kadar uzanabilen asansörlerimizle balkon veya pencerelerden doğrudan yükleme yapıyoruz. Ekiplerimiz taşınma öncesinde asansör kurulum alanı fiziki şartlarını inceleyerek en güvenli planı hazırlar.",
    "mahalleler": [
      "Halkkent",
      "Çağdaşkent",
      "Yusuf Kılıç",
      "Yalınayak",
      "Kuruköprü",
      "Gözne",
      "Arslanköy",
      "Portakal"
    ],
    "sss": [
      {
        "question": "Çağdaşkent'te asansörlü nakliyat kurulabiliyor mu?",
        "answer": "Evet, Çağdaşkent genelinde modüler asansör sistemlerimizle balkondan veya pencereden asansörlü ev taşıma hizmeti veriyoruz."
      },
      {
        "question": "Halkkent'teki dar apartmanlarda hasar nasıl önleniyor?",
        "answer": "Mobilyalar söküldükten sonra her parça kalın ambalaj naylonu ile sarılarak korumalı şekilde asansörle indirilir."
      },
      {
        "question": "Toroslar içi ev taşıma süresi ortalama kaç saat sürmektedir?",
        "answer": "Toroslar genelindeki taşınma işlemleri aynı gün 6 ile 8 saat arasında tamamlanıp anahtar teslim edilir."
      }
    ]
  },
  "yenisehir": {
    "slug": "yenisehir",
    "name": "Yenişehir",
    "title": "Yenişehir Evden Eve Nakliyat | Uzman Eller Nakliyat",
    "description": "Mersin Yenişehir Gazi, Aydınlıkevler, Eğriçam, Bahçelievler mahallelerinde K3 belgeli kapalı kasa araçlarımızla sabit fiyatlı asansörlü ev taşıma.",
    "introSubtitle": "MERSİN MERKEZ İLÇE SERVİSİ",
    "introParagraph": "Yenişehir genelinde K3 yetki belgeli araçlarımız, kadrolu marangoz ve ambalaj ekiplerimiz ve dış cephe eşya asansörlerimizle sabit fiyat garantili profesyonel ev taşıma çözümleri sunuyoruz.",
    "block1Title": "Güvenilir Yenişehir Nakliye Çözümleri",
    "block1Paragraph": "Mersin'in yükselen değeri Yenişehir ilçesinde evden eve nakliyat süreçlerini sıfır hata ve maksimum memnuniyetle yürütüyoruz. Uzman Eller Nakliyat olarak, yasal K3 yetki belgemiz ve sigorta güvencemizle eşyalarınızı güvende tutuyoruz. Sökülmesi gereken dolap ve mobilyalarınız uzman marangozumuz tarafından demonte edilir, kalın koruyucu patpat naylonlarla sarılır ve yeni evinizde montajı tamamlanarak çalışır vaziyette teslim edilir. Sabit fiyat garantimiz sayesinde yol ortasında ek ücret sürprizleriyle karşılaşmazsınız.",
    "block3Title": "Yenişehir Bina Yapısı ve Eşya Asansörü İhtiyacı",
    "block3Paragraph": "Yenişehir ilçesinde binaların kat yükseklikleri ve site kuralları nedeniyle dış cephe mobil eşya asansörlerinin kullanımı taşıma güvenliğini üst seviyeye taşır. Dar merdiven boşluklarında eşyaların çizilmesini engellemek ve bina sakinlerini rahatsız etmemek adına 25. kata kadar uzanabilen asansörlerimizle balkon veya pencerelerden doğrudan yükleme yapıyoruz. Ekiplerimiz taşınma öncesinde asansör kurulum alanı fiziki şartlarını inceleyerek en güvenli planı hazırlar.",
    "mahalleler": [
      "Gazi",
      "Aydınlıkevler",
      "Eğriçam",
      "Bahçelievler",
      "Güvenevler",
      "Limonluk",
      "Menteş",
      "Barbaros",
      "Kocavilayet",
      "Akent"
    ],
    "sss": [
      {
        "question": "Gazi Mahallesi'ndeki dar sokaklarda eşya asansörü kurulabilir mi?",
        "answer": "Evet, Gazi Mahallesi'ndeki dar ve yoğun otoparklı sokaklarda, araç trafiğini engellemeyecek şekilde konumlanabilen kompakt teleskopik asansörlerimizle asansörlü nakliyat hizmeti vermekteyiz."
      },
      {
        "question": "Bahçelievler'deki eski apartmanlarda dar merdivenlerde hasar nasıl önleniyor?",
        "answer": "Bahçelievler mahallesindeki eski ve merdiveni dar binalarda, büyük mobilyaları daire içinde tamamen demonte ederek, çift katlı kalın balonlu ambalaj malzemeleriyle sarıp koruma altına alıyoruz."
      },
      {
        "question": "Limonluk'taki yüksek katlı rezidanslarda asansör kurulum iznini kim alıyor?",
        "answer": "Taşınma öncesinde site veya bina yönetimiyle görüşülerek izin süreci müşteri tarafından başlatılır. Ekiplerimiz ise asansör kurulum alanı için fiziki güvenlik şeritlerini taşınma günü rezerve eder."
      },
      {
        "question": "Yenişehir içi ev taşıma süresi ortalama kaç saat sürmektedir?",
        "answer": "Yenişehir sınırları içerisindeki ev taşıma işlemleri (demontaj, ambalajlama, yükleme ve yeni adreste montaj dahil) ortalama 6 ile 8 saat arasında tamamlanmaktadır."
      }
    ]
  },
  "anamur": {
    "slug": "anamur",
    "name": "Anamur",
    "title": "Anamur Evden Eve Nakliyat | Uzman Eller Nakliyat",
    "description": "Mersin Anamur İskele, Güzelyurt, Yeşilyurt mahallelerinde K3 yetki belgeli kamyonlarımız ve mobil eşya asansörlerimizle sigortalı ev taşıma.",
    "introSubtitle": "MERSİN BATI İLÇE SERVİSİ",
    "introParagraph": "Mersin’in en batı ilçesi Anamur genelinde, geniş muz seraları ve sahil şeridindeki sitelere özel dış cephe asansörlü, sigortalı ve marangozlu evden eve taşımacılık çözümleri sunuyoruz.",
    "block1Title": "Güvenilir Anamur Nakliye Çözümleri",
    "block1Paragraph": "Uzman Eller Nakliyat olarak Anamur ilçesindeki ev, yazlık ve ofis taşıma süreçlerini profesyonel ekiplerimizle yürütüyoruz. Taşınma öncesinde eşyalarınızın tamamını emtia sigortası ile güvence altına alıyor; gardırop, yemek odası ve yatak odası mobilyalarınızı kadrolu marangozumuz eşliğinde demonte edip yeni evinizde montajını gerçekleştiriyoruz.",
    "block3Title": "Anamur Bina Yapısı ve Eşya Asansörü İhtiyacı",
    "block3Paragraph": "Anamur sahil kesimindeki yazlık siteler ile merkezdeki çok katlı konutlarda asansörlü nakliyat kullanımı, taşıma hızını ve eşya güvenliğini maksimuma çıkarır. Balkon veya pencere genişliği uygun olan dairelerde, eşyalarınız dar merdiven boşluklarında yıpranmadan doğrudan nakliye aracımıza yüklenir.",
    "mahalleler": [
      "İskele",
      "Güzelyurt",
      "Yeşilyurt",
      "Bahçe",
      "Yalı",
      "Sağlık",
      "Ören",
      "Saray"
    ],
    "sss": [
      {
        "question": "Anamur şehir içi nakliye süresi ne kadardır?",
        "answer": "Anamur içi ev taşıma işlemleri (paketleme, asansör kurulumu ve montaj dahil) ortalama 6 ila 8 saat sürmektedir."
      },
      {
        "question": "Mersin merkezden Anamur’a nakliyat fiyatı nasıl hesaplanır?",
        "answer": "Mersin-Anamur arası yaklaşık 230 km mesafe bulunduğundan fiyatlar yakıt maliyeti ve oda sayısına göre şehirlerarası katsayı üzerinden hesaplanır."
      },
      {
        "question": "Sera bölgelerinde asansör kurulabiliyor mu?",
        "answer": "Zemin yapısı stabil olan ve aracın yanaşabileceği bahçe mesafesine sahip tüm sera ve müstakil konut çevrelerinde mobil asansörümüzü güvenle kuruyoruz."
      }
    ]
  },
  "mut": {
    "slug": "mut",
    "name": "Mut",
    "title": "Mut Evden Eve Nakliyat | Uzman Eller Nakliyat",
    "description": "Mersin Mut ilçesinde Toros dağ yolları ve dik yamaç konutlarında K3 yasal belgeli araçlarımızla eşya sarsılmasını önleyen profesyonel ev taşıma.",
    "introSubtitle": "MERSİN İÇ BÖLGE SERVİSİ",
    "introParagraph": "Mut ilçesinde, Torosların engebeli arazi yapısı ve dağlık yollarında eşyalarınızın sarsılmadan taşınması için özel süspansiyonlu kapalı kasa araçlarımızla hizmetinizdeyiz.",
    "block1Title": "Mut Güvenli Ev Taşıma Hizmetleri",
    "block1Paragraph": "Mut genelinde evden eve taşıma yaparken en büyük önceliğimiz eşya güvenliğidir. Yol şartlarının engebeli olması nedeniyle tüm mobilyaları ve beyaz eşyaları çift kat balonlu kalın patpat ambalajlarla sarıyor, kamyon içerisinde sabitleme halatlarıyla sıkıca bağlıyoruz.",
    "block3Title": "Mut Konut Yapısı ve Nakliye Stratejileri",
    "block3Paragraph": "Mut ilçesindeki konutların birçoğu az katlı ve müstakil yapılardan oluşmaktadır. Dar sokaklar ve bahçe mesafeleri nedeniyle taşıma planını taşınma günü sabahı yerinde inceliyor, asansör ihtiyacına göre kompakt mobil yük asansörlerimizi devreye alıyoruz.",
    "mahalleler": [
      "Meydan",
      "Kültür",
      "Karşıyaka",
      "Doğancı",
      "Yazalanı",
      "Güllük",
      "Tuzaağacı"
    ],
    "sss": [
      {
        "question": "Mut’tan Mersin merkeze taşınma kaç saat sürer?",
        "answer": "Mesafe yaklaşık 160 km olup, otoyol ve Toros geçişi dahil yolculuk 2.5 saat sürer. Toplam operasyon aynı gün tamamlanır."
      },
      {
        "question": "Eşyaların kaymasını önlemek için ne yapıyorsunuz?",
        "answer": "Kamyon kasalarımız özel ahşap kaplama olup eşya sabitleme raylarına sahiptir. Her eşya grubu ayrı ayrı kayışlarla sabitlenir."
      }
    ]
  },
  "gulnar": {
    "slug": "gulnar",
    "name": "Gülnar",
    "title": "Gülnar Evden Eve Nakliyat | Uzman Eller Nakliyat",
    "description": "Mersin Gülnar ilçesinde taş yayla evleri ve dar dağ yollarında K3 belgeli kapalı çelik kasa araçlarla sabit fiyatlı profesyonel evden eve nakliye.",
    "introSubtitle": "MERSİN YAYLA BÖLGESİ SERVİSİ",
    "introParagraph": "Gülnar’ın dik yokuşları ve taş mimarili yayla evlerinde, tecrübeli şoförlerimiz ve profesyonel ambalaj kadromuzla hasarsız nakliyat sağlıyoruz.",
    "block1Title": "Gülnar Sigortalı Ev ve Ofis Taşımacılığı",
    "block1Paragraph": "Gülnar ilçesinde gerçekleştirdiğimiz tüm ev taşıma işlemlerinde, Anadolu Sigorta aracılığıyla emtia taşıma sigortası yapıyoruz. Taşınma gününde marangozumuz gardıropları özenle söker ve havalı ambalaj malzemeleriyle korur.",
    "block3Title": "Gülnar Coğrafi Yapısı ve Taşıma Güvenliği",
    "block3Paragraph": "Gülnar’ın engebeli ve kayalık zemin yapısı, taşıma araçlarının yanaşma açısını etkiler. Ekiplerimiz fren takozları, hidrolik sabitleyiciler ve çelik halat gergileri kullanarak nakliye kamyonunun güvenliğini en üst seviyede sağlar.",
    "mahalleler": [
      "Akdeniz",
      "Sarıkavak",
      "Hacıpınar",
      "Ayvalı",
      "Köseçobanlı",
      "Kırsu"
    ],
    "sss": [
      {
        "question": "Gülnar’da asansör kurulabiliyor mu?",
        "answer": "Bina cephesi ve yol eğimi müsaade ettiği sürece mobil dış cephe asansörlerimizle Gülnar’da da hizmet veriyoruz."
      },
      {
        "question": "Gülnar nakliye fiyatları ne kadardır?",
        "answer": "Fiyatlar eşya hacmi, kat durumu ve taşınacak mesafeye göre değişkenlik gösterir. Teklif sayfamızdan anında fiyat alabilirsiniz."
      }
    ]
  },
  "aydincik": {
    "slug": "aydincik",
    "name": "Aydıncık",
    "title": "Aydıncık Evden Eve Nakliyat | Uzman Eller Nakliyat",
    "description": "Mersin Aydıncık sahil şeridinde ve yeni konut projelerinde K3 belgeli kapalı çelik kasa araçlarla asansörlü ve marangozlu ev taşıma hizmeti.",
    "introSubtitle": "MERSİN SAHİL YOLU SERVİSİ",
    "introParagraph": "Aydıncık ilçesinde, deniz kıyısındaki nemli hava koşullarına uygun koruyucu ambalaj standartları ve dış cephe asansörleri ile hızlı ev taşıma çözümleri sunuyoruz.",
    "block1Title": "Aydıncık Güvenilir Nakliye Firması",
    "block1Paragraph": "Aydıncık’ta yazlık, villa veya apartman dairesi taşırken eşyalarınızın zarar görmemesi için sıfır hata prensibiyle hareket ediyoruz. Kadrolu marangozumuz mobilyalarınızı hassas şekilde demonte ederek montajını yeni evinizde tamamlar.",
    "block3Title": "Aydıncık Yapı Durumu ve Mobil Asansör",
    "block3Paragraph": "Aydıncık’ta yeni yapılan modern apartmanlarda bina asansörlerinin eşya taşımada kullanılması genellikle yasaktır. Bu nedenle balkon veya pencerelerden eşya transferi sağlayan 25. kata kadar uzanabilen asansörlerimiz devreye alınır.",
    "mahalleler": [
      "Merkez",
      "Hürriyet",
      "Cumhuriyet",
      "Yeni",
      "Atatürk"
    ],
    "sss": [
      {
        "question": "Aydıncık’ta nem korumalı paketleme yapıyor musunuz?",
        "answer": "Evet, sahil şeridindeki yüksek nem oranına karşı özellikle beyaz eşyaları terleme önleyici ambalajlarla kaplıyoruz."
      },
      {
        "question": "Aydıncık’tan Mersin merkeze nakliyat kaç saat sürer?",
        "answer": "Yol mesafesi yaklaşık 170 km olup, araç sürüş süresi 2 saattir. Tüm işlem aynı gün içinde başarıyla sonlandırılır."
      }
    ]
  },
  "bozyazi": {
    "slug": "bozyazi",
    "name": "Bozyazı",
    "title": "Bozyazı Evden Eve Nakliyat | Uzman Eller Nakliyat",
    "description": "Mersin Bozyazı genelinde sahil siteleri ve bahçeli villa tipi konutlarda K3 belgeli kapalı kasa araçlarımızla asansörlü sigortalı ev taşıma.",
    "introSubtitle": "MERSİN KIYI ŞERİDİ SERVİSİ",
    "introParagraph": "Bozyazı genelinde sahil şeridindeki lüks siteler ve müstakil villalara özel, çevreye ve peyzaja zarar vermeyen kompakt asansörlü nakliyat hizmeti sağlamaktayız.",
    "block1Title": "Bozyazı Kaliteli Taşımacılık Standartları",
    "block1Paragraph": "Bozyazı ilçesinde Uzman Eller Nakliyat kalitesiyle taşınırken ek ücret sürprizi yaşamazsınız. Taşıma öncesinde yaptığımız ücretsiz ekspertiz ve imzalanan yasal sözleşmeyle fiyatı sabitler, emtia sigortası poliçenizi teslim ederiz.",
    "block3Title": "Bozyazı Peyzaj Koruma ve Asansör Kurulumu",
    "block3Paragraph": "Bozyazı sahil sitelerinde yeşil alanların korunması önemlidir. Mobil asansörümüzü kurarken bahçe çimlerine ve zemin karolarına zarar vermemek için kauçuk koruma levhaları kullanıyor, maksimum güvenlik sağlıyoruz.",
    "mahalleler": [
      "Merkez",
      "Denizciler",
      "Gözsüzce",
      "Tekeli",
      "Kaledibi",
      "Ustalar"
    ],
    "sss": [
      {
        "question": "Bozyazı yazlık eşyası taşıyor musunuz?",
        "answer": "Evet, Bozyazı bölgesindeki yazlık sitelere sezonluk veya parça eşya taşıma seferleri düzenliyoruz."
      },
      {
        "question": "Taşıma esnasında asansör kurulum izni gerekiyor mu?",
        "answer": "Site veya bina yönetimlerine taşınma günü öncesinde bilgi verilmesi, kurulum alanının boş tutulması için yeterlidir."
      }
    ]
  },
  "camliyayla": {
    "slug": "camliyayla",
    "name": "Çamlıyayla",
    "title": "Çamlıyayla Evden Eve Nakliyat | Uzman Eller Nakliyat",
    "description": "Mersin Çamlıyayla (Namrun) dik yamaç ve virajlı yayla yollarında K3 belgeli kapalı kasa araçlarımızla sarsıntısız evden eve nakliye çözümleri.",
    "introSubtitle": "MERSİN ORTA TOROSLAR SERVİSİ",
    "introParagraph": "Çamlıyayla (Namrun) ilçesinin dik rampalı dağ yolları ve ahşap yayla konutlarında, süspansiyonlu nakliye kamyonlarımızla sarsıntısız ve güvenli ev taşıma hizmeti veriyoruz.",
    "block1Title": "Çamlıyayla Profesyonel Ev Taşıma Çözümleri",
    "block1Paragraph": "Çamlıyayla genelinde gerçekleştirdiğimiz nakliye işlerinde dar ve dik sokaklar nedeniyle özel küçük kasa kamyonlarımızı ve kompakt teleskopik asansörlerimizi sevk ediyor, eşyaların zarar görme ihtimalini ortadan kaldırıyoruz.",
    "block3Title": "Çamlıyayla Dağlık Arazi Lojistik Tedbirleri",
    "block3Paragraph": "Çamlıyayla rampaları ve virajları, kamyon içi istif kalitesini zorunlu kılar. Ekiplerimiz mobilyaları ve beyaz eşyaları kamyon kasasında özel gergi ipleriyle sabitleyerek yol boyunca sarsıntı ve devrilmeleri engeller.",
    "mahalleler": [
      "Kale",
      "Çayırekinliği",
      "Cumhuriyet",
      "Fakılı",
      "Sebil",
      "Sarıkavak"
    ],
    "sss": [
      {
        "question": "Çamlıyayla kış taşımacılığı yapıyor musunuz?",
        "answer": "Evet. Yoğun kar ve don dönemlerinde zincir takviyeli ve kış donanımlı araçlarımızla taşıma hizmetimizi sürdürüyoruz."
      },
      {
        "question": "Namrun kalesi çevresindeki yüksek katlı yayla villalarına asansör kuruluyor mu?",
        "answer": "Eğim açısı uygun olan ve güvenlik şeridi çekilebilen tüm yayla konutlarında mobil dış cephe asansörü kuruyoruz."
      }
    ]
  }
};
