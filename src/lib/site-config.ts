export const SITE = {
  name: 'Mersin Uzman Eller Nakliyat',
  legalName: 'Mersin Uzman Eller Evden Eve Nakliyat',
  shortName: 'Uzman Eller Nakliyat',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mersinuzmaneller.com',
  locale: 'tr_TR',
  description: "Mersin'de sabit fiyat garantili, K3 belgeli, sigortalı asansörlü evden eve nakliyat.",
  phone: '+905335204442',
  phoneDisplay: '0533 520 44 42',
  phoneHref: 'tel:+905335204442',
  whatsapp: '905335204442',
  whatsappHref: 'https://wa.me/905335204442',
  email: 'info@mersinuzmaneller.com',
  address: {
    street: 'Gazi Mah. 1314. Sk. Yaylacıklıoğlu Apt. Kat 2 D:6',
    locality: 'Yenişehir',
    region: 'Mersin',
    postalCode: '33130',
    country: 'TR',
  },
  geo: { lat: 36.7844771, lng: 34.6004798 },
  hours: { opens: '08:00', closes: '20:00' },
  foundingYear: 1996,
  priceRange: '₺₺',
  gbpUrl: '',
  social: { facebook: '', instagram: '', youtube: '' },
} as const;

export const SERVICES = [
  {
    slug: 'sehirici-evden-eve-nakliyat',
    name: 'Şehiriçi Evden Eve Nakliyat',
    shortName: 'Şehiriçi Nakliyat',
    title: 'Mersin Şehir İçi Ev Taşıma | Uzman Eller Nakliyat',
    description: "Mersin merkez ilçelerinde aynı gün içinde asansörlü, sigortalı ve marangoz montaj dahil şehir içi evden eve nakliyat hizmeti. Hemen sabit fiyat alın.",
    icon: 'Truck'
  },
  {
    slug: 'sehirlerarasi-evden-eve-nakliyat',
    name: 'Şehirlerarası Evden Eve Nakliyat',
    shortName: 'Şehirlerarası Nakliyat',
    title: 'Mersin Şehirlerarası Ev Taşıma | Uzman Eller Nakliyat',
    description: "Mersin'den Türkiye genelinde 81 ile sigortalı, marangozlu ve sözleşmeli şehirlerarası evden eve nakliyat hizmeti. Sabit fiyat garantisiyle taşının.",
    icon: 'Globe'
  },
  {
    slug: 'asansorlu-evden-eve-nakliyat',
    name: 'Asansörlü Evden Eve Nakliyat',
    shortName: 'Asansörlü Nakliyat',
    title: 'Mersin Asansörlü Ev Taşıma | Uzman Eller Nakliyat',
    description: "Mersin'de yüksek katlı binalar için 25. kata kadar ulaşan mobil dış cephe eşya asansörü kiralama ve güvenli asansörlü evden eve nakliye hizmeti.",
    icon: 'ArrowUpRight'
  },
  {
    slug: 'ofis-ve-isyeri-tasimaciligi',
    name: 'Ofis ve İşyeri Taşımacılığı',
    shortName: 'Ofis Taşıma',
    title: 'Mersin Ofis ve İşyeri Taşıma | Uzman Eller Nakliyat',
    description: "Mersin'de kurumsal ofis, arşiv, büro ve işyeri taşıma hizmeti. Numaralı etiketli kutulama, asansörlü taşıma ve sigorta güvencesiyle sıfır kayıp.",
    icon: 'Building2'
  },
  {
    slug: 'profesyonel-esya-paketleme',
    name: 'Profesyonel Eşya Paketleme',
    shortName: 'Eşya Paketleme',
    title: 'Profesyonel Eşya Paketleme Hizmeti | Uzman Eller Nakliyat',
    description: "Mersin'de ev taşırken mobilya, beyaz eşya ve kırılacak cam eşyaların çift kat balonlu naylon, Kraft kağıt ve koruma kutularıyla ambalajlanması.",
    icon: 'ShieldCheck'
  },
  {
    slug: 'ucretsiz-ekspertiz',
    name: 'Ücretsiz Ekspertiz',
    shortName: 'Ücretsiz Ekspertiz',
    title: 'Ücretsiz Ekspertiz Hizmeti | Uzman Eller Nakliyat',
    description: "Mersin'de taşınma öncesinde eşya hacmini, bina kat durumunu ve asansör kurulum açısını yerinde veya görüntülü inceleyerek sabit fiyat teklifi çıkarma süreci.",
    icon: 'FileText'
  },
  {
    slug: 'esya-depolama',
    name: 'Eşya Depolama',
    shortName: 'Eşya Depolama',
    title: 'Mersin Eşya Depolama Hizmeti | Uzman Eller Nakliyat',
    description: "Mersin'de aylık kiralık eşya depolama çözümleri. Güvenlik kameralı, rutubetsiz ve sigortalı konteyner depolarımızda eşyalarınızı güvenle saklayın.",
    icon: 'Warehouse'
  },
  {
    slug: 'parca-esya-tasima',
    name: 'Parça Eşya Taşıma',
    shortName: 'Parça Eşya Taşıma',
    title: 'Mersin Parça Eşya Taşıma | Uzman Eller Nakliyat',
    description: "Mersin'de tek parça, az eşya veya öğrenci evi taşımacılığı. Uygun fiyatlı parça eşya nakliye tır ve kamyonetlerimizle hızlı taşıma hizmeti.",
    icon: 'Package'
  },
  {
    slug: 'piyano-ve-kasa-tasima',
    name: 'Piyano ve Kasa Taşıma',
    shortName: 'Piyano ve Kasa Taşıma',
    title: 'Mersin Piyano ve Ağır Kasa Taşıma | Uzman Eller Nakliyat',
    description: "Mersin'de kuyruklu/duvar piyanosu, çelik para kasası ve hassas ağır yük taşımacılığı. Özel liftli araçlar ve askı sistemleriyle hasarsız transfer.",
    icon: 'Boxes'
  }
] as const;

export const DISTRICTS = [
  {
    slug: 'yenisehir-evden-eve-nakliyat',
    name: 'Yenişehir',
    tier: 'merkez',
    neighbors: ['mezitli', 'toroslar', 'akdeniz'],
    distanceKm: 0,
    indexable: true
  },
  {
    slug: 'mezitli-evden-eve-nakliyat',
    name: 'Mezitli',
    tier: 'merkez',
    neighbors: ['yenisehir', 'toroslar', 'erdemli'],
    distanceKm: 8,
    indexable: true
  },
  {
    slug: 'toroslar-evden-eve-nakliyat',
    name: 'Toroslar',
    tier: 'merkez',
    neighbors: ['yenisehir', 'mezitli', 'akdeniz'],
    distanceKm: 5,
    indexable: true
  },
  {
    slug: 'akdeniz-evden-eve-nakliyat',
    name: 'Akdeniz',
    tier: 'merkez',
    neighbors: ['yenisehir', 'toroslar', 'tarsus'],
    distanceKm: 4,
    indexable: true
  },
  {
    slug: 'tarsus-evden-eve-nakliyat',
    name: 'Tarsus',
    tier: 'ilce',
    neighbors: ['akdeniz', 'erdemli', 'camliyayla'],
    distanceKm: 28,
    indexable: true
  },
  {
    slug: 'erdemli-evden-eve-nakliyat',
    name: 'Erdemli',
    tier: 'ilce',
    neighbors: ['mezitli', 'tarsus', 'silifke'],
    distanceKm: 38,
    indexable: true
  },
  {
    slug: 'silifke-evden-eve-nakliyat',
    name: 'Silifke',
    tier: 'ilce',
    neighbors: ['erdemli', 'mut', 'gulnar'],
    distanceKm: 85,
    indexable: true
  },
  {
    slug: 'mut-evden-eve-nakliyat',
    name: 'Mut',
    tier: 'ilce',
    neighbors: ['silifke', 'gulnar', 'camliyayla'],
    distanceKm: 160,
    indexable: true
  },
  {
    slug: 'anamur-evden-eve-nakliyat',
    name: 'Anamur',
    tier: 'ilce',
    neighbors: ['bozyazi', 'aydincik', 'silifke'],
    distanceKm: 220,
    indexable: true
  },
  {
    slug: 'bozyazi-evden-eve-nakliyat',
    name: 'Bozyazı',
    tier: 'ilce',
    neighbors: ['anamur', 'aydincik', 'gulnar'],
    distanceKm: 205,
    indexable: true
  },
  {
    slug: 'aydincik-evden-eve-nakliyat',
    name: 'Aydıncık',
    tier: 'ilce',
    neighbors: ['bozyazi', 'anamur', 'silifke'],
    distanceKm: 170,
    indexable: true
  },
  {
    slug: 'camliyayla-evden-eve-nakliyat',
    name: 'Çamlıyayla',
    tier: 'ilce',
    neighbors: ['tarsus', 'toroslar', 'mut'],
    distanceKm: 60,
    indexable: true
  },
  {
    slug: 'gulnar-evden-eve-nakliyat',
    name: 'Gülnar',
    tier: 'ilce',
    neighbors: ['silifke', 'mut', 'bozyazi'],
    distanceKm: 150,
    indexable: true
  }
] as const;
