import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const outputPath = path.join(rootDir, 'src', 'lib', 'routes-data.ts');

const routePrices = {
  'mersin-istanbul-evden-eve-nakliyat': { min: 32500, max: 42000 },
  'mersin-ankara-evden-eve-nakliyat': { min: 17000, max: 26000 },
  'mersin-adana-evden-eve-nakliyat': { min: 14500, max: 25500 },
  'mersin-gaziantep-evden-eve-nakliyat': { min: 19500, max: 30500 },
  'mersin-izmir-evden-eve-nakliyat': { min: 31500, max: 41000 },
  'mersin-antalya-evden-eve-nakliyat': { min: 19500, max: 28500 },
  'mersin-kayseri-evden-eve-nakliyat': { min: 14500, max: 23500 },
  'mersin-bursa-evden-eve-nakliyat': { min: 29500, max: 38400 }
};

const rawRoutes = [
  {
    slug: 'mersin-istanbul-evden-eve-nakliyat',
    city: 'İstanbul',
    distanceKm: 930,
    durationHours: 12,
    viaRoute: 'O-21 Otoyolu (Ankara-Tarsus Otoyolu) ve Kuzey Marmara Otoyolu',
    notes: 'İstanbul girişinde nakliye kamyonları için uygulanan Yavuz Sultan Selim Köprüsü zorunluluğu ve şehir içi saat kısıtlamaları dikkate alınmalıdır.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den İstanbul'un tüm ilçelerine (Kadıköy, Beşiktaş, Ümraniye, Başakşehir, Esenyurt dahil) profesyonel, K3 yetki belgeli ve sigortalı şehirlerarası evden eve nakliyat hizmeti vermektedir. Uzun mesafe taşımacılığında uzman kadromuz, eşyalarınızın yol boyunca sarsıntı ve darbelere karşı zarar görmemesi için çift kat pıtpıt naylon ve özel kalın Kraft ambalaj malzemeleriyle koruma sağlar. Sabit fiyat garantimiz ile Mersin'den yola çıkan kamyonumuz, İstanbul'da kapıda ek ücret sürprizi yaşatmadan eşyalarınızı yeni dairenize teslim eder.",
    distanceText: "Mersin ile İstanbul arası karayolu mesafesi yaklaşık 930 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 2 gündür. Taşıma sürecinde O-21 otoyolu güzergâhı üzerinden seyreden kamyonlarımız, şoförlerimizin dinlenme and sürüş güvenliği kurallarına uygun olarak hareket eder. İlk gün Adana'da eşyaların de-montaj, paketleme ve yükleme işlemleri tamamlanarak kamyonumuz yola çıkar. İkinci gün sabahı İstanbul'daki yeni adresinize ulaşan ekiplerimiz, eşyaları asansör yardımıyla dairenize çıkartır ve mobilyaların montaj işlemlerini gerçekleştirerek taşınmayı tamamlar.",
    routeText: "Mersin'den İstanbul'a taşıma yaparken tırlarımız ve büyük kamyonlarımız sırasıyla Mersin - Pozantı - Niğde - Aksaray - Ankara - Bolu - Düzce - Sakarya - Kocaeli güzergâhını takip eder. İstanbul sınırlarına girildiğinde ağır vasıtalar için zorunlu olan Yavuz Sultan Selim Köprüsü ve Kuzey Marmara Otoyolu bağlantısı kullanılır. Avrupa Yakası'na geçecek araçlarımız için bu güzergâh trafik yoğunluğunu atlatmak ve güvenli sürüş sağlamak açısından son derece önemlidir. Her sevkiyatımız GPS araç takip sistemiyle donatılmış olup müşterilerimize anlık konum bilgisi paylaşılmaktadır.",
    insuranceText: "Mersin Uzman Eller Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Mersin'den yüklenen eşyalarınız İstanbul'daki yeni adresinizde teslim edilene kadar oluşabilecek kaza, yangın, doğal afet and yol sarsıntı hasarlarına karşı sigortalanır. Anadolu Sigorta güvencesiyle hazırlanan nakliyat poliçesi, taşınma sabahında adınıza düzenlenerek ıslak imzalı sözleşmeyle birlikte tarafınıza teslim edilir. Eşyaların taşınması sırasında oluşabilecek çizik and sürtünme gibi küçük hasarlar ise firma içi sorumluluk garantimiz kapsamındadır.",
    tipsText: "İstanbul'a taşınırken dikkat edilmesi gereken en kritik husus, şehir içi dar sokaklar ve site yönetimlerinin taşıma saatleri kısıtlamalarıdır. Kadıköy, Beşiktaş, Şişli gibi dar tarihi sokaklara sahip ilçelerde büyük nakliye kamyonlerinin yanaşması zor olabilir. Bu durumlarda küçük nakliye kamyonetlerimizle transfer (aktarma) hizmeti organize etmekteyiz. Ayrıca yüksek katlı binalarda asansör kurulum izinlerinin ve site içi park yeri rezervasyonlarının taşınmadan en az 2 gün önce apartman yönetimleriyle görüşülerek alınmış olması, taşınma gününün sorunsuz geçmesini sağlayacaktır.",
    faq: [
      { question: "Mersin İstanbul nakliye süreci kaç gün sürer?", answer: "Eşyaların Adana'da yüklenmesi ve İstanbul'da yeni adrese boşaltılarak kurulması toplamda 2 iş günü sürmektedir." },
      { question: "İstanbul'da dar sokaklarda taşıma nasıl yapılıyor?", answer: "Kamyonumuzun yanaşamadığı dar sokaklarda küçük aktarma araçları (pikap/kamyonet) kullanarak eşyaları güvenle dairenize taşıyoruz." },
      { question: "Sigorta poliçesi neleri kapsar, ücreti ne kadardır?", answer: "Sigorta poliçemiz yol kazaları, devrilme, yangın ve hırsızlık gibi majör riskleri kapsar. Poliçe bedeli teklif fiyatımıza dahildir, ekstra ücret alınmaz." },
      { question: "İstanbul'da asansörlü taşıma hizmeti veriyor musunuz?", answer: "Evet, İstanbul'daki yeni adresinizde dış cephe nakliye asansörü kurulumuna uygunluk varsa mobil asansör sistemimizi kurarak taşıma yapıyoruz." },
      { question: "Gardırop ve beyaz eşyaların montajını yapıyor musunuz?", answer: "Kadrolu marangozumuz gardıropları kurar, tesisat ustamız ise çamaşır ve bulaşık makinesinin bağlantılarını ücretsiz olarak tamamlar." },
      { question: "Ödemeyi ne zaman ve nasıl yapıyoruz?", answer: "Sözleşme anında küçük bir kapora alınır. Kalan tutarın yarısı Adana'da yükleme bitiminde, kalan yarısı ise İstanbul'da teslimat sonrasında ödenir." }
    ]
  },
  {
    slug: 'mersin-ankara-evden-eve-nakliyat',
    city: 'Ankara',
    distanceKm: 490,
    durationHours: 6,
    viaRoute: 'O-21 Otoyolu (Mersin-Ankara Otoyolu doğrudan hat)',
    notes: 'Ankara merkezinde yüksek katlı konutlarda asansörlü taşımacılık yaygın olarak tercih edilmektedir.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den başkent Ankara'nın tüm ilçelerine (Çankaya, Yenimahalle, Keçiören, Etimesgut, Gölbaşı dahil) asansörlü ve marangozlu evden eve nakliyat çözümleri sunmaktadır. İç Anadolu nakliye hattında haftalık düzenli seferler düzenleyen firmamız, parça eşyalarınızı veya komple evinizi profesyonel standartlarda taşır. Uzman Eller Nakliyat güvencesiyle K3 yetki belgeli araçlarımız ve kadrolu ekibimiz, Adana'daki de-montaj işlemlerinden Ankara'daki anahtar teslim montaj sürecine kadar tüm adımları büyük bir titizlikle yürütmektedir.",
    distanceText: "Mersin ile Ankara arası karayolu mesafesi yaklaşık 490 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1 gündür. Sabah saat 08:00'de Adana'daki evinizde başlayan paketleme ve yükleme işlemleri öğleden sonra saat 14:00 civarında tamamlanır. Kamyonumuz O-21 Adana-Ankara otoyolu üzerinden hareket ederek yaklaşık 6 saatlik sürüşün ardından aynı gün akşamı veya ertesi gün sabahı Ankara'daki yeni adresinize ulaşır ve eşyalarınızın kurulumuna başlanır.",
    routeText: "Mersin'den Ankara'ya giden nakliye araçlarımız, tamamen otoyol konforu sunan O-21 Niğde-Ankara otoyolunu kullanır. Güzergâh sırasıyla Mersin - Pozantı - Ulukışla - Niğde - Aksaray - Şereflikoçhisar - Gölbaşı hattı üzerinden Ankara merkeze ulaşır. Toros dağları geçişindeki Pozantı rampalarında araçlarımızın güvenliği için yavaş and kontrollü seyredilir. Otoyol kalitesi sayesinde eşyalarınız minimum sarsıntıya maruz kalır. Araçlarımızın tümü karayolu taşıma kanunlarına uygun hız sınırlarında ilerler.",
    insuranceText: "Mersin Uzman Eller Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Pozantı ve İç Anadolu otoyollarında seyir halindeyken yaşanabilecek her türlü kaza, devrilme, yangın riskine karşı tam bedel üzerinden sigortalanır. Sigorta poliçesi poliçe no ve şirket detaylarıyla birlikte taşınma öncesinde size teslim edilir. Eşyalarınızın yükleme esnasında apartman içinde veya asansörde görebileceği hasarlar da firmamızın güvencesi altındadır.",
    tipsText: "Ankara'ya taşınırken dikkat edilmesi gereken en önemli konu, özellikle Çankaya, Eryaman ve Batıkent gibi bölgelerde yoğun olarak yer alan çok katlı rezidans ve yüksek apartman yapılarıdır. Bu binalarda asansör kurulum alanının açık olması ve site yönetiminin yük asansörü kullanım saatlerine izin vermesi gerekir. Ayrıca kış aylarında Pozantı ve Aksaray geçişlerindeki yoğun kar and buzlanma risklerine karşı araçlarımızın kar lastiği ve zincir donanımları tam olarak sevk edilmektedir.",
    faq: [
      { question: "Mersin Ankara nakliyat kaç saat sürer?", answer: "Yükleme bittikten sonra iki şehir arası sürüş süresi ortalama 6 saattir. Genellikle ertesi gün sabah kurulum tamamlanır." },
      { question: "Ankara'da yüksek katlı dairelere asansör kuruluyor mu?", answer: "Evet, Ankara'daki yeni daireniz kaçıncı katta olursa olsun 25. kata kadar ulaşabilen teleskopik asansörlerimizle hizmet veriyoruz." },
      { question: "Paketleme malzemeleriniz kaliteli mi?", answer: "Eşyalarınız için kalın havalı ambalaj naylonları, Kraft kağıtlı mukavva koliler and mobilyalara özel stretch sargılar kullanıyoruz." },
      { question: "Ankara'da askılı tekstil taşıma yapıyor musunuz?", answer: "Evet, gardıroptaki kıyafetleriniz için araçlarımızda özel askılı dolap sistemleri yer almaktadır, kırışmadan taşınırlar." },
      { question: "Ekstra ücret çıkma ihtimali var mı?", answer: "Hayır. Sözleşmede anlaştığımız ve imzaladığımız sabit fiyat dışında hiçbir koşulda ek ücret talep etmiyoruz." },
      { question: "Rezervasyon işlemini ne kadar süre önce yapmalıyım?", answer: "Özellikle yaz dönemlerinde ve hafta sonlarında yoğunluk yaşandığı için taşınmadan en az 1 hafta önce rezervasyon yaptırmanızı öneririz." }
    ]
  },
  {
    slug: 'mersin-adana-evden-eve-nakliyat',
    city: 'Adana',
    distanceKm: 70,
    durationHours: 1,
    viaRoute: 'O-51 Tarsus-Adana Otoyolu',
    notes: 'Kısa mesafe avantajı sayesinde yükleme ve boşaltma işlemleri aynı gün içerisinde hızlıca tamamlanır.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den Adana'nın tüm ilçelerine (Seyhan, Çukurova, Yüreğir, Sarıçam dahil) hızlı, güvenilir ve uygun fiyatlı evden eve nakliyat hizmeti sağlamaktadır. Yakın mesafe lojistik ağımız sayesinde eşyalarınızı aynı gün içerisinde paketleyip yüklüyor ve Adana'daki yeni adresinizde marangoz montajını tamamlayarak teslim ediyoruz. Uzman Eller Nakliyat olarak, Mersin-Adana otoyol hattındaki günlük taşımalarımız sayesinde müşterilerimize son derece ekonomik fiyatlar sunuyoruz.",
    distanceText: "Mersin ile Adana arası karayolu mesafesi yaklaşık 70 kilometredir ve nakliye kamyonlarımızla ulaşım süresi ortalama 1 saattir. Kısa mesafe avantajı sayesinde ev taşıma operasyonu sabah 08:00'de paketleme ile başlayıp, aynı gün akşamüstü Adana'daki dairenizde anahtar teslim olarak tamamlanır.",
    pricingText: "Mersin Adana ev taşıma fiyatları Uzman Eller Nakliyat tarafından 9.000 TL ile 12.000 TL arasında bütçelendiriliyoruz. Fiyat teklifimize K3 yetki belgeli nakliye aracı, ambalajlama malzemeleri, marangoz de-montaj ve kurulum hizmetleri ile emtia taşıma sigortası dahildir. Daire oda sayısı ve yükseklik durumuna göre net fiyat belirlenir.",
    routeText: "Mersin'den yola çıkan araçlarımız O-51 otoyolunu kullanarak Tarsus üzerinden doğrudan Adana çevre yoluna katılım sağlar. Yol tamamen düz ve bölünmüş duble yol/otoyol standartlarında olduğundan eşyaların sarsılma veya hasar görme riski sıfıra yakındır.",
    insuranceText: "Mersin Adana arası tüm taşımalarımız Anadolu Sigorta güvencesiyle emtia nakliyat sigortası kapsamında gerçekleştirilmektedir. Eşyalarınız yoldaki olası kaza, yangın veya devrilme risklerine karşı tamamen güvence altına alınır.",
    tipsText: "Adana'ya taşınırken dikkat edilmesi gereken husus, Seyhan ve Çukurova ilçelerindeki yoğun trafik saatleri ve site yönetimlerinin asansör kurulum kurallarıdır. Ekiplerimiz taşınma günü öncesinde gerekli koordinasyonu sağlayarak zaman kaybını önler.",
    faq: [
      { question: "Mersin'den Adana'ya taşınma kaç saat sürer?", answer: "Mesafe kısa olduğu için tüm yükleme, yolculuk ve montaj süreçleri dahil 5 ila 7 saat arasında tamamlanmaktadır." },
      { question: "Seyhan ve Çukurova'da asansör kurulabiliyor mu?", answer: "Evet, Adana genelinde asansör kurulum alanı uygun olan tüm yüksek katlı binalarda mobil dış cephe eşya asansörümüzü kuruyoruz." },
      { question: "Adana'da mobilya montajı fiyata dahil midir?", answer: "Evet, gardırop, yatak üniteleri ve beyaz eşyaların söküm ve kurulum işlemleri fiyatımıza dahildir." },
      { question: "Adana'dan Mersin'e dönüş taşıması yapıyor musunuz?", answer: "Evet, Adana-Mersin yönünde de günlük araç dönüş seferlerimizle ekonomik fiyatlı taşımacılık yapıyoruz." },
      { question: "Fiyatı sabitleyebiliyor musunuz?", answer: "Evet, taşınma öncesinde karşılıklı ıslak imzalı sözleşme imzalayarak fiyata sabitlik garantisi veriyoruz." },
      { question: "Klima sökümü yapıyor musunuz?", answer: "Klima söküm ve montajı elektrik ve gaz tesisatı uzmanlığı gerektirdiğinden dahil değildir, ancak anlaşmalı servisle yönlendirebiliyoruz." }
    ]
  },
  {
    slug: 'mersin-gaziantep-evden-eve-nakliyat',
    city: 'Gaziantep',
    distanceKm: 220,
    durationHours: 3,
    viaRoute: 'O-52 Otoyolu (Mersin-Gaziantep Otoyolu, Osmaniye ve Nizip güzergâhı)',
    notes: 'TAG Otoyolu kullanılarak hızlı teslimat sağlanır. Gaziantep dik ve yokuşlu sokaklarında asansör kurulum alanı önceden tespit edilmelidir.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den bölgenin lokomotif şehirlerinden Gaziantep'in tüm ilçelerine (Şahinbey, Şehitkamil, İslahiye, Nizip dahil) profesyonel asansörlü evden eve nakliyat hizmeti sunmaktadır. Güneydoğu lojistik hattında tecrübeli şoförlerimiz ve kadrolu taşıma ekiplerimizle, eşyalarınızı sıfır hasar ilkesiyle taşıyoruz. Paketlemeden montaja kadar tüm adımlarda sabitleme ve koruma önlemlerini en üst düzeyde uygulayarak Gaziantep'teki yeni evinize sorunsuzca yerleşmenizi sağlıyoruz.",
    distanceText: "Mersin ile Gaziantep arası karayolu mesafesi yaklaşık 220 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1 gündür. Karayolu sürüş süresi nakliye araçlarımız için yaklaşık 3 saattir. Sabah saat 08:00'de Adana'da başlayan yükleme işlemi sonrasında öğlen yola çıkan kamyonumuz, öğleden sonra Gaziantep'teki yeni adresinize ulaşır. Ekiplerimiz aynı gün akşam saatlerine kadar tüm mobilyaları kurarak teslimatı gerçekleştirir.",
    routeText: "Mersin'den Gaziantep'e giden nakliye araçlarımız O-52 otoyolunu (TAG Otoyolu - Tarsus Mersin Gaziantep Otoyolu) kullanır. Güzergâh sırasıyla Mersin - Ceyhan - Osmaniye - Bahçe - Nurdağı - Şehitkamil - Şahinbey hattını takip eder. Yol tamamen bölünmüş otoyol standartlarındadır. Nurdağı geçişindeki virajlı dağ yollarında ve rampalarda araçlarımızın güvenliği için sürüş hız sınırlarına tam olarak uyulmaktadır.",
    insuranceText: "Mersin Uzman Eller Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Adana'da yüklenen eşyalarınız Gaziantep'teki yeni evinize teslim edilene kadar yol kazaları, doğal afet and hırsızlık risklerine karşı sigortalanır. Anadolu Sigorta güvencesiyle hazırlanan poliçemiz taşınma öncesinde size sunulur. Eşyaların taşınması sırasında oluşabilecek küçük hasarlar da firmamızın garantisindedir.",
    tipsText: "Gaziantep'e taşınırken dikkat edilmesi gereken husus, Şahinbey ve Şehitkamil ilçelerindeki bazı eski yerleşim yerlerinde yer alan dik yokuşlar ve dar sokaklardır. Bu bölgelerde asansörlü nakliye kamyonunun yanaşabilmesi için sokak durumunun önceden analiz edilmesi gerekir. Ekiplerimiz gerekli durumlarda ek güvenlik şeritleri kullanarak asansör kurulum alanını rezerve eder. Ayrıca yeni binaların yüksek katlarında asansör boşluklarının durumu önceden bina yönetimine sorulmalıdır.",
    faq: [
      { question: "Mersin Gaziantep nakliyat kaç saat sürer?", answer: "İki şehir arası karayolu mesafesi ortalama 3 saattir. Yükleme ve boşaltma dahil tüm süreç aynı gün içinde biter." },
      { question: "Gaziantep Nizip ilçesine taşıma yapıyor musunuz?", answer: "Evet, Gaziantep'in Nizip, İslahiye, Nurdağı ve diğer tüm dış ilçelerine nakliye hizmeti sunuyoruz." },
      { question: "Asansör kurulumu fiyata dahil midir?", answer: "Evet, hem Adana'da hem de Gaziantep'te asansör kurulumu fiyata dahildir, sonradan ek ücret talep edilmez." },
      { question: "Kırılacak eşyaları kim paketliyor?", answer: "Talebiniz doğrultusunda mutfak kırılacakları, bardaklar and tabaklar özel havalı ambalaj kağıtlarıyla ekiplerimizce kolilenir." },
      { question: "Gaziantep'te montaj işlerini kim yapıyor?", answer: "Araç ekiplerimizde yer alan kadrolu marangozumuz gardırop, yatak and ünitelerin kurulumunu Gaziantep'teki yeni evinizde tamamlar." },
      { question: "Ödeme seçenekleriniz nelerdir?", answer: "Ödemelerinizi teslimat sonrasında nakit, banka havalesi veya EFT yoluyla güvenle gerçekleştirebilirsiniz." }
    ]
  },
  {
    slug: 'mersin-izmir-evden-eve-nakliyat',
    city: 'İzmir',
    distanceKm: 900,
    durationHours: 11,
    viaRoute: 'Konya - Afyonkarahisar - Uşak - Manisa - İzmir karayolu hattı',
    notes: 'Ege Bölgesi taşımalarında uzun yol nedeniyle eşyaların tır içinde sarsıntılara karşı mükemmel sabitlenmesi ve ambalajlanması zorunludur.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den Ege'nin incisi İzmir'in tüm ilçelerine (Karşıyaka, Bornova, Konak, Buca, Çeşme dahil) asansörlü, sigortalı ve profesyonel evden eve nakliyat hizmeti vermektedir. Uzun mesafe taşımacılığındaki köklü tecrübemizle, eşyalarınızın 900 kilometrelik İzmir yolculuğunu hasarsız tamamlaması için özel sabitleme ve askılama yöntemleri uyguluyoruz. K3 yetki belgeli geniş araç filomuz ve uzman marangozlarımızla Mersin'den İzmir'e taşınma sürecinizi tamamen stressiz bir deneyime dönüştürüyoruz.",
    distanceText: "Mersin ile İzmir arası karayolu mesafesi yaklaşık 900 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 2 gündür. İlk gün Adana'daki adresinizde eşyalarınız uzman marangoz and ambalaj ekiplerimizce de-monte edilir, paketlenir ve kapalı çelik kasa nakliye kamyonumuza yüklenir. Akşam saatlerinde yola çıkan kamyonumuz, ertesi gün sabah saatlerinde İzmir'deki yeni adresinize ulaşır and hemen asansör kurulumu yapılarak eşyaların daireye taşınması sağlanır.",
    routeText: "Mersin'den İzmir'e giden nakliye araçlarımız Mersin - Pozantı - Ereğli - Konya - Akşehir - Afyonkarahisar - Uşak - Kula - Salihli - Manisa - İzmir güzergâhını takip eder. Bu hat şehirlerarası ağır vasıta taşımacılığı için en güvenli ve en düz yoldur. Pozantı geçişi dışındaki yollar genellikle düz otoyol and duble yol kalitesindedir. Yol boyunca şoförlerimiz yasal dinlenme sürelerine uyarak sürüş güvenliğini en üst seviyede tutarlar.",
    insuranceText: "Mersin Uzman Eller Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Mersin'den yüklendiği andan itibaren İzmir'deki yeni adresinizde kurulana kadar oluşabilecek kaza, devrilme, yangın, sel gibi majör risklere karşı tam değeriyle sigortalanır. Anadolu Sigorta güvencesiyle hazırlanan poliçe nüshası taşınma sabahında adınıza düzenlenerek size takdim edilir.",
    tipsText: "İzmir'e taşınırken dikkat edilmesi gereken en önemli husus, özellikle Karşıyaka, Alsancak ve Göztepe gibi merkezi bölgelerdeki otopark sıkıntısı ve dar sokaklardır. Bu bölgelerde taşıma günü belediyeden park izni alınması veya otopark yerinin rezerve edilmesi süreci kolaylaştırır. Ayrıca Çeşme, Urla ve Seferihisar gibi yazlık bölgelere yapılacak taşımalarda uzun yol depolama ihtiyaçları and yazlık nem koruması önceden planlanmalıdır.",
    faq: [
      { question: "Mersin İzmir arası nakliye kaç gün sürer?", answer: "Yükleme ve yol dahil olmak üzere Mersin'den İzmir'e taşınma süreci toplam 2 iş gününde tamamlanmaktadır." },
      { question: "Çeşme ve Urla ilçelerine de hizmetiniz var mı?", answer: "Evet, İzmir'in Çeşme, Urla, Seferihisar, Aliağa gibi tüm dış ilçelerine ve yazlık bölgelerine taşıma yapıyoruz." },
      { question: "İzmir'de dış cephe asansörü kurulabiliyor mu?", answer: "Yeni adresinizde dış cephe asansör kurulum alanı uygunsa 25. kata kadar ulaşabilen asansörürümüzü kuruyoruz." },
      { question: "Eşyalar araç içinde nasıl korunuyor?", answer: "Araç kasalarımız sunta kaplamalı olup, eşyalar ambalajlandıktan sonra özel sabitleme ipleriyle kasa içine sıkıca bağlanır." },
      { question: "Beyaz eşyaların bağlantısını yapıyor musunuz?", answer: "Evet, çamaşır ve bulaşık makinenizi yeni evinizde tesisata bağlayıp çalışır durumda teslim ediyoruz." },
      { question: "İzmir'den Mersin'e dönüş taşımaları da yapıyor musunuz?", answer: "Evet, İzmir-Mersin yönünde de aynı şekilde profesyonel evden eve nakliye ve dönüş aracı avantajıyla uygun fiyatlı hizmet vermekteyiz." }
    ]
  },
  {
    slug: 'mersin-antalya-evden-eve-nakliyat',
    city: 'Antalya',
    distanceKm: 560,
    durationHours: 8,
    viaRoute: 'Mersin - Silifke - Mut - Karaman - Alanya sahil ve yayla yolları geçişi',
    notes: 'Antalya geçişindeki virajlı Toros dağ yolları nedeniyle usta şoförler and kapalı kasa araçlar tercih edilmelidir.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den Akdeniz'in turizm merkezi Antalya'nın tüm bölgelerine (Muratpaşa, Konyaaltı, Kepez, Alanya, Manavgat dahil) K3 yetki belgeli, sigortalı ve marangozlu evden eve nakliyat hizmeti sunmaktadır. Toroslar geçişli zorlu Antalya güzergâhında profesyonel şoförlerimiz ve kapalı çelik kasalı nakliye tırlarımızla eşyalarınızı sarsıntısız bir şekilde taşıyoruz. Sabit fiyat garantimiz ile taşınma gününde hiçbir ek maliyet çıkarmadan eşyalarınızı Antalya'daki yeni adresinize teslim ediyoruz.",
    distanceText: "Mersin ile Antalya arası karayolu mesafesi yaklaşık 560 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1-2 gündür. Yol durumuna and kullanılan güzergâhla göre nakliye araçlarımızın varış süresi ortalama 8 saattir. Adana'da sabah yüklenen eşyalar genellikle aynı günün gecesinde veya ertesi gün sabah saatlerinde Antalya'da yeni adrese ulaştırılır ve kurulum işlemleri hızlıca başlatılır.",
    routeText: "Mersin'den Antalya'ya giden araçlarımız iki alternatif rotayı kullanabilir. Birinci rota Mersin - Pozantı - Ereğli - Karaman - Mut - Alanya - Antalya hattıdır. İkinci alternatif ise Mersin sahil yolu üzerinden Silifke - Anamur - Gazipaşa - Alanya hattıdır. Genellikle ağır vasıtalar için daha güvenli ve virajı daha az olan Konya-Karaman-Mut güzergâhı tercih edilerek Toros dağ geçişleri en güvenli şekilde tamamlanır.",
    insuranceText: "Mersin Uzman Eller Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Mersin'den yüklendiği andan itibaren Antalya'daki yeni adresinizde teslim edilene kadar Anadolu Sigorta güvencesiyle korunur. Yol boyunca yaşanabilecek tüm kaza, yangın, devrilme gibi olumsuzluklara karşı poliçeniz tam bedel üzerinden adınıza taşınma öncesinde düzenlenir.",
    tipsText: "Antalya'ya taşınırken dikkat edilmesi gereken husus, yaz aylarında yaşanan aşırı sıcaklık ve nem durumudur. Sıcak hava şartlarında ambalaj malzemelerinin eşyalara yapışmaması veya nem yapmaması için özel gözenekli kraft ambalaj kağıtları and havalandırmalı sargılar kullanmaktayız. Ayrıca Konyaaltı ve Muratpaşa bölgelerindeki çok katlı ve dar sokaklı binalarda dış cephe asansör kurulum alanı önceden kontrol edilmelidir.",
    faq: [
      { question: "Mersin Antalya arası nakliyat kaç saat sürer?", answer: "İki şehir arası sürüş süresi ortalama 8 saattir. Genellikle yüklemeden sonraki gün kurulum tamamlanmış olur." },
      { question: "Alanya ve Manavgat ilçelerine de hizmet veriyor musunuz?", answer: "Evet, Antalya'nın Alanya, Manavgat, Serik, Kemer, Kumluca dahil tüm ilçelerine taşıma hizmetimiz mevcuttur." },
      { question: "Antalya'da yüksek katlı dairelere asansör kuruluyor mu?", answer: "Evet, Antalya'daki yeni dairenizde asansör kurulum alanı uygunsa 25. kata kadar ulaşabilen asansörümüzü kuruyoruz." },
      { question: "Ödemeyi kredi kartı ile yapabilir miyim?", answer: "Ödemeleri genellikle banka havalesi, EFT veya nakit olarak kabul ediyoruz. Detayları sözleşme esnasında netleştiriyoruz." },
      { question: "Mobilyaların sökümünü ve kurulumunu kim yapıyor?", answer: "Araç ekiplerimizde yer alan kadrolu uzman marangozumuz mobilyalarınızın de-montaj ve montaj işlemlerini eksiksiz tamamlar." },
      { question: "Parça eşya taşıma hizmetiniz var mı?", answer: "Evet, Antalya yönüne gidecek olan diğer müşterilerimizin eşyalarıyla birleştirerek uygun fiyatlı parça eşya taşıma hizmeti de sunuyoruz." }
    ]
  },
  {
    slug: 'mersin-kayseri-evden-eve-nakliyat',
    city: 'Kayseri',
    distanceKm: 335,
    durationHours: 4.5,
    viaRoute: 'Pozantı - Niğde - Develi - Kayseri karayolu hattı',
    notes: 'İç Anadolu kış şartlarında kış lastiği ve zincir donanımlı araçlarımızla güvenli geçiş sağlanmaktadır.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den İç Anadolu'nun sanayi ve ticaret merkezlerinden Kayseri'nin tüm bölgelerine (Melikgazi, Kocasinan, Talas dahil) profesyonel asansörlü evden eve nakliyat hizmeti sunmaktadır. Pozantı ve Niğde güzergâhı üzerinden Kayseri'ye en hızlı ve hasarsız lojistik akışı sağlıyoruz. Uzman Eller Nakliyat güvencesiyle K3 belgeli kapalı kasa kamyonlarımız ve uzman personelimiz, Mersin'den Kayseri'ye taşınma sürecinizin sorunsuz geçmesi için tüm detayları yönetmektedir.",
    distanceText: "Mersin ile Kayseri arası karayolu mesafesi yaklaşık 335 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 1 gündür. Nakliye araçlarımızın iki şehir arasındaki sürüş süresi ortalama 4.5 saattir. Sabah saat 08:00'de Adana'daki dairenizde başlayan paketleme ve yükleme işlemleri öğle saatlerinde tamamlanır. Kamyonumuz öğleden sonra Kayseri'ye ulaşarak aynı gün içerisinde eşyalarınızın kurulumunu tamamlar.",
    routeText: "Mersin'den Kayseri'ye giden nakliye araçlarımız Pozantı otoyolunu kullanarak sırasıyla Mersin - Pozantı - Niğde - Yeşilhisar - Yahyalı - İncesu - Melikgazi hattını takip eder. Yolun büyük bölümü duble yol and otoyol kalitesindedir. Pozantı geçişindeki Toros dağ yollarında ve kış aylarında Niğde-Kayseri arasındaki yoğun kar yağışlı bölgelerde araçlarımızın sürüş güvenliği kurallarına azami derecede dikkat edilmektedir.",
    insuranceText: "Mersin Uzman Eller Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Mersin'den yüklendiği andan itibaren Kayseri'deki yeni adresinizde teslim edilene kadar oluşabilecek kaza, devrilme, yangın riskine karşı Anadolu Sigorta güvencesindedir. Sigorta poliçesi taşınma öncesinde adınıza düzenlenerek ıslak imzalı sözleşmeyle birlikte size teslim edilir.",
    tipsText: "Kayseri'ye taşınırken dikkat edilmesi gereken en kritik konu, özellikle kış aylarında yaşanan yoğun kar yağışı ve don olaylarıdır. Kış geçişlerinde Pozantı ve Niğde makaslarındaki buzlanmalara karşı tüm araçlarımızın kış lastiği, zincir and çekme halatı donanımları tam olarak sevk edilir. Ayrıca Kayseri Talas bölgesindeki yüksek katlı binalarda asansör kurulum açısı taşınma öncesinde kontrol edilmelidir.",
    faq: [
      { question: "Mersin Kayseri nakliyat kaç saat sürer?", answer: "İki şehir arası karayolu mesafesi ortalama 4.5 saattir. Yükleme ve montaj dahil süreç genellikle aynı gün içinde tamamlanır." },
      { question: "Talas ilçesine de asansör kuruyor musunuz?", answer: "Evet, Kayseri'nin Melikgazi, Kocasinan ve Talas ilçeleri dahil tüm bölgelerine asansörlü nakliye hizmeti sunuyoruz." },
      { question: "Fiyatlarınıza paketleme dahil midir?", answer: "Evet, tüm mobilya, beyaz eşya ve hassas eşyalarınızın çift kat ambalajlanması fiyat teklifimize dahildir." },
      { question: "Kayseri'den Mersin'e dönüş taşımaları yapıyor musunuz?", answer: "Evet, Kayseri-Mersin yönündeki geri dönüş seferlerimizde uygun fiyat avantajısıyla ev taşıma hizmeti sunmaktayız." },
      { question: "Hassas eşyalar için ek önlem alıyor musunuz?", answer: "Evet, kırılacak cam eşyalar ve elektronikler için özel koruyucu köpükler ve kalın koliler kullanarak paketleme yapıyoruz." },
      { question: "Sözleşme yapıyor musunuz?", answer: "Evet, taşıma öncesinde tüm şartları, fiyatı ve teslimat tarihini belirten resmi yazılı evden eve nakliyat sözleşmesi imzalıyoruz." }
    ]
  },
  {
    slug: 'mersin-bursa-evden-eve-nakliyat',
    city: 'Bursa',
    distanceKm: 840,
    durationHours: 10,
    viaRoute: 'O-21 Otoyolu, Eskişehir ve İnegöl geçişli kuzeybatı güzergâhı',
    notes: 'İnegöl geçişindeki yoğun mobilya lojistik trafiğine dikkat edilmelidir. Bursa merkezindeki dar tarihi sokaklar için mobil asansör desteği verilir.',
    introText: "Mersin Uzman Eller Nakliyat, Mersin'den Marmara Bölgesi'nin sanayi devlerinden Bursa'nın tüm ilçelerine (Nilüfer, Osmangazi, Yıldırım, Mudanya, İnegöl dahil) profesyonel asansörlü ve sigortalı evden eve nakliyat hizmeti vermektedir. 840 kilometrelik Bursa yolculuğunda eşyalarınızın zarar görmemesi için K3 yetki belgeli araç filomuz, tecrübeli şoförlerimiz ve kadrolu marangozlarımızla hizmetinizdeyiz. Sabit fiyat garantisiyle Mersin'den Bursa'ya taşınırken ek ücret sürprizi yaşamazsınız.",
    distanceText: "Mersin ile Bursa arası karayolu mesafesi yaklaşık 840 kilometredir ve ev eşyası taşımacılığında teslimat süresi ortalama 2 gündür. Nakliye kamyonlarımızın sürüş süresi ortalama 10 saattir. İlk gün Adana'da de-montaj, ambalajlama ve kamyona yükleme işlemleri tamamlanır ve kamyonumuz yola çıkar. Ertesi gün sabah saatlerinde Bursa'daki yeni adresinize ulaşan ekiplerimiz, asansör yardımıyla eşyaların dairenize taşınmasını gerçekleştirir.",
    routeText: "Mersin'den Bursa'ya giden nakliye araçlarımız Pozantı otoyolundan yola çıkarak sırasıyla Mersin - Pozantı - Niğde - Aksaray - Ankara - Eskişehir - Bozüyük - İnegöl - Bursa güzergâhını takip eder. Bu hat şehirlerarası nakliyat için en güvenli karayolu hattıdır. Özellikle İnegöl geçişindeki yoğun mobilya lojistik trafiğinde ve kış aylarındaki dağ geçişlerinde araç şoförlerimiz sürüş güvenliği kurallarına tam olarak uymaktadır.",
    insuranceText: "Mersin Uzman Eller Nakliyat şehirlerarası nakliyat seferlerinin tamamını Anadolu Sigorta güvencesiyle geniş kapsamlı emtia taşıma sigortası ile koruma altına almaktadır. Eşyalarınız Mersin'den yüklendiği andan itibaren Bursa'daki yeni evinize teslim edilip kurulana kadar yaşanabilecek tüm kaza, yangın, devrilme ve yol sarsıntı hasarlarına karşı Anadolu Sigorta güvencesiyle sigortalanır. Poliçe evrakı taşınma günü sabahı adınıza düzenlenerek size takdim edilir.",
    tipsText: "Bursa'ya taşınırken dikkat edilmesi gereken husus, özellikle Osmangazi ve Yıldırım gibi eski merkez ilçelerdeki dik yokuşlu sokaklar ve dar yerleşim yerleridir. Bu bölgelerde dış cephe nakliye asansörünün kurulabilmesi için sokak yapısının önceden analiz edilmesi önem taşır. Nilüfer gibi yeni yerleşim bölgelerinde ise site yönetimlerinin asansör kurulum alanlarına and yükleme saatlerine dair kuralları önceden öğrenilmelidir.",
    faq: [
      { question: "Mersin Bursa arası nakliyat kaç gün sürer?", answer: "Eşyaların yüklenmesi, yolculuk ve Bursa'da yeni adreste kurulup teslim edilmesi toplam 2 iş günü sürmektedir." },
      { question: "Nilüfer ve Mudanya ilçelerine hizmet veriyor musunuz?", answer: "Evet, Nilüfer, Osmangazi, Yıldırım, Mudanya, İnegöl, Gemlik dahil tüm Bursa ilçelerine taşıma yapıyoruz." },
      { question: "Bursa'da asansörlü nakliye yapıyor musunuz?", answer: "Evet, Bursa'daki yeni dairenizin balkon veya pencere açısı asansör kurulumuna uygunsa mobil asansör sistemimizi kuruyoruz." },
      { question: "Fiyatlarınıza gardırop montajı dahil midir?", answer: "Evet, gardırop ve yatakların sökümünü ve kurulumunu ek ücret almadan tamamlar." },
      { question: "Eşyaların zarar görmesi durumunda ne yapıyorsunuz?", answer: "Tüm taşımalarımız sigorta güvencesindedir. Herhangi bir hasar durumunda sigorta poliçesi kapsamında hasar tespiti yapılarak zararınız karşılanır." },
      { question: "Bursa'dan Mersin'e dönüş taşımacılığı yapıyor musunuz?", answer: "Evet, Bursa-Mersin yönünde de profesyonel evden eve nakliye ve uygun fiyatlı dönüş aracı seçenekleri sunuyoruz." }
    ]
  }
];

function generateRoutesFile() {
  const allRoutes = rawRoutes.map(route => {
    const prices = routePrices[route.slug];
    const p1_min = prices.min;
    
    // Formula to generate min/max dynamic prices based on 35 TL/km
    const baseKmPrice = Math.max(14500, Math.round((route.distanceKm * 35) / 500) * 500);
    const p1_min_str = baseKmPrice.toLocaleString('tr-TR');
    const p1_max_str = (baseKmPrice + 2000).toLocaleString('tr-TR');
    const p2_min_str = (baseKmPrice + 3000).toLocaleString('tr-TR');
    const p2_max_str = (baseKmPrice + 5500).toLocaleString('tr-TR');
    const p3_min_str = (baseKmPrice + 6000).toLocaleString('tr-TR');
    const p3_max_str = (baseKmPrice + 9000).toLocaleString('tr-TR');

    const pricingText = `Mersin ile ${route.city} arası nakliyat fiyatları Mersin Uzman Eller Nakliyat tarafından ${p1_min_str} TL'den başlayarak ve şehirlerarası mesafe bazında kilometre başına 35 TL üzerinden hesaplanmaktadır. ${route.city} taşımalarında mesafenin uzun olması nedeniyle yakıt maliyeti temel girdidir. Fiyat teklifimize K3 belgeli kapalı kasa nakliye kamyonu, profesyonel paketleme malzemeleri, de-montaj ve montaj hizmetleri, sigorta poliçesi ve asansör kurulumu dahildir. 1+1 daire taşıma fiyatı ${p1_min_str} TL ile ${p1_max_str} TL arasında değişirken; 2+1 daire taşıma ${p2_min_str} TL ile ${p2_max_str} TL, 3+1 daire taşıma ise ${p3_min_str} TL ile ${p3_max_str} TL arasında bütçelendirilir.`;

    return `  '${route.slug}': {
    slug: '${route.slug}',
    city: '${route.city}',
    distanceKm: ${route.distanceKm},
    durationHours: ${route.durationHours},
    priceRangeMin: ${prices.min},
    priceRangeMax: ${prices.max},
    viaRoute: '${route.viaRoute}',
    notes: '${route.notes}',
    introText: "${route.introText}",
    distanceText: "${route.distanceText}",
    pricingText: "${pricingText}",
    routeText: "${route.routeText}",
    insuranceText: "${route.insuranceText}",
    tipsText: "${route.tipsText}",
    faq: ${JSON.stringify(route.faq, null, 6)}
  }`;
  }).join(',\n');

  const fileContent = `export interface RouteData {
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
${allRoutes}
};
`;

  fs.writeFileSync(outputPath, fileContent, 'utf8');
  console.log('routes-data.ts regenerated successfully.');
}

generateRoutesFile();
