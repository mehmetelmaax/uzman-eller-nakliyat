export interface RouteData {
  slug: string;
  city: string;
  distanceKm: number;
  durationHours: number;
  priceRangeMin: number;
  priceRangeMax: number;
  viaRoute: string;
  notes: string;
  introText: string;
  distanceText: string;
  pricingText: string;
  routeText: string;
  insuranceText: string;
  tipsText: string;
  faq: { question: string; answer: string }[];
}

export const routesDatabase: Record<string, RouteData> = {
  'mersin-istanbul-evden-eve-nakliyat': {
    slug: 'mersin-istanbul-evden-eve-nakliyat',
    city: 'İstanbul',
    distanceKm: 930,
    durationHours: 12,
    priceRangeMin: 32500,
    priceRangeMax: 42000,
    viaRoute: 'O-21 Otoyolu (Ankara-Tarsus Otoyolu) ve Kuzey Marmara Otoyolu',
    notes: 'İstanbul girişinde nakliye kamyonları için uygulanan Yavuz Sultan Selim Köprüsü zorunluluğu ve şehir içi saat kısıtlamaları dikkate alınmalıdır.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den İstanbul'un tüm ilçelerine (Kadıköy, Beşiktaş, Ümraniye, Başakşehir, Esenyurt dahil) profesyonel, K3 yetki belgeli ve sigortalı şehirlerarası evden eve nakliyat hizmeti vermektedir. Uzun mesafe taşımacılığında uzman kadromuz, eşyalarınızın yol boyunca sarsıntı ve darbelere karşı zarar görmemesi için çift kat pıtpıt naylon ve özel kalın Kraft ambalaj malzemeleriyle koruma sağlar. Sabit fiyat garantimiz ile Mersin'den yola çıkan kamyonumuz, İstanbul'da kapıda ek ücret sürprizi yaşatmadan eşyalarınızı yeni dairenize teslim eder.",
    distanceText: "Mersin ile İstanbul arası karayolu mesafesi yaklaşık 930 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 2 gündür. Taşıma sürecinde O-21 otoyolu güzergâhı üzerinden seyreden kamyonlarımız, şoförlerimizin dinlenme ve sürüş güvenliği kurallarına uygun olarak hareket eder. İlk gün Mersin'de eşyaların de-montaj, paketleme ve yükleme işlemleri tamamlanarak kamyonumuz yola çıkar. İkinci gün sabahı İstanbul'daki yeni adresinize ulaşan ekiplerimiz, eşyaları asansör yardımıyla dairenize çıkartır ve mobilyaların montaj işlemlerini gerçekleştirerek taşınmayı tamamlar.",
    pricingText: "Mersin ile İstanbul arası nakliyat fiyatları Mersin Uzman Eller Nakliyat tarafından 32.500 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. İstanbul taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 32.500 TL ile 34.500 TL arasında değişirken; 2+1 daire taşıma 35.500 TL ile 38.000 TL, 3+1 daire taşıma ise 38.500 TL ile 41.500 TL arasında bütçelendirilir.",
    routeText: "Mersin'den İstanbul'a taşıma yaparken tırlarımız ve büyük kamyonlarımız sırasıyla Mersin - Silifke - Niğde - Aksaray - Ankara - Bolu - Düzce - Sakarya - Kocaeli güzergâhını takip eder. İstanbul sınırlarına girildiğinde ağır vasıtalar için zorunlu olan Yavuz Sultan Selim Köprüsü ve Kuzey Marmara Otoyolu bağlantısı kullanılır. Avrupa Yakası'na geçecek araçlarımız için bu güzergâh trafik yoğunluğunu atlatmak ve güvenli sürüş sağlamak açısından son derece önemlidir. Her sevkiyatımız GPS araç takip sistemiyle donatılmış olup müşterilerimize anlık konum bilgisi paylaşılmaktadır.",
    insuranceText: "Mersin Uzman Eller Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Mersin'den yüklenen eşyalarınız İstanbul'daki yeni adresinizde teslim edilene kadar oluşabilecek kaza, yangın, doğal afet ve yol sarsıntı hasarlarına karşı sigortalanır. Anadolu Sigorta güvencesiyle hazırlanan nakliyat poliçesi, taşınma sabahında adınıza düzenlenerek ıslak imzalı sözleşmeyle birlikte tarafınıza teslim edilir. Eşyaların taşınması sırasında oluşabilecek çizik ve sürtünme gibi küçük hasarlar ise firma içi sorumluluk garantimiz kapsamındadır.",
    tipsText: "İstanbul'a taşınırken dikkat edilmesi gereken en kritik husus, şehir içi dar sokaklar ve site yönetimlerinin taşıma saatleri kısıtlamalarıdır. Kadıköy, Beşiktaş, Şişli gibi dar tarihi sokaklara sahip ilçelerde büyük nakliye kamyonlerinin yanaşması zor olabilir. Bu durumlarda küçük nakliye kamyonetlerimizle transfer (aktarma) hizmeti organize etmekteyiz. Ayrıca yüksek katlı binalarda asansör kurulum izinlerinin ve site içi park yeri rezervasyonlarının taşınmadan en az 2 gün önce apartman yönetimleriyle görüşülerek alınmış olması, taşınma gününün sorunsuz geçmesini sağlayacaktır.",
    faq: [
      {
            "question": "Mersin İstanbul nakliye süreci kaç gün sürer?",
            "answer": "Eşyaların Mersin'de yüklenmesi ve İstanbul'da yeni adrese boşaltılarak kurulması toplamda 2 iş günü sürmektedir."
      },
      {
            "question": "İstanbul'da dar sokaklarda taşıma nasıl yapılıyor?",
            "answer": "Kamyonumuzun yanaşamadığı dar sokaklarda küçük aktarma araçları (pikap/kamyonet) kullanarak eşyaları güvenle dairenize taşıyoruz."
      },
      {
            "question": "Sigorta poliçesi neleri kapsar, ücreti ne kadardır?",
            "answer": "Sigorta poliçemiz yol kazaları, devrilme, yangın ve hırsızlık gibi majör riskleri kapsar. Poliçe bedeli teklif fiyatımıza dahildir, ekstra ücret alınmaz."
      },
      {
            "question": "İstanbul'da asansörlü taşıma hizmeti veriyor musunuz?",
            "answer": "Evet, İstanbul'daki yeni adresinizde dış cephe nakliye asansörü kurulumuna uygunluk varsa mobil asansör sistemimizi kurarak taşıma yapıyoruz."
      },
      {
            "question": "Gardırop ve beyaz eşyaların montajını yapıyor musunuz?",
            "answer": "Kadrolu marangozumuz gardıropları kurar, tesisat ustamız ise çamaşır ve bulaşık makinesinin bağlantılarını ücretsiz olarak tamamlar."
      },
      {
            "question": "Ödemeyi ne zaman ve nasıl yapıyoruz?",
            "answer": "Sözleşme anında küçük bir kapora alınır. Kalan tutarın yarısı Mersin'de yükleme bitiminde, kalan yarısı ise İstanbul'da teslimat sonrasında ödenir."
      }
]
  },
  'mersin-ankara-evden-eve-nakliyat': {
    slug: 'mersin-ankara-evden-eve-nakliyat',
    city: 'Ankara',
    distanceKm: 490,
    durationHours: 6,
    priceRangeMin: 17000,
    priceRangeMax: 26000,
    viaRoute: 'O-21 Otoyolu (Mersin-Ankara Otoyolu doğrudan hat)',
    notes: 'Ankara merkezinde yüksek katlı konutlarda asansörlü taşımacılık yaygın olarak tercih edilmektedir.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den başkent Ankara'nın tüm ilçelerine (Çankaya, Yenimahalle, Keçiören, Etimesgut, Gölbaşı dahil) asansörlü ve marangozlu evden eve nakliyat çözümleri sunmaktadır. İç Anadolu nakliye hattında haftalık düzenli seferler düzenleyen firmamız, parça eşyalarınızı veya komple evinizi profesyonel standartlarda taşır. Uzman Eller Nakliyat güvencesiyle K3 yetki belgeli araçlarımız ve kadrolu ekibimiz, Mersin'deki de-montaj işlemlerinden Ankara'daki anahtar teslim montaj sürecine kadar tüm adımları büyük bir titizlikle yürütmektedir.",
    distanceText: "Mersin ile Ankara arası karayolu mesafesi yaklaşık 490 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1 gündür. Sabah saat 08:00'de Mersin'deki evinizde başlayan paketleme ve yükleme işlemleri öğleden sonra saat 14:00 civarında tamamlanır. Kamyonumuz O-21 Mersin-Ankara otoyolu üzerinden hareket ederek yaklaşık 6 saatlik sürüşün ardından aynı gün akşamı veya ertesi gün sabahı Ankara'daki yeni adresinize ulaşır ve eşyalarınızın kurulumuna başlanır.",
    pricingText: "Mersin ile Ankara arası nakliyat fiyatları Mersin Uzman Eller Nakliyat tarafından 17.000 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Ankara taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 17.000 TL ile 19.000 TL arasında değişirken; 2+1 daire taşıma 20.000 TL ile 22.500 TL, 3+1 daire taşıma ise 23.000 TL ile 26.000 TL arasında bütçelendirilir.",
    routeText: "Mersin'den Ankara'ya giden nakliye araçlarımız, tamamen otoyol konforu sunan O-21 Niğde-Ankara otoyolunu kullanır. Güzergâh sırasıyla Mersin - Silifke - Ulukışla - Niğde - Aksaray - Şereflikoçhisar - Gölbaşı hattı üzerinden Ankara merkeze ulaşır. Toros dağları geçişindeki Toros dağ yollarında araçlarımızın güvenliği için yavaş ve kontrollü seyredilir. Otoyol kalitesi sayesinde eşyalarınız minimum sarsıntıya maruz kalır. Araçlarımızın tümü karayolu taşıma kanunlarına uygun hız sınırlarında ilerler.",
    insuranceText: "Mersin Uzman Eller Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Silifke ve İç Anadolu otoyollarında seyir halindeyken yaşanabilecek her türlü kaza, devrilme, yangın riskine karşı tam bedel üzerinden sigortalanır. Sigorta poliçesi poliçe no ve şirket detaylarıyla birlikte taşınma öncesinde size teslim edilir. Eşyalarınızın yükleme esnasında apartman içinde veya asansörde görebileceği hasarlar da firmamızın güvencesi altındadır.",
    tipsText: "Ankara'ya taşınırken dikkat edilmesi gereken en önemli konu, özellikle Çankaya, Eryaman ve Batıkent gibi bölgelerde yoğun olarak yer alan çok katlı rezidans ve yüksek apartman yapılarıdır. Bu binalarda asansör kurulum alanının açık olması ve site yönetiminin yük asansörü kullanım saatlerine izin vermesi gerekir. Ayrıca kış aylarında Silifke ve Aksaray geçişlerindeki yoğun kar ve buzlanma risklerine karşı araçlarımızın kar lastiği ve zincir donanımları tam olarak sevk edilmektedir.",
    faq: [
      {
            "question": "Mersin Ankara nakliyat kaç saat sürer?",
            "answer": "Yükleme bittikten sonra iki şehir arası sürüş süresi ortalama 6 saattir. Genellikle ertesi gün sabah kurulum tamamlanır."
      },
      {
            "question": "Ankara'da yüksek katlı dairelere asansör kuruluyor mu?",
            "answer": "Evet, Ankara'daki yeni daireniz kaçıncı katta olursa olsun 25. kata kadar ulaşabilen teleskopik asansörlerimizle hizmet veriyoruz."
      },
      {
            "question": "Paketleme malzemeleriniz kaliteli mi?",
            "answer": "Eşyalarınız için kalın havalı ambalaj naylonları, Kraft kağıtlı mukavva koliler ve mobilyalara özel stretch sargılar kullanıyoruz."
      },
      {
            "question": "Ankara'da askılı tekstil taşıma yapıyor musunuz?",
            "answer": "Evet, gardıroptaki kıyafetleriniz için araçlarımızda özel askılı dolap sistemleri yer almaktadır, kırışmadan taşınırlar."
      },
      {
            "question": "Ekstra ücret çıkma ihtimali var mı?",
            "answer": "Hayır. Sözleşmede anlaştığımız ve imzaladığımız sabit fiyat dışında hiçbir koşulda ek ücret talep etmiyoruz."
      },
      {
            "question": "Rezervasyon işlemini ne kadar süre önce yapmalıyım?",
            "answer": "Özellikle yaz dönemlerinde ve hafta sonlarında yoğunluk yaşveığı için taşınmadan en az 1 hafta önce rezervasyon yaptırmanızı öneririz."
      }
]
  },
  'mersin-adana-evden-eve-nakliyat': {
    slug: 'mersin-adana-evden-eve-nakliyat',
    city: 'Adana',
    distanceKm: 70,
    durationHours: 1,
    priceRangeMin: 9000,
    priceRangeMax: 12000,
    viaRoute: 'O-51 Tarsus-Adana Otoyolu',
    notes: 'Kısa mesafe avantajı sayesinde yükleme ve boşaltma işlemleri aynı gün içerisinde hızlıca tamamlanır.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den Adana'nın tüm ilçelerine (Seyhan, Çukurova, Yüreğir, Sarıçam dahil) hızlı, güvenilir ve uygun fiyatlı evden eve nakliyat hizmeti sağlamaktadır. Yakın mesafe lojistik ağımız sayesinde eşyalarınızı aynı gün içerisinde paketleyip yüklüyor ve Adana'daki yeni adresinizde marangoz montajını tamamlayarak teslim ediyoruz. Uzman Eller Nakliyat olarak, Mersin-Adana otoyol hattındaki günlük taşımalarımız sayesinde müşterilerimize son derece ekonomik fiyatlar sunuyoruz.",
    distanceText: "Mersin ile Adana arası karayolu mesafesi yaklaşık 70 kilometredir ve nakliye kamyonlarımızla ulaşım süresi ortalama 1 saattir. Kısa mesafe avantajı sayesinde ev taşıma operasyonu sabah 08:00'de paketleme ile başlayıp, aynı gün akşamüstü Adana'daki dairenizde anahtar teslim olarak tamamlanır.",
    pricingText: "Mersin Adana ev taşıma fiyatları Uzman Eller Nakliyat tarafından 9.000 TL ile 21.000 TL arasında bütçelendiriliyoruz. Fiyat teklifimize K3 yetki belgeli nakliye aracı, ambalajlama malzemeleri, marangoz de-montaj ve kurulum hizmetleri ile emtia taşıma sigortası dahildir. Daire oda sayısı ve yükseklik durumuna göre net fiyat belirlenir.",
    routeText: "Mersin'den yola çıkan araçlarımız O-51 otoyolunu kullanarak Tarsus üzerinden doğrudan Adana çevre yoluna katılım sağlar. Yol tamamen düz ve bölünmüş duble yol/otoyol standartlarında olduğundan eşyaların sarsılma veya hasar görme riski sıfıra yakındır.",
    insuranceText: "Mersin Adana arası tüm taşımalarımız Anadolu Sigorta güvencesiyle emtia nakliyat sigortası kapsamında gerçekleştirilmektedir. Eşyalarınız yoldaki olası kaza, yangın veya devrilme risklerine karşı tamamen güvence altına alınır.",
    tipsText: "Adana'ya taşınırken dikkat edilmesi gereken husus, Seyhan ve Çukurova ilçelerindeki yoğun trafik saatleri ve site yönetimlerinin asansör kurulum kurallarıdır. Ekiplerimiz taşınma günü öncesinde gerekli koordinasyonu sağlayarak zaman kaybını önler.",
    faq: [
      {
            "question": "Mersin'den Adana'ya taşınma kaç saat sürer?",
            "answer": "Mesafe kısa olduğu için tüm yükleme, yolculuk ve montaj süreçleri dahil 5 ila 7 saat arasında tamamlanmaktadır."
      },
      {
            "question": "Seyhan ve Çukurova'da asansör kurulabiliyor mu?",
            "answer": "Evet, Adana genelinde asansör kurulum alanı uygun olan tüm yüksek katlı binalarda mobil dış cephe eşya asansörümüzü kuruyoruz."
      },
      {
            "question": "Adana'da mobilya montajı fiyata dahil midir?",
            "answer": "Evet, gardırop, yatak üniteleri ve beyaz eşyaların söküm ve kurulum işlemleri fiyatımıza dahildir."
      },
      {
            "question": "Adana'dan Mersin'e dönüş taşıması yapıyor musunuz?",
            "answer": "Evet, Adana-Mersin yönünde de günlük araç dönüş seferlerimizle ekonomik fiyatlı taşımacılık yapıyoruz."
      },
      {
            "question": "Fiyatı sabitleyebiliyor musunuz?",
            "answer": "Evet, taşınma öncesinde karşılıklı ıslak imzalı sözleşme imzalayarak fiyata sabitlik garantisi veriyoruz."
      },
      {
            "question": "Klima sökümü yapıyor musunuz?",
            "answer": "Klima söküm ve montajı elektrik ve gaz tesisatı uzmanlığı gerektirdiğinden dahil değildir, ancak anlaşmalı servisle yönlendirebiliyoruz."
      }
]
  },
  'mersin-gaziantep-evden-eve-nakliyat': {
    slug: 'mersin-gaziantep-evden-eve-nakliyat',
    city: 'Gaziantep',
    distanceKm: 220,
    durationHours: 3,
    priceRangeMin: 19500,
    priceRangeMax: 30500,
    viaRoute: 'O-52 Otoyolu (Mersin-Gaziantep Otoyolu, Osmaniye ve Nizip güzergâhı)',
    notes: 'TAG Otoyolu kullanılarak hızlı teslimat sağlanır. Gaziantep dik ve yokuşlu sokaklarında asansör kurulum alanı önceden tespit edilmelidir.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den bölgenin lokomotif şehirlerinden Gaziantep'in tüm ilçelerine (Şahinbey, Şehitkamil, İslahiye, Nizip dahil) profesyonel asansörlü evden eve nakliyat hizmeti sunmaktadır. Güneydoğu lojistik hattında tecrübeli şoförlerimiz ve kadrolu taşıma ekiplerimizle, eşyalarınızı sıfır hasar ilkesiyle taşıyoruz. Paketlemeden montaja kadar tüm adımlarda sabitleme ve koruma önlemlerini en üst düzeyde uygulayarak Gaziantep'teki yeni evinize sorunsuzca yerleşmenizi sağlıyoruz.",
    distanceText: "Mersin ile Gaziantep arası karayolu mesafesi yaklaşık 220 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1 gündür. Karayolu sürüş süresi nakliye araçlarımız için yaklaşık 3 saattir. Sabah saat 08:00'de Mersin'de başlayan yükleme işlemi sonrasında öğlen yola çıkan kamyonumuz, öğleden sonra Gaziantep'teki yeni adresinize ulaşır. Ekiplerimiz aynı gün akşam saatlerine kadar tüm mobilyaları kurarak teslimatı gerçekleştirir.",
    pricingText: "Mersin ile Gaziantep arası nakliyat fiyatları Mersin Uzman Eller Nakliyat tarafından 14.500 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Gaziantep taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 14.500 TL ile 16.500 TL arasında değişirken; 2+1 daire taşıma 17.500 TL ile 20.000 TL, 3+1 daire taşıma ise 20.500 TL ile 23.500 TL arasında bütçelendirilir.",
    routeText: "Mersin'den Gaziantep'e giden nakliye araçlarımız O-52 otoyolunu (TAG Otoyolu - Tarsus Mersin Gaziantep Otoyolu) kullanır. Güzergâh sırasıyla Mersin - Tarsus - Osmaniye - Bahçe - Nurdağı - Şehitkamil - Şahinbey hattını takip eder. Yol tamamen bölünmüş otoyol standartlarındadır. Nurdağı geçişindeki virajlı dağ yollarında ve rampalarda araçlarımızın güvenliği için sürüş hız sınırlarına tam olarak uyulmaktadır.",
    insuranceText: "Mersin Uzman Eller Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Mersin'de yüklenen eşyalarınız Gaziantep'teki yeni evinize teslim edilene kadar yol kazaları, doğal afet ve hırsızlık risklerine karşı sigortalanır. Anadolu Sigorta güvencesiyle hazırlanan poliçemiz taşınma öncesinde size sunulur. Eşyaların taşınması sırasında oluşabilecek küçük hasarlar da firmamızın garantisindedir.",
    tipsText: "Gaziantep'e taşınırken dikkat edilmesi gereken husus, Şahinbey ve Şehitkamil ilçelerindeki bazı eski yerleşim yerlerinde yer alan dik yokuşlar ve dar sokaklardır. Bu bölgelerde asansörlü nakliye kamyonunun yanaşabilmesi için sokak durumunun önceden analiz edilmesi gerekir. Ekiplerimiz gerekli durumlarda ek güvenlik şeritleri kullanarak asansör kurulum alanını rezerve eder. Ayrıca yeni binaların yüksek katlarında asansör boşluklarının durumu önceden bina yönetimine sorulmalıdır.",
    faq: [
      {
            "question": "Mersin Gaziantep nakliyat kaç saat sürer?",
            "answer": "İki şehir arası karayolu mesafesi ortalama 3 saattir. Yükleme ve boşaltma dahil tüm süreç aynı gün içinde biter."
      },
      {
            "question": "Gaziantep Nizip ilçesine taşıma yapıyor musunuz?",
            "answer": "Evet, Gaziantep'in Nizip, İslahiye, Nurdağı ve diğer tüm dış ilçelerine nakliye hizmeti sunuyoruz."
      },
      {
            "question": "Asansör kurulumu fiyata dahil midir?",
            "answer": "Evet, hem Mersin'de hem de Gaziantep'te asansör kurulumu fiyata dahildir, sonradan ek ücret talep edilmez."
      },
      {
            "question": "Kırılacak eşyaları kim paketliyor?",
            "answer": "Talebiniz doğrultusunda mutfak kırılacakları, bardaklar ve tabaklar özel havalı ambalaj kağıtlarıyla ekiplerimizce kolilenir."
      },
      {
            "question": "Gaziantep'te montaj işlerini kim yapıyor?",
            "answer": "Araç ekiplerimizde yer alan kadrolu marangozumuz gardırop, yatak ve ünitelerin kurulumunu Gaziantep'teki yeni evinizde tamamlar."
      },
      {
            "question": "Ödeme seçenekleriniz nelerdir?",
            "answer": "Ödemelerinizi teslimat sonrasında nakit, banka havalesi veya EFT yoluyla güvenle gerçekleştirebilirsiniz."
      }
]
  },
  'mersin-izmir-evden-eve-nakliyat': {
    slug: 'mersin-izmir-evden-eve-nakliyat',
    city: 'İzmir',
    distanceKm: 900,
    durationHours: 11,
    priceRangeMin: 31500,
    priceRangeMax: 41000,
    viaRoute: 'Konya - Afyonkarahisar - Uşak - Manisa - İzmir karayolu hattı',
    notes: 'Ege Bölgesi taşımalarında uzun yol nedeniyle eşyaların tır içinde sarsıntılara karşı mükemmel sabitlenmesi ve ambalajlanması zorunludur.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den Ege'nin incisi İzmir'in tüm ilçelerine (Karşıyaka, Bornova, Konak, Buca, Çeşme dahil) asansörlü, sigortalı ve profesyonel evden eve nakliyat hizmeti vermektedir. Uzun mesafe taşımacılığındaki köklü tecrübemizle, eşyalarınızın 900 kilometrelik İzmir yolculuğunu hasarsız tamamlaması için özel sabitleme ve askılama yöntemleri uyguluyoruz. K3 yetki belgeli geniş araç filomuz ve uzman marangozlarımızla Mersin'den İzmir'e taşınma sürecinizi tamamen stressiz bir deneyime dönüştürüyoruz.",
    distanceText: "Mersin ile İzmir arası karayolu mesafesi yaklaşık 900 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 2 gündür. İlk gün Mersin'deki adresinizde eşyalarınız uzman marangoz ve ambalaj ekiplerimizce de-monte edilir, paketlenir ve kapalı çelik kasa nakliye kamyonumuza yüklenir. Akşam saatlerinde yola çıkan kamyonumuz, ertesi gün sabah saatlerinde İzmir'deki yeni adresinize ulaşır ve hemen asansör kurulumu yapılarak eşyaların daireye taşınması sağlanır.",
    pricingText: "Mersin ile İzmir arası nakliyat fiyatları Mersin Uzman Eller Nakliyat tarafından 31.500 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. İzmir taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 31.500 TL ile 33.500 TL arasında değişirken; 2+1 daire taşıma 34.500 TL ile 37.000 TL, 3+1 daire taşıma ise 37.500 TL ile 40.500 TL arasında bütçelendirilir.",
    routeText: "Mersin'den İzmir'e giden nakliye araçlarımız Mersin - Silifke - Ereğli - Konya - Akşehir - Afyonkarahisar - Uşak - Kula - Salihli - Manisa - İzmir güzergâhını takip eder. Bu hat şehirlerarası ağır vasıta taşımacılığı için en güvenli ve en düz yoldur. Silifke geçişi dışındaki yollar genellikle düz otoyol ve duble yol kalitesindedir. Yol boyunca şoförlerimiz yasal dinlenme sürelerine uyarak sürüş güvenliğini en üst seviyede tutarlar.",
    insuranceText: "Mersin Uzman Eller Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Mersin'den yüklendiği andan itibaren İzmir'deki yeni adresinizde kurulana kadar oluşabilecek kaza, devrilme, yangın, sel gibi majör risklere karşı tam değeriyle sigortalanır. Anadolu Sigorta güvencesiyle hazırlanan poliçe nüshası taşınma sabahında adınıza düzenlenerek size takdim edilir.",
    tipsText: "İzmir'e taşınırken dikkat edilmesi gereken en önemli husus, özellikle Karşıyaka, Alsancak ve Göztepe gibi merkezi bölgelerdeki otopark sıkıntısı ve dar sokaklardır. Bu bölgelerde taşıma günü belediyeden park izni alınması veya otopark yerinin rezerve edilmesi süreci kolaylaştırır. Ayrıca Çeşme, Urla ve Seferihisar gibi yazlık bölgelere yapılacak taşımalarda uzun yol depolama ihtiyaçları ve yazlık nem koruması önceden planlanmalıdır.",
    faq: [
      {
            "question": "Mersin İzmir arası nakliye kaç gün sürer?",
            "answer": "Yükleme ve yol dahil olmak üzere Mersin'den İzmir'e taşınma süreci toplam 2 iş gününde tamamlanmaktadır."
      },
      {
            "question": "Çeşme ve Urla ilçelerine de hizmetiniz var mı?",
            "answer": "Evet, İzmir'in Çeşme, Urla, Seferihisar, Aliağa gibi tüm dış ilçelerine ve yazlık bölgelerine taşıma yapıyoruz."
      },
      {
            "question": "İzmir'de dış cephe asansörü kurulabiliyor mu?",
            "answer": "Yeni adresinizde dış cephe asansör kurulum alanı uygunsa 25. kata kadar ulaşabilen asansörürümüzü kuruyoruz."
      },
      {
            "question": "Eşyalar araç içinde nasıl korunuyor?",
            "answer": "Araç kasalarımız sunta kaplamalı olup, eşyalar ambalajlandıktan sonra özel sabitleme ipleriyle kasa içine sıkıca bağlanır."
      },
      {
            "question": "Beyaz eşyaların bağlantısını yapıyor musunuz?",
            "answer": "Evet, çamaşır ve bulaşık makinenizi yeni evinizde tesisata bağlayıp çalışır durumda teslim ediyoruz."
      },
      {
            "question": "İzmir'den Mersin'ya dönüş taşımaları da yapıyor musunuz?",
            "answer": "Evet, İzmir-Mersin yönünde de aynı şekilde profesyonel evden eve nakliye ve dönüş aracı avantajıyla uygun fiyatlı hizmet vermekteyiz."
      }
]
  },
  'mersin-antalya-evden-eve-nakliyat': {
    slug: 'mersin-antalya-evden-eve-nakliyat',
    city: 'Antalya',
    distanceKm: 560,
    durationHours: 8,
    priceRangeMin: 19500,
    priceRangeMax: 28500,
    viaRoute: 'Silifke - Anamur - Alanya sahil ve yayla yolları geçişi',
    notes: 'Antalya geçişindeki virajlı Toros dağ yolları nedeniyle usta şoförler ve kapalı kasa araçlar tercih edilmelidir.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den Akdeniz'in turizm merkezi Antalya'nın tüm bölgelerine (Muratpaşa, Konyaaltı, Kepez, Alanya, Manavgat dahil) K3 yetki belgeli, sigortalı ve marangozlu evden eve nakliyat hizmeti sunmaktadır. Toroslar geçişli zorlu Antalya güzergâhında profesyonel şoförlerimiz ve kapalı çelik kasalı nakliye tırlarımızla eşyalarınızı sarsıntısız bir şekilde taşıyoruz. Sabit fiyat garantimiz ile taşınma gününde hiçbir ek maliyet çıkarmadan eşyalarınızı Antalya'daki yeni adresinize teslim ediyoruz.",
    distanceText: "Mersin ile Antalya arası karayolu mesafesi yaklaşık 560 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1-2 gündür. Yol durumuna ve kullanılan güzergâhla göre nakliye araçlarımızın varış süresi ortalama 8 saattir. Mersin'de sabah yüklenen eşyalar genellikle aynı günün gecesinde veya ertesi gün sabah saatlerinde Antalya'da yeni adrese ulaştırılır ve kurulum işlemleri hızlıca başlatılır.",
    pricingText: "Mersin ile Antalya arası nakliyat fiyatları Mersin Uzman Eller Nakliyat tarafından 19.500 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Antalya taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 19.500 TL ile 21.500 TL arasında değişirken; 2+1 daire taşıma 22.500 TL ile 25.000 TL, 3+1 daire taşıma ise 25.500 TL ile 28.500 TL arasında bütçelendirilir.",
    routeText: "Mersin'den Antalya'ya giden araçlarımız iki alternatif rotayı kullanabilir. Birinci rota Mersin - Silifke - Ereğli - Karaman - Mut - Alanya - Antalya hattıdır. İkinci alternatif ise Mersin sahil yolu üzerinden Silifke - Anamur - Gazipaşa - Alanya hattıdır. Genellikle ağır vasıtalar için daha güvenli ve virajı daha az olan Konya-Karaman-Mut güzergâhı tercih edilerek Toros dağ geçişleri en güvenli şekilde tamamlanır.",
    insuranceText: "Mersin Uzman Eller Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Mersin'den yüklendiği andan itibaren Antalya'daki yeni adresinizde teslim edilene kadar Anadolu Sigorta güvencesiyle korunur. Yol boyunca yaşanabilecek tüm kaza, yangın, devrilme gibi olumsuzluklara karşı poliçeniz tam bedel üzerinden adınıza taşınma öncesinde düzenlenir.",
    tipsText: "Antalya'ya taşınırken dikkat edilmesi gereken husus, yaz aylarında yaşanan aşırı sıcaklık ve nem durumudur. Sıcak hava şartlarında ambalaj malzemelerinin eşyalara yapışmaması veya nem yapmaması için özel gözenekli kraft ambalaj kağıtları ve havalandırmalı sargılar kullanmaktayız. Ayrıca Konyaaltı ve Muratpaşa bölgelerindeki çok katlı ve dar sokaklı binalarda dış cephe asansör kurulum alanı önceden kontrol edilmelidir.",
    faq: [
      {
            "question": "Mersin Antalya arası nakliyat kaç saat sürer?",
            "answer": "İki şehir arası sürüş süresi ortalama 8 saattir. Genellikle yüklemeden sonraki gün kurulum tamamlanmış olur."
      },
      {
            "question": "Alanya ve Manavgat ilçelerine de hizmet veriyor musunuz?",
            "answer": "Evet, Antalya'nın Alanya, Manavgat, Serik, Kemer, Kumluca dahil tüm ilçelerine taşıma hizmetimiz mevcuttur."
      },
      {
            "question": "Antalya'da yüksek katlı dairelere asansör kuruluyor mu?",
            "answer": "Evet, Antalya'daki yeni dairenizde asansör kurulum alanı uygunsa 25. kata kadar ulaşabilen asansörümüzü kuruyoruz."
      },
      {
            "question": "Ödemeyi kredi kartı ile yapabilir miyim?",
            "answer": "Ödemeleri genellikle banka havalesi, EFT veya nakit olarak kabul ediyoruz. Detayları sözleşme esnasında netleştiriyoruz."
      },
      {
            "question": "Mobilyaların sökümünü ve kurulumunu kim yapıyor?",
            "answer": "Araç ekiplerimizde yer alan kadrolu uzman marangozumuz mobilyalarınızın de-montaj ve montaj işlemlerini eksiksiz tamamlar."
      },
      {
            "question": "Parça eşya taşıma hizmetiniz var mı?",
            "answer": "Evet, Antalya yönüne gidecek olan diğer müşterilerimizin eşyalarıyla birleştirerek uygun fiyatlı parça eşya taşıma hizmeti de sunuyoruz."
      }
]
  },
  'mersin-kayseri-evden-eve-nakliyat': {
    slug: 'mersin-kayseri-evden-eve-nakliyat',
    city: 'Kayseri',
    distanceKm: 335,
    durationHours: 4.5,
    priceRangeMin: 14500,
    priceRangeMax: 23500,
    viaRoute: 'Silifke - Niğde - Develi - Kayseri karayolu hattı',
    notes: 'İç Anadolu kış şartlarında kış lastiği ve zincir donanımlı araçlarımızla güvenli geçiş sağlanmaktadır.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den İç Anadolu'nun sanayi ve ticaret merkezlerinden Kayseri'nin tüm bölgelerine (Melikgazi, Kocasinan, Talas dahil) profesyonel asansörlü evden eve nakliyat hizmeti sunmaktadır. Silifke ve Niğde güzergâhı üzerinden Kayseri'ye en hızlı ve hasarsız lojistik akışı sağlıyoruz. Uzman Eller Nakliyat güvencesiyle K3 belgeli kapalı kasa kamyonlarımız ve uzman personelimiz, Mersin'den Kayseri'ye taşınma sürecinizin sorunsuz geçmesi için tüm detayları yönetmektedir.",
    distanceText: "Mersin ile Kayseri arası karayolu mesafesi yaklaşık 335 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1 gündür. Nakliye araçlarımızın iki şehir arasındaki sürüş süresi ortalama 4.5 saattir. Sabah saat 08:00'de Mersin'deki dairenizde başlayan paketleme ve yükleme işlemleri öğle saatlerinde tamamlanır. Kamyonumuz öğleden sonra Kayseri'ye ulaşarak aynı gün içerisinde eşyalarınızın kurulumunu tamamlar.",
    pricingText: "Mersin ile Kayseri arası nakliyat fiyatları Mersin Uzman Eller Nakliyat tarafından 14.500 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Kayseri taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 14.500 TL ile 16.500 TL arasında değişirken; 2+1 daire taşıma 17.500 TL ile 20.000 TL, 3+1 daire taşıma ise 20.500 TL ile 23.500 TL arasında bütçelendirilir.",
    routeText: "Mersin'den Kayseri'ye giden nakliye araçlarımız Silifke otoyolunu kullanarak sırasıyla Mersin - Silifke - Niğde - Yeşilhisar - Yahyalı - İncesu - Melikgazi hattını takip eder. Yolun büyük bölümü duble yol ve otoyol kalitesindedir. Silifke geçişindeki Toros dağ yollarında ve kış aylarında Niğde-Kayseri arasındaki yoğun kar yağışlı bölgelerde araçlarımızın sürüş güvenliği kurallarına azami derecede dikkat edilmektedir.",
    insuranceText: "Mersin Uzman Eller Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Mersin'den yüklendiği andan itibaren Kayseri'deki yeni adresinizde teslim edilene kadar oluşabilecek kaza, devrilme, yangın riskine karşı Anadolu Sigorta güvencesindedir. Sigorta poliçesi taşınma öncesinde adınıza düzenlenerek ıslak imzalı sözleşmeyle birlikte size teslim edilir.",
    tipsText: "Kayseri'ye taşınırken dikkat edilmesi gereken en kritik konu, özellikle kış aylarında yaşanan yoğun kar yağışı ve don olaylarıdır. Kış geçişlerinde Silifke ve Niğde makaslarındaki buzlanmalara karşı tüm araçlarımızın kış lastiği, zincir ve çekme halatı donanımları tam olarak sevk edilir. Ayrıca Kayseri Talas bölgesindeki yüksek katlı binalarda asansör kurulum açısı taşınma öncesinde kontrol edilmelidir.",
    faq: [
      {
            "question": "Mersin Kayseri nakliyat kaç saat sürer?",
            "answer": "İki şehir arası karayolu mesafesi ortalama 4.5 saattir. Yükleme ve montaj dahil süreç genellikle aynı gün içinde tamamlanır."
      },
      {
            "question": "Talas ilçesine de asansör kuruyor musunuz?",
            "answer": "Evet, Kayseri'nin Melikgazi, Kocasinan ve Talas ilçeleri dahil tüm bölgelerine asansörlü nakliye hizmeti sunuyoruz."
      },
      {
            "question": "Fiyatlarınıza paketleme dahil midir?",
            "answer": "Evet, tüm mobilya, beyaz eşya ve hassas eşyalarınızın çift kat ambalajlanması fiyat teklifimize dahildir."
      },
      {
            "question": "Kayseri'den Mersin'ya dönüş taşımaları yapıyor musunuz?",
            "answer": "Evet, Kayseri-Mersin yönündeki geri dönüş seferlerimizde uygun fiyat avantajısıyla ev taşıma hizmeti sunmaktayız."
      },
      {
            "question": "Hassas eşyalar için ek önlem alıyor musunuz?",
            "answer": "Evet, kırılacak cam eşyalar ve elektronikler için özel koruyucu köpükler ve kalın koliler kullanarak paketleme yapıyoruz."
      },
      {
            "question": "Sözleşme yapıyor musunuz?",
            "answer": "Evet, taşıma öncesinde tüm şartları, fiyatı ve teslimat tarihini belirten resmi yazılı evden eve nakliyat sözleşmesi imzalıyoruz."
      }
]
  },
  'mersin-bursa-evden-eve-nakliyat': {
    slug: 'mersin-bursa-evden-eve-nakliyat',
    city: 'Bursa',
    distanceKm: 840,
    durationHours: 10,
    priceRangeMin: 29500,
    priceRangeMax: 38400,
    viaRoute: 'O-21 Otoyolu, Eskişehir ve İnegöl geçişli kuzeybatı güzergâhı',
    notes: 'İnegöl geçişindeki yoğun mobilya lojistik trafiğine dikkat edilmelidir. Bursa merkezindeki dar tarihi sokaklar için mobil asansör desteği verilir.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den Marmara Bölgesi'nin sanayi devlerinden Bursa'nın tüm ilçelerine (Nilüfer, Osmangazi, Yıldırım, Mudanya, İnegöl dahil) profesyonel asansörlü ve sigortalı evden eve nakliyat hizmeti vermektedir. 840 kilometrelik Bursa yolculuğunda eşyalarınızın zarar görmemesi için K3 yetki belgeli araç filomuz, tecrübeli şoförlerimiz ve kadrolu marangozlarımızla hizmetinizdeyiz. Sabit fiyat garantisiyle Mersin'den Bursa'ya taşınırken ek ücret sürprizi yaşamazsınız.",
    distanceText: "Mersin ile Bursa arası karayolu mesafesi yaklaşık 840 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 2 gündür. Nakliye kamyonlarımızın sürüş süresi ortalama 10 saattir. İlk gün Mersin'de de-montaj, ambalajlama ve kamyona yükleme işlemleri tamamlanır ve kamyonumuz yola çıkar. Ertesi gün sabah saatlerinde Bursa'daki yeni adresinize ulaşan ekiplerimiz, asansör yardımıyla eşyaların dairenize taşınmasını gerçekleştirir.",
    pricingText: "Mersin ile Bursa arası nakliyat fiyatları Mersin Uzman Eller Nakliyat tarafından 29.500 TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. Bursa taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı 29.500 TL ile 31.500 TL arasında değişirken; 2+1 daire taşıma 32.500 TL ile 35.000 TL, 3+1 daire taşıma ise 35.500 TL ile 38.500 TL arasında bütçelendirilir.",
    routeText: "Mersin'den Bursa'ya giden nakliye araçlarımız Silifke otoyolundan yola çıkarak sırasıyla Mersin - Silifke - Niğde - Aksaray - Ankara - Eskişehir - Bozüyük - İnegöl - Bursa güzergâhını takip eder. Bu hat şehirlerarası nakliyat için en güvenli karayolu hattıdır. Özellikle İnegöl geçişindeki yoğun mobilya lojistik trafiğinde ve kış aylarındaki dağ geçişlerinde araç şoförlerimiz sürüş güvenliği kurallarına tam olarak uymaktadır.",
    insuranceText: "Mersin Uzman Eller Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Mersin'den yüklendiği andan itibaren Bursa'daki yeni evinize teslim edilip kurulana kadar yaşanabilecek tüm kaza, yangın, devrilme ve yol sarsıntı hasarlarına karşı Anadolu Sigorta güvencesiyle sigortalanır. Poliçe evrakı taşınma günü sabahı adınıza düzenlenerek size takdim edilir.",
    tipsText: "Bursa'ya taşınırken dikkat edilmesi gereken husus, özellikle Osmangazi ve Yıldırım gibi eski merkez ilçelerdeki dik yokuşlu sokaklar ve dar yerleşim yerleridir. Bu bölgelerde dış cephe nakliye asansörünün kurulabilmesi için sokak yapısının önceden analiz edilmesi önem taşır. Nilüfer gibi yeni yerleşim bölgelerinde ise site yönetimlerinin asansör kurulum alanlarına ve yükleme saatlerine dair kuralları önceden öğrenilmelidir.",
    faq: [
      {
            "question": "Mersin Bursa arası nakliyat kaç gün sürer?",
            "answer": "Eşyaların yüklenmesi, yolculuk ve Bursa'da yeni adreste kurulup teslim edilmesi toplam 2 iş günü sürmektedir."
      },
      {
            "question": "Nilüfer ve Mudanya ilçelerine hizmet veriyor musunuz?",
            "answer": "Evet, Nilüfer, Osmangazi, Yıldırım, Mudanya, İnegöl, Gemlik dahil tüm Bursa ilçelerine taşıma yapıyoruz."
      },
      {
            "question": "Bursa'da asansörlü nakliye yapıyor musunuz?",
            "answer": "Evet, Bursa'daki yeni dairenizin balkon veya pencere açısı asansör kurulumuna uygunsa mobil asansör sistemimizi kuruyoruz."
      },
      {
            "question": "Fiyatlarınıza gardırop montajı dahil midir?",
            "answer": "Evet, gardırop ve yatakların sökümünü ve kurulumunu ek ücret almadan tamamlar."
      },
      {
            "question": "Eşyaların zarar görmesi durumunda ne yapıyorsunuz?",
            "answer": "Tüm taşımalarımız sigorta güvencesindedir. Herhangi bir hasar durumunda sigorta poliçesi kapsamında hasar tespiti yapılarak zararınız karşılanır."
      },
      {
            "question": "Bursa'dan Mersin'ya dönüş taşımacılığı yapıyor musunuz?",
            "answer": "Evet, Bursa-Mersin yönünde de profesyonel evden eve nakliye ve uygun fiyatlı dönüş aracı seçenekleri sunuyoruz."
      }
]
  }
,

  "mersin-hatay-evden-eve-nakliyat": {
    "slug": "mersin-hatay-evden-eve-nakliyat",
    "city": "Hatay",
    "distanceKm": 200,
    "durationHours": 2.5,
    "priceRangeMin": 15000,
    "priceRangeMax": 22000,
    "viaRoute": "O-52 Otoyolu ve İskenderun-Hatay Karayolu",
    "notes": "Bölgedeki yerleşim durumuna uygun asansörlü platform planlaması yapılır.",
    "introText": "Mersin Uzman Eller Nakliyat, Mersin'den Hatay'ın tüm bölgelerine (Antakya, İskenderun, Defne, Kırıkhan, Samandağ dahil) K3 yetki belgeli çelik kasalı araçlarımızla asansörlü evden eve nakliye hizmetleri sunmaktadır.",
    "distanceText": "Mersin ile Hatay arası karayolu mesafesi yaklaşık 200 kilometredir ve nakliye kamyonlarımızla seyahat süresi ortalama 2.5 saattir. Tüm taşıma işlemi aynı gün içerisinde paketlemeden anahtar teslim montaja kadar tamamlanır.",
    "pricingText": "Mersin Hatay nakliyat fiyatları 21.000 TL ile 25.000 TL arasında değişmekte olup, oda sayısı ve asansör gereksinimine göre kesinleştirilmektedir. Anadolu Sigorta poliçesi fiyata dahildir.",
    "routeText": "Araçlarımız O-52 otoyolundan çıkış yaparak İskenderun üzerinden Hatay merkez ilçelerine ulaşım sağlar. Yol düzgün otoyol ve duble yol standartlarındadır.",
    "insuranceText": "Mersin Hatay arası tüm ev taşımaları Anadolu Sigorta emtia sigortası kapsamında korunmaktadır.",
    "tipsText": "Hatay'da yerel trafik kuralları ve bina otopark mesafelerine uygun teleskopik platform kurulumu planlanır.",
    "faq": [
      {
        "question": "Mersin Hatay nakliyat kaç saat sürer?",
        "answer": "Yükleme, yol ve montaj dahil olmak üzere tüm operasyon ortalama 6-8 saat içinde tamamlanır."
      },
      {
        "question": "İskenderun ilçesine de taşıma yapıyor musunuz?",
        "answer": "Evet, Hatay’ın İskenderun, Antakya, Kırıkhan ve diğer tüm ilçelerine nakliyat hizmetimiz vardır."
      }
    ]
  },
  "mersin-konya-evden-eve-nakliyat": {
    "slug": "mersin-konya-evden-eve-nakliyat",
    "city": "Konya",
    "distanceKm": 350,
    "durationHours": 4.5,
    "priceRangeMin": 18500,
    "priceRangeMax": 26000,
    "viaRoute": "Mersin - Mut - Karaman - Konya Karayolu",
    "notes": "Sert geçen kış şartlarında İç Anadolu geçişleri için kış donanımlı araçlarımız sevk edilir.",
    "introText": "Mersin Uzman Eller Nakliyat, Mersin'den İç Anadolu'nun en büyük yüzölçümüne sahip şehri Konya'nın tüm bölgelerine (Selçuklu, Meram, Karatay dahil) güvenilir evden eve nakliye hizmetleri sağlamaktadır.",
    "distanceText": "Mersin ile Konya arası karayolu mesafesi yaklaşık 350 kilometredir ve nakliye araçlarımızın sürüş süresi ortalama 4.5 saattir. Sabah başlanan yükleme işlemi sonrası ertesi gün sabah kurulum tamamlanır.",
    "pricingText": "Mersin Konya arası nakliyat fiyatları 18.500 TL ile 26.000 TL arasında değişmektedir. Mesafe ve oda sayısına göre yakıt ve personel giderleri hesaplanarak şeffaf teklif sunulur.",
    "routeText": "Araçlarımız Mersin - Silifke - Mut - Karaman üzerinden Konya güzergâhını takip eder. Toros geçişlerindeki virajlı dağ yollarında sürüş güvenliği önlemleri titizlikle uygulanır.",
    "insuranceText": "Mersin Konya arası ev taşımalarımız Anadolu Sigorta emtia sigortası ile yol boyunca güvence altındadır.",
    "tipsText": "Konya genelinde yüksek katlı konutlarda asansör kurulum alanı bina önceden kontrol edilmelidir.",
    "faq": [
      {
        "question": "Mersin Konya nakliyat kaç gün sürer?",
        "answer": "Operasyon genellikle 1.5 gün sürer. İlk gün yükleme yapılır, ertesi gün sabah yeni adrese teslimat gerçekleştirilir."
      }
    ]
  },
  "mersin-karaman-evden-eve-nakliyat": {
    "slug": "mersin-karaman-evden-eve-nakliyat",
    "city": "Karaman",
    "distanceKm": 240,
    "durationHours": 3.5,
    "priceRangeMin": 16000,
    "priceRangeMax": 23000,
    "viaRoute": "Mersin - Silifke - Mut - Karaman Karayolu",
    "notes": "Mut-Sertavul geçidindeki hava koşulları ve buzlanma durumları ekiplerimizce takip edilir.",
    "introText": "Mersin Uzman Eller Nakliyat, Mersin'den Karaman'a (Merkez, Ermenek dahil) K3 yasal yetki belgeli araçlarımız ve kadrolu ambalaj ekiplerimizle güvenli asansörlü nakliyat çözümleri sunar.",
    "distanceText": "Mersin Karaman arası yaklaşık 240 km olup sürüş süresi nakliye araçları için 3.5 saattir. Tüm taşıma işlemi aynı gün içinde bitirilerek anahtar teslim kurulum sağlanır.",
    "pricingText": "Mersin Karaman arası nakliyat fiyatları 16.000 TL ile 23.000 TL aralığında bütçelendirilir. Sigorta poliçesi ve marangozluk bedeli fiyata dahildir.",
    "routeText": "Sertavul Geçidi üzerinden yürütülen lojistik sürecinde, dik rampalar nedeniyle araçlarımızda özel sabitleme gergileri standart olarak kullanılır.",
    "insuranceText": "Karaman taşımalarında Anadolu Sigorta poliçesiyle tüm eşya grupları hasara karşı teminat altındadır.",
    "tipsText": "Yayla ve engebeli zeminlerde asansör kurulum emniyeti ekiplerimizce alınır.",
    "faq": [
      {
        "question": "Karaman Ermenek ilçesine hizmetiniz var mı?",
        "answer": "Evet, Karaman’ın Ermenek, Kâzımkarabekir ve diğer tüm çevre ilçelerine evden eve hizmet sunuyoruz."
      }
    ]
  },
  "mersin-osmaniye-evden-eve-nakliyat": {
    "slug": "mersin-osmaniye-evden-eve-nakliyat",
    "city": "Osmaniye",
    "distanceKm": 180,
    "durationHours": 2.2,
    "priceRangeMin": 14000,
    "priceRangeMax": 20000,
    "viaRoute": "O-52 TAG Otoyolu Doğrudan Hat",
    "notes": "TAG Otoyolu otoyol kalitesiyle sarsıntısız ve hızlı nakliye avantajı sunar.",
    "introText": "Mersin Uzman Eller Nakliyat, Mersin'den komşu ilimiz Osmaniye'ye (Kadirli, Düziçi dahil) asansörlü ve marangozlu evden eve nakliye hizmetleri sunmaktadır.",
    "distanceText": "Mersin Osmaniye arası yaklaşık 180 km olup otoyol standartlarında 2 saatlik sürüş mesafesindedir. Operasyon sabah başlayıp aynı gün akşam tamamlanır.",
    "pricingText": "Mersin Osmaniye ev taşıma fiyatları 14.000 TL ile 20.000 TL arasında değişmekte olup sabit fiyat garantisi uygulanır.",
    "routeText": "Tarsus-Adana-Ceyhan-Osmaniye TAG otoyol hattını kullanan araçlarımız, bölünmüş güvenli yollardan hasarsız transfer sağlar.",
    "insuranceText": "Mersin Osmaniye arası tüm taşımalar emtia nakliye sigortası güvencesindedir.",
    "tipsText": "Yüksek katlı binalarda otopark alanlarının asansör aracı için rezerve edilmesi süreci hızlandırır.",
    "faq": [
      {
        "question": "Osmaniye Kadirli ilçesine taşıma yapıyor musunuz?",
        "answer": "Evet, Osmaniye Kadirli başta olmak üzere tüm ilçelerine günlük servisimiz vardır."
      }
    ]
  },
  "mersin-nigde-evden-eve-nakliyat": {
    "slug": "mersin-nigde-evden-eve-nakliyat",
    "city": "Niğde",
    "distanceKm": 200,
    "durationHours": 2.5,
    "priceRangeMin": 15000,
    "priceRangeMax": 21500,
    "viaRoute": "O-21 Otoyolu Doğrudan Geçiş",
    "notes": "Pozantı otoban geçişindeki dik Toros tünellerinde sürüş emniyeti kuralları gözetilir.",
    "introText": "Mersin Uzman Eller Nakliyat, Mersin'den İç Anadolu giriş kapısı Niğde'ye (Bor dahil) K3 yasal yetki belgeli araç filomuzla asansörlü ev taşıma desteği vermektedir.",
    "distanceText": "Mersin Niğde arası karayolu mesafesi 200 km'dir ve nakliye araçları için sürüş süresi 2.5 saattir. Tüm işlem aynı gün içinde bitirilir.",
    "pricingText": "Mersin Niğde nakliyat bütçesi 21.000 TL ile 21.500 TL aralığındadır. Sonradan ek ücret talep edilmez.",
    "routeText": "Pozantı Otoyolu üzerinden tüneller geçilerek Niğde otoban çıkışına ulaşılır. Yol konforu yüksektir.",
    "insuranceText": "Niğde taşımalarımız Anadolu Sigorta emtia sigortası kapsamındadır.",
    "tipsText": "Pozantı dağ geçişinde kışın buzlanma takibi yapılır.",
    "faq": [
      {
        "question": "Niğde Bor ilçesine taşıma yapıyor musunuz?",
        "answer": "Evet, Niğde merkez ve Bor ilçesi başta olmak üzere tüm bölgelere hizmetimiz mevcuttur."
      }
    ]
  }
};