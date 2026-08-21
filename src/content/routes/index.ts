export interface RouteMetadata {
  slug: string;
  city: string;
  distanceKm: number;
  durationHours: number;
  priceRangeMin: number;
  priceRangeMax: number;
  viaRoute: string;
  notes: string;
}

export const routesMetadataDatabase: Record<string, RouteMetadata> = {
  "mersin-istanbul-evden-eve-nakliyat": {
    "slug": "mersin-istanbul-evden-eve-nakliyat",
    "city": "İstanbul",
    "distanceKm": 930,
    "durationHours": 12,
    "priceRangeMin": 32500,
    "priceRangeMax": 42000,
    "viaRoute": "O-21 Otoyolu (Ankara-Tarsus Otoyolu) ve Kuzey Marmara Otoyolu",
    "notes": "İstanbul girişinde nakliye kamyonları için uygulanan Yavuz Sultan Selim Köprüsü zorunluluğu ve şehir içi saat kısıtlamaları dikkate alınmalıdır."
  },
  "mersin-ankara-evden-eve-nakliyat": {
    "slug": "mersin-ankara-evden-eve-nakliyat",
    "city": "Ankara",
    "distanceKm": 490,
    "durationHours": 6,
    "priceRangeMin": 17000,
    "priceRangeMax": 26000,
    "viaRoute": "O-21 Otoyolu (Mersin-Ankara Otoyolu doğrudan hat)",
    "notes": "Ankara merkezinde yüksek katlı konutlarda asansörlü taşımacılık yaygın olarak tercih edilmektedir."
  },
  "mersin-adana-evden-eve-nakliyat": {
    "slug": "mersin-adana-evden-eve-nakliyat",
    "city": "Adana",
    "distanceKm": 70,
    "durationHours": 1,
    "priceRangeMin": 9000,
    "priceRangeMax": 12000,
    "viaRoute": "O-51 Tarsus-Adana Otoyolu",
    "notes": "Kısa mesafe avantajı sayesinde yükleme ve boşaltma işlemleri aynı gün içerisinde hızlıca tamamlanır."
  },
  "mersin-gaziantep-evden-eve-nakliyat": {
    "slug": "mersin-gaziantep-evden-eve-nakliyat",
    "city": "Gaziantep",
    "distanceKm": 220,
    "durationHours": 3,
    "priceRangeMin": 19500,
    "priceRangeMax": 30500,
    "viaRoute": "O-52 Otoyolu (Mersin-Gaziantep Otoyolu, Osmaniye ve Nizip güzergâhı)",
    "notes": "TAG Otoyolu kullanılarak hızlı teslimat sağlanır. Gaziantep dik ve yokuşlu sokaklarında asansör kurulum alanı önceden tespit edilmelidir."
  },
  "mersin-izmir-evden-eve-nakliyat": {
    "slug": "mersin-izmir-evden-eve-nakliyat",
    "city": "İzmir",
    "distanceKm": 900,
    "durationHours": 11,
    "priceRangeMin": 31500,
    "priceRangeMax": 41000,
    "viaRoute": "Konya - Afyonkarahisar - Uşak - Manisa - İzmir karayolu hattı",
    "notes": "Ege Bölgesi taşımalarında uzun yol nedeniyle eşyaların tır içinde sarsıntılara karşı mükemmel sabitlenmesi ve ambalajlanması zorunludur."
  },
  "mersin-antalya-evden-eve-nakliyat": {
    "slug": "mersin-antalya-evden-eve-nakliyat",
    "city": "Antalya",
    "distanceKm": 560,
    "durationHours": 8,
    "priceRangeMin": 19500,
    "priceRangeMax": 28500,
    "viaRoute": "Silifke - Anamur - Alanya sahil ve yayla yolları geçişi",
    "notes": "Antalya geçişindeki virajlı Toros dağ yolları nedeniyle usta şoförler ve kapalı kasa araçlar tercih edilmelidir."
  },
  "mersin-kayseri-evden-eve-nakliyat": {
    "slug": "mersin-kayseri-evden-eve-nakliyat",
    "city": "Kayseri",
    "distanceKm": 335,
    "durationHours": 4.5,
    "priceRangeMin": 14500,
    "priceRangeMax": 23500,
    "viaRoute": "Silifke - Niğde - Develi - Kayseri karayolu hattı",
    "notes": "İç Anadolu kış şartlarında kış lastiği ve zincir donanımlı araçlarımızla güvenli geçiş sağlanmaktadır."
  },
  "mersin-bursa-evden-eve-nakliyat": {
    "slug": "mersin-bursa-evden-eve-nakliyat",
    "city": "Bursa",
    "distanceKm": 840,
    "durationHours": 10,
    "priceRangeMin": 29500,
    "priceRangeMax": 38400,
    "viaRoute": "O-21 Otoyolu, Eskişehir ve İnegöl geçişli kuzeybatı güzergâhı",
    "notes": "İnegöl geçişindeki yoğun mobilya lojistik trafiğine dikkat edilmelidir. Bursa merkezindeki dar tarihi sokaklar için mobil asansör desteği verilir."
  },
  "mersin-hatay-evden-eve-nakliyat": {
    "slug": "mersin-hatay-evden-eve-nakliyat",
    "city": "Hatay",
    "distanceKm": 200,
    "durationHours": 2.5,
    "priceRangeMin": 15000,
    "priceRangeMax": 22000,
    "viaRoute": "O-52 Otoyolu ve İskenderun-Hatay Karayolu",
    "notes": "Bölgedeki yerleşim durumuna uygun asansörlü platform planlaması yapılır."
  },
  "mersin-konya-evden-eve-nakliyat": {
    "slug": "mersin-konya-evden-eve-nakliyat",
    "city": "Konya",
    "distanceKm": 350,
    "durationHours": 4.5,
    "priceRangeMin": 18500,
    "priceRangeMax": 26000,
    "viaRoute": "Mersin - Mut - Karaman - Konya Karayolu",
    "notes": "Sert geçen kış şartlarında İç Anadolu geçişleri için kış donanımlı araçlarımız sevk edilir."
  },
  "mersin-karaman-evden-eve-nakliyat": {
    "slug": "mersin-karaman-evden-eve-nakliyat",
    "city": "Karaman",
    "distanceKm": 240,
    "durationHours": 3.5,
    "priceRangeMin": 16000,
    "priceRangeMax": 23000,
    "viaRoute": "Mersin - Silifke - Mut - Karaman Karayolu",
    "notes": "Mut-Sertavul geçidindeki hava koşulları ve buzlanma durumları ekiplerimizce takip edilir."
  },
  "mersin-osmaniye-evden-eve-nakliyat": {
    "slug": "mersin-osmaniye-evden-eve-nakliyat",
    "city": "Osmaniye",
    "distanceKm": 180,
    "durationHours": 2.2,
    "priceRangeMin": 14000,
    "priceRangeMax": 20000,
    "viaRoute": "O-52 TAG Otoyolu Doğrudan Hat",
    "notes": "TAG Otoyolu otoyol kalitesiyle sarsıntısız ve hızlı nakliye avantajı sunar."
  },
  "mersin-nigde-evden-eve-nakliyat": {
    "slug": "mersin-nigde-evden-eve-nakliyat",
    "city": "Niğde",
    "distanceKm": 200,
    "durationHours": 2.5,
    "priceRangeMin": 15000,
    "priceRangeMax": 21500,
    "viaRoute": "O-21 Otoyolu Doğrudan Geçiş",
    "notes": "Pozantı otoban geçişindeki dik Toros tünellerinde sürüş emniyeti kuralları gözetilir."
  }
};

export async function getRouteDetails(slug: string): Promise<{
  introText: string;
  distanceText: string;
  pricingText: string;
  routeText: string;
  insuranceText: string;
  tipsText: string;
  faq: { question: string; answer: string }[];
} | null> {
  try {
    const route = await import(`./details/${slug}`);
    return {
      introText: route.introText,
      distanceText: route.distanceText,
      pricingText: route.pricingText,
      routeText: route.routeText,
      insuranceText: route.insuranceText,
      tipsText: route.tipsText,
      faq: route.faq
    };
  } catch (err) {
    console.error(`Failed to load route details for: ${slug}`, err);
    return null;
  }
}
