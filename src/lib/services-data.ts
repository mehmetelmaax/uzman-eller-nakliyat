export interface ServiceSection {
  icon: string;
  title: string;
  content: string;
}

export interface ServiceTable {
  headers: string[];
  rows: string[][];
}

export interface ServiceData {
  slug: string;
  name: string;
  title: string;
  description: string;
  introSubtitle: string;
  introParagraph: string;
  sections: ServiceSection[];
  table: ServiceTable | null;
  hasMatrix: boolean;
  faqs: { question: string; answer: string }[];
}

export const servicesDatabase: Record<string, ServiceData> = {
  "asansorlu-evden-eve-nakliyat": {
    "slug": "asansorlu-evden-eve-nakliyat",
    "name": "Asansörlü Evden Eve Nakliyat",
    "title": "Mersin Asansörlü Ev Taşıma | Uzman Eller Nakliyat",
    "description": "",
    "introSubtitle": "KAT YÜKSEKLİĞİ ÇÖZÜMLERİ",
    "introParagraph": "Yenişehir ve Mezitli ilçelerindeki yüksek katlı binalar için tasarlanan dış cephe mobil taşıma asansör sistemimiz.",
    "sections": [
      {
        "icon": "Shield",
        "title": "Asansörlü Ev Taşıma Hangi Kat Limitlerine Kadar Ulaşır?",
        "content": "Mersin Uzman Eller Nakliyat firmasının dış cephe mobil asansörleri maksimum {FACTS.maxFloor}. kat seviyesine kadar olan binalara eşya taşıma hizmeti vermektedir. Mobil dış cephe asansörü, yüksek katlı binalardaki eşyaların bina içi merdivenlere sokulmadan pencere veya balkondan nakliye aracına transfer edilmesini sağlayan teleskopik platform sistemidir. Dış cephe eşya asansörleri balkondan veya pencereden kurulur."
      },
      {
        "icon": "Shield",
        "title": "Asansörlü Nakliyat Kurulumu Hangi Avantajları Sağlar?",
        "content": "Mersin Uzman Eller Nakliyat asansörlü taşıma platformları, eşyaların bina merdiven boşluklarında darbe almasını, çizilmesini ve kırılmasını engellemektedir. Ayrıca, apartman sakinlerini rahatsız etmeden taşınma süresini ortalama yüzde 40 oranında kısaltarak zamandan tasarruf sağlar."
      }
    ],
    "table": {
      "headers": [
        "Hizmet Detayı",
        "Durum",
        "Açıklama"
      ],
      "rows": [
        [
          "Teleskopik Asansör Kurulumu",
          "Dahil",
          "Maksimum {FACTS.maxFloor}. kata kadar dış cephe erişimi"
        ],
        [
          "Emtia Taşıma Sigortası",
          "Dahil",
          "{FACTS.insurer} güvencesiyle hasar koruması"
        ],
        [
          "Mobil Jeneratör Gücü",
          "Dahil",
          "Elektrik kesintilerinden bağımsız çalışma kabiliyeti"
        ]
      ]
    },
    "hasMatrix": true,
    "faqs": []
  },
  "esya-depolama": {
    "slug": "esya-depolama",
    "name": "Eşya Depolama",
    "title": "Mersin Eşya Depolama Hizmeti | Uzman Eller Depolama",
    "description": "Mersin",
    "introSubtitle": "KİRALIK KONTEYNER DEPOLARI",
    "introParagraph": "Ev veya iş yeri eşyalarınızı, Mersin Yenişehir merkezli güvenlik kameralı, rutubetsiz, sigortalı ve kişiye özel kiralık konteyner depolarımızda güvenle saklıyoruz.",
    "sections": [
      {
        "icon": "Shield",
        "title": "Mersin Eşya Depolama Hizmetinin Yasal ve Fiziki Güvenceleri Nelerdir?",
        "content": "Mersin Uzman Eller Nakliyat, ev tadilatı, yurt dışı seyahatleri, evlilik öncesi çeyiz saklama veya fazla büro malzemelerinin muhafazası gibi ihtiyaçlara yönelik güvenli depolama çözümleri sunmaktadır. Emtia nakliyat sigortası, eşyaların taşıma ve depolama esnasında karşılaşabileceği kaza, yangın ve hırsızlık gibi riskleri yasal teminat altına alan poliçe türüdür. Ekspertiz süreci, depolanacak eşyaların hacminin yerinde incelenerek bütçe ve konteyner boyutu tespiti yapılması sürecidir. Depolanacak tüm mobilya ve beyaz eşyalarınız, tecrübeli ambalajlama Mersin Uzman Eller Nakliyat ekipleri tarafından de-monte edildikten sonra neme dayanıklı özel saklama naylonlarıyla paketlenir. Ardından kişiye özel tahsis edilen anahtarlı çelik konteyner depolarımıza yerleştirilir."
      },
      {
        "icon": "Shield",
        "title": "Farklı Eşya Yoğunlukları İçin Sunulan Konteyner Depo Ölçüleri Nelerdir?",
        "content": "Mersin Uzman Eller Nakliyat kiralık depo ücretleri, eşyaların toplam hacmine göre mini, orta ve büyük boy konteyner hacimlerine bölünerek fiyatlandırılır. Tesislerimizde yer alan standart konteyner depo seçenekleri ve kapasiteleri şu şekildedir:"
      },
      {
        "icon": "Shield",
        "title": "Kiralık Nakliye Depolarında Nem ve Rutubet Koruması Nasıl Sağlanır?",
        "content": "Mersin Uzman Eller Nakliyat depolama tesisleri, Akdeniz ikliminin yüksek nem oranlarına karşı klima ve nem alma üniteleri ile sürekli havalandırılmaktadır. Eşyaların aylarca depoda kapalı kalması durumunda ahşap kısımlarının küflenmemesi ve beyaz eşyaların elektronik kartlarının bozulmaması için sıcaklık ve nem yalıtımı hayati önem taşır. Zeminler ve tavan kısımları ısı yalıtımlı poliüretan kaplamalardan oluşmaktadır. Ayrıca depolarımızda böcek, kemirgen ve diğer haşerelere karşı her ay periyodik ilaçlama yapılmaktadır."
      },
      {
        "icon": "Shield",
        "title": "Eşya Depolama Sürecinde Giriş ve Çıkış Prosedürleri Nasıl İşler?",
        "content": "Mersin Uzman Eller Nakliyat barkodlu depo yönetim sistemi sayesinde, giriş ve çıkış işlemlerinde her aşama yasal tutanaklarla belgelenmektedir. Eşyaların eksiksiz ve güvenle depolanması için giriş ve çıkış işlemlerinde şu yasal adımları uyguluyoruz:"
      },
      {
        "icon": "Shield",
        "title": "Kurumsal Şirketler İçin Ofis ve Arşiv Depolama Çözümleri Neleri Kapsar?",
        "content": "Mersin Uzman Eller Nakliyat kurumsal depolama tesisleri, firmaların arşiv klasörleri, ticari evrakları ve ofis mobilyaları için özel kilitli arşiv bölmeleri içermektedir. Kurumsal müşterilerimiz için hazırladığımız özel güvenlikli arşiv depoları, yasal saklama süreleri boyunca belgelerinizin nem almadan ve kaybolmadan korunmasını sağlar. Barkodlama sistemimiz sayesinde dilediğiniz klasör grubuna dilediğiniz an hızlıca erişim sağlayabilir, yetkilendirdiğiniz personeliniz aracılığıyla teslim alabilirsiniz."
      },
      {
        "icon": "Shield",
        "title": "Kiralık Eşya Depolarında Saklanması Yasak Olan Maddeler Nelerdir?",
        "content": "Mersin Uzman Eller Nakliyat depolarında saklanması yasak olan maddeler, kimyasal ve yanıcı materyallerin yol açabileceği yangın riskini önlemek için sıkı kurallara tabidir. Tüm müşterilerimizin eşyalarının güvenliğini ve hijyenini en üst seviyede tutmak adına depolarımızda bazı maddelerin saklanması kesinlikle yasaktır: akaryakıt, tiner, boya, tüp, bozulabilir gıdalar ve yasal ruhsatı bulunmayan tüm patlayıcı ve tehlikeli emtialar bu yasak kapsamındadır."
      },
      {
        "icon": "Shield",
        "title": "Depolanan Eşyalara Erişim Koşulları ve Ziyaret Saatleri Nasıl Düzenlenir?",
        "content": "Mersin Uzman Eller Nakliyat depolarında saklanan eşyalara erişim yetkilendirilmiş hesap sahibinin kimlik ibrazı ve depo anahtarı eşliğinde gerçekleşmektedir. Güvenlik protokollerimiz gereği, depolara giriş yapabilmeniz için en az 24 saat önceden müşteri temsilcilerimizi arayarak ziyaret randevusu oluşturmanız gerekmektedir. Ziyaret sırasında kimlik ibrazı ve depo anahtarınızın yanınızda olması yasal olarak zorunludur. Randevusuz gelen kişilerin depo alanlarına girmesine izin verilmemektedir."
      }
    ],
    "table": {
      "headers": [
        "Depo Tipi",
        "Boyutlar (En x Boy x Yükseklik)",
        "Hacim (m³)",
        "En Uygun Kullanım Alanı"
      ],
      "rows": [
        [
          "Mini Boy Konteyner",
          "1.5m x 1.5m x 2.2m",
          "5 m³",
          "Tek oda eşyası, çeyiz kolileri, arşiv belgeleri"
        ],
        [
          "Orta Boy Konteyner",
          "3.0m x 2.2m x 2.2m",
          "15 m³",
          "1+1 veya standart 2+1 daire eşyalarının tamamı"
        ],
        [
          "Büyük Boy Konteyner",
          "6.0m x 2.4m x 2.4m",
          "30 m³",
          "3+1, 4+1 daire veya büyük ofis arşiv ve mobilyaları"
        ]
      ]
    },
    "hasMatrix": false,
    "faqs": [
      {
        "question": "Kiralık eşya depoları güvenli midir ve nasıl korunur?",
        "answer": "Depolarımız 24 saat kesintisiz olarak aktif yüksek çözünürlüklü güvenlik kameraları (CCTV) ve lisanslı fiziki güvenlik personeli tarafından titizlikle korunmaktadır. Ayrıca tüm alanlarımız emniyet güçleriyle entegre çalışan akıllı yangın, duman ve hırsızlık alarm sistemlerine bağlıdır."
      },
      {
        "question": "Nem ve rutubete karşı depolarda ne tür önlemler alınıyor?",
        "answer": "Depolama alanlarımız endüstriyel nem alma üniteleri ile sürekli havalandırılmakta ve hava sirkülasyonu sağlanmaktadır. Zeminler ve duvarlar rutubet yalıtımlı özel poliüretan malzemelerle kaplanarak ahşap mobilyalarınızın ve beyaz eşyalarınızın küflenmesi, paslanması kesinlikle engellenmektedir."
      },
      {
        "question": "Depolama sürecinde haşere ve böcek ilaçlaması yapılıyor mu?",
        "answer": "Evet. Depolama tesislerimizin tamamı her ay periyodik olarak profesyonel çevre sağlığı ekipleri tarafından haşere, böcek, uçan haşereler ve kemirgenlere karşı hijyenik ve çevre dostu ilaçlama yöntemleriyle ilaçlanmaktadır."
      },
      {
        "question": "Minimum depolama kiralama süresi ne kadardır?",
        "answer": "Minimum kiralama süremiz 1 (bir) aydır. Eşyalarınızı dilediğiniz ay kadar güvenli tesislerimizde depolayabilir, süre uzatımlarını veya depo teslim alma tarihlerinizi 1 hafta öncesinden bildirebilirsiniz."
      },
      {
        "question": "Depodaki eşyalar için sigorta yapılıyor mu?",
        "answer": "Evet. Depoladığımız tüm eşyalar, akredite sigorta şirketlerimiz aracılığıyla düzenlenen poliçe bedeli kapsamında yangın, sel, su baskını, deprem ve hırsızlık risklerine karşı ücretsiz emtia depolama sigortası kapsamına alınmaktadır."
      },
      {
        "question": "Depoya eşya teslim ederken veya geri alırken prosedür nasıldır?",
        "answer": "Giriş ve çıkışlarda tüm eşyalarınız fotoğraflı ve yazılı olarak barkodlu bir şekilde listelenir, eşyaların genel kondisyonu not edilir ve karşılıklı yasal teslim tutanağı imzalandıktan sonra güvenli depomuza yerleştirilir."
      }
    ]
  },
  "ofis-ve-isyeri-tasimaciligi": {
    "slug": "ofis-ve-isyeri-tasimaciligi",
    "name": "Ofis ve İşyeri Taşımacılığı",
    "title": "Mersin Ofis ve İşyeri Taşıma | Uzman Eller Nakliyat",
    "description": "Mersin",
    "introSubtitle": "KURUMSAL LOJİSTİK ÇÖZÜMLERİ",
    "introParagraph": "İş kesintisi ve veri kaybı riskini ortadan kaldıran, planlı ve etiketli kurumsal taşıma çözümleri.",
    "sections": [
      {
        "icon": "Shield",
        "title": "Kurumsal Ofis Taşıma Süreci Nasıl Planlanır?",
        "content": "Mersin Uzman Eller Nakliyat kurumsal ofis taşımacılığı işlemlerinde, tüm arşiv ve donanımlar numaralandırılmış 1 etiket sistemiyle sınıflandırılarak kolilenmektedir. Bu numaralandırma sistemi sayesinde, yeni ofiste hangi kutunun hangi masaya yerleştirileceği önceden planlanır ve iş gücü kaybı önlenir. Ekspertiz, taşınma öncesinde eşya hacmi, kat durumu ve asansör gereksinimlerinin yerinde incelenerek net bütçenin belirlenmesi sürecidir."
      },
      {
        "icon": "Shield",
        "title": "Ofis Taşınmalarında Asansör Kullanımı Neden Önemlidir?",
        "content": "K3 Yetki Belgesi, ev ve ofis eşyalarının ticari araçlarla karayolunda taşınması için Ulaştırma Bakanlığı tarafından zorunlu kılınan yasal yetki belgesidir. Mersin Uzman Eller Nakliyat ofis taşımacılığında dış cephe eşya asansörlerinin kullanılması, hacimli büro mobilyalarının ve ağır dosya dolaplarının dar plaza koridorlarından veya merdivenlerden hasarsız geçirilmesini sağlar. Mobil dış cephe asansörü, yüksek katlı binalardaki eşyaların bina içi merdivenlere sokulmadan pencere veya balkondan nakliye aracına transfer edilmesini sağlayan teleskopik platform sistemidir. Mobil asansörler {FACTS.maxFloor}. kata kadar plazaların ve ticari iş merkezlerinin dış cephesine kurularak doğrudan taşıma kamyonuna yükleme yapar."
      }
    ],
    "table": {
      "headers": [
        "Ofis Taşıma Hizmet Kapsamı",
        "Durum"
      ],
      "rows": [
        [
          "Ofis mobilyalarının demontaj ve montajı",
          "Dahil"
        ],
        [
          "Çift katlı balonlu naylon ile paketleme",
          "Dahil"
        ],
        [
          "Arşivlerin numaralı kutulara yerleştirilmesi",
          "Dahil"
        ],
        [
          "Sunucu (Server) kurulumu ve IT yapılandırması",
          "Hariç"
        ]
      ]
    },
    "hasMatrix": true,
    "faqs": []
  },
  "parca-esya-tasima": {
    "slug": "parca-esya-tasima",
    "name": "Parça Eşya Taşıma",
    "title": "Mersin Parça Eşya Taşıma | Uzman Eller Nakliyat",
    "description": "Mersin",
    "introSubtitle": "HIZLI KAMYONET & PARSİYEL TAŞIMA",
    "introParagraph": "Tek bir buzdolabından öğrenci evi eşyalarına, tekli koltuktan az sayıda koliye kadar tüm parça eşyalarınızı kapalı kasa kamyonetlerimizle uygun fiyatlara hizmet vermektedir.",
    "sections": [
      {
        "icon": "Shield",
        "title": "Ekonomik Parça Eşya Taşıma Çözümleri Nedir?",
        "content": "Tüm evi taşımak yerine sadece belirli odaların veya tekil eşyaların nakledilmesi gerektiğinde, komple nakliye kamyonu kiralamak gereksiz yüksek maliyetler yaratır. Uzman Eller Nakliyat olarak, Mersin genelinde parça eşya taşıma hizmetimizle müşterilerimize bütçe dostu alternatifler sunmaktadır. Kendi filomuzda yer alan küçük şasili 3.5 tonluk panelvan ve kamyonet araçlarımızla, az miktardaki eşyalarınızı şehir içi dar sokaklarda bile trafiğe takılmadan hızlıca hizmet vermektedir. Şehirlerarası parça gönderimlerinizde ise aynı güzergaha giden diğer müşterilerimizin eşyalarıyla birleştirerek (parsiyel taşımacılık) yol maliyetini bölüşmenizi hizmet vermektedir."
      },
      {
        "icon": "Shield",
        "title": "Sıkça Karşılaşılan Parça Taşıma Senaryoları Nedir?",
        "content": "Firmamız, Mersin Yenişehir ve Mezitli başta olmak üzere her türlü kısmi eşya taşıma ihtiyacınıza özel araç ve ekip sağlamaktadır. En sık hizmet verdiğimiz senaryolar şunlardır:"
      },
      {
        "icon": "Shield",
        "title": "Parça Eşya Taşırken Hasarsızlık Garantisi Nedir?",
        "content": "Az sayıda eşyanın taşınması, onların değersiz olduğu anlamına gelmez. Uzman Eller Nakliyat olarak, parça taşıma operasyonlarında da komple ev taşıma standartlarımızı harfiyen uyguluyoruz. Taşınacak beyaz eşyanız veya mobilyanız, darbe emici kalın hava kabarcıklı balonlu patpat naylonlarla sarılır, köşeleri koruyucu mukavemet bantlarıyla sabitlenir. Kamyonet kasasına yerleştirilirken diğer eşyalara sürtünmemesi ve yoldaki sarsıntılardan etkilenmemesi için araç içi sabitleme kayışlarıyla (spatula) bağlanır. Tüm transferlerimiz yasal K3 yetki belgemize kayıtlı kapalı kasa araçlarımızla, faturalı ve sigortalı olarak yapılır."
      },
      {
        "icon": "Shield",
        "title": "Şehirlerarası Parsiyel Eşya Nakliyatı Nedir?",
        "content": "Mersin Uzman Eller Nakliyat, Mersin'den Türkiye'nin diğer illerine az sayıda eşya göndermek istediğinizde parsiyel taşımacılık hizmetimiz devreye girer. Haftalık olarak İstanbul, Ankara, İzmir, Bursa, Antalya gibi büyükşehirlere sefer düzenleyen geniş hacimli nakliyat tırlarımız, aynı güzergah üzerindeki parça eşyaları belirli bir plan çerçevesinde toplar. Eşyalarınız kasada diğer müşterilerin eşyalarıyla karışmaması için ara bölmelerle ayrılır ve teslimat sırasında listeye göre teker teker indirilerek yerinde kurulumu yapılır. Bu sayede tüm yol masrafları (yakıt, köprü geçişleri) bölündüğü için nakliye ücretiniz yarı yarıya düşmektedir."
      },
      {
        "icon": "Shield",
        "title": "Sahibinden Kamyonet Kiralama ile Profesyonel Hizmet Farkı Nedir?",
        "content": "Mersin Uzman Eller Nakliyat güvencesi olmadan, tüketicilerin bir kısmı parça eşyalarını taşımak için internetten veya sanayi sitelerinden şoförlü kamyonet kiralamayı tercih etmektedir. Ancak bu durum genellikle hasar ve yasal sorunlara yol açar. Kiralık kamyonet şoförleri eşya taşımaya, ambalajlamaya ve de-montaj işlemlerine yardımcı olmazlar, sadece aracı sürerler. Eşyaları merdivenden indirmek, sarmak ve araca yüklemek tamamen size kalır. Oysa Uzman Eller Nakliyat parça eşya hizmetinde kendi kadrolu taşıma personeli, marangoz ustası, ambalaj malzemeleri ve mobil dış cephe asansörüyle birlikte gelerek anahtar teslim taşımacılık gerçekleştirir."
      },
      {
        "icon": "Shield",
        "title": "Kısmi ve Parça Eşya Taşıma Sigorta Şartları Nedir?",
        "content": "Az miktarda eşya taşınsa dahi yolda oluşabilecek kaza, devrilme veya yangın gibi risklere karşı güvence altında olmanız gerekir. Uzman Eller Nakliyat olarak, parça eşya taşıma işlemlerimizin tamamında nakliye sigortasını standart olarak yapmaktayız. Taşınma öncesinde eşyanızın cinsi ve tahmini piyasa değeri tespit edilerek poliçeye işlenir. Yolculuk esnasında meydana gelebilecek hasarlar sigorta acentemiz tarafından karşılanır. Güvenliğiniz ve memnuniyetiniz bizim için her zaman ön plandadır."
      }
    ],
    "table": null,
    "hasMatrix": true,
    "faqs": [
      {
        "question": "Parça eşya taşıma fiyatları nasıl belirlenir?",
        "answer": "Parça eşya taşıma fiyatları taşınacak eşyaların kaplayacağı hacme (kasa payına), yükleneceği ve teslim edileceği dairelerin kat durumlarına, asansör ihtiyacına ve adresler arası yol mesafesine göre hesaplanır. Komple ev taşıma maliyetine kıyasla son derece bütçe dostudur."
      },
      {
        "question": "Öğrenci evi veya bekar evi için asansörlü araç gönderiyor musunuz?",
        "answer": "Evet. Taşınacak parça eşyaların bulunduğu veya teslim edileceği daireler yüksek kattaysa ve bina yönetimi yük taşımaya izin vermiyorsa, parça taşıma işlemleriniz için de mobil dış cephe asansörlerimizi aktif şekilde kuruyoruz."
      },
      {
        "question": "Tek bir buzdolabı veya çamaşır makinesi için nakliye hizmetiniz var mı?",
        "answer": "Evet. Tek parça beyaz eşya, koltuk takımı, gardırop veya sadece birkaç koli gibi tekil eşyalarınız için küçük kapalı kasa kamyonetlerimizle şehir içi trafikte pratik, güvenli ve son derece hızlı nakliye çözümleri sunmaktadır."
      },
      {
        "question": "Şehirlerarası parça eşya taşıma yapıyor musunuz?",
        "answer": "Evet. Mersin merkezli Yenişehir garajımızdan Ankara, İstanbul, İzmir, Bursa ve diğer tüm şehirlere düzenli olarak sefer yapan parsiyel taşıma tırlarımızla, tekil eşyalarınızı çok uygun ve avantajlı maliyetlerle adrese teslim gönderiyoruz."
      },
      {
        "question": "Parça eşyaların ambalajlanması ve marangozluğu fiyata dahil midir?",
        "answer": "Evet. Taşıdığımız parça eşyaların yolculuk esnasında çizilmemesi ve hasar görmemesi için balonlu ambalaj patpatlarıyla sarılması ile dolap/ünite gibi de-montaj gerektiren mobilyaların marangoz ustamızca yapılması fiyata dahildir."
      },
      {
        "question": "Taşıma gününden kaç gün önce rezervasyon yaptırmalıyım?",
        "answer": "Özellikle şehirlerarası parça taşıma ve parsiyel gönderim taleplerinde araç koordinasyonu ve sefer planlaması yapabilmemiz için taşınma tarihinden en az 4-5 gün önce bizimle iletişime geçip yerinizi rezerve etmenizi öneririz."
      }
    ]
  },
  "piyano-ve-kasa-tasima": {
    "slug": "piyano-ve-kasa-tasima",
    "name": "Piyano ve Kasa Taşıma",
    "title": "Mersin Piyano ve Kasa Taşıma | Uzman Eller Nakliyat",
    "description": "Mersin",
    "introSubtitle": "AĞIR YÜK VE DEĞERLİ EŞYA TAŞIMACILIĞI",
    "introParagraph": "Kuyruklu piyanolar, ağır çelik para kasaları, dev akvaryumlar, tarihi antika mobilyalar ve değerli sanat eserlerinizi özel donanımlı askı takımları ve transpaletlerle hasarsız hizmet vermektedir.",
    "sections": [
      {
        "icon": "Shield",
        "title": "Ağır Yük ve Hassas Eşya Taşıma Uzmanlığı Nedir?",
        "content": "Ev veya iş yerlerindeki standart mobilyaların dışındaki ağır ve değerli eşyaların taşınması, sıradan nakliye yöntemleriyle kesinlikle yapılmamalıdır. Yüzlerce kilogram ağırlığa sahip çelik kasalar veya hassas mekanik aksamı olan piyanoların taşınması hem ciddi fiziki güç hem de profesyonel ekipman (kızaklar, transpaletler, vinç sistemleri, liftli araçlar) gerektirir. Uzman Eller Nakliyat olarak, Mersin genelinde kurduğumuz özel ağır yük taşıma ekibimizle, piyanolarınızı ve çelik kasalarınızı milimetrik hesaplamalar ve tam güvenlik tedbirleri altında yeni adresine hasarsız ulaştırıyoruz."
      },
      {
        "icon": "Shield",
        "title": "Hizmet Verdiğimiz Özel ve Ağır Eşya Kategorileri Nedir?",
        "content": "Özel eğitimli Mersin Uzman Eller Nakliyat ekipleri ve teknik donanımımızla taşımasını gerçekleştirdiğimiz değerli ve ağır eşya grupları şunlardır:"
      },
      {
        "icon": "Shield",
        "title": "Ağır Eşya Taşırken Karşılaşılan Riskler ve Çözümlerimiz Nedir?",
        "content": "Ağır ve özel yük taşımacılığında en sık karşılaşılan risk, eşyanın düşürülmesi, merdiven mermerlerinin kırılması, daire kapı kasalarının çizilmesi veya bina asansörünün halat koparmasıdır. Bu riskleri sıfıra indirmek adına bina içi ortak alan asansörlerini kesinlikle ağır yükler için kullanmıyoruz. Bunun yerine bina dış cephesine kurduğumuz 400 kg taşıma kapasiteli mobil teleskopik yük asansörlerimizi veya vinç sistemlerini kullanıyoruz. Eşyanın taşınacağı koridor ve zeminler, tekerlek izi ve çizilmeleri önlemek adına kalın sunta levhalar ve kauçuk koruyucu örtülerle kaplanır. Taşıma öncesinde yaptığımız tüm bu hazırlıklar, operasyonumuzun hasarsız geçmesini garanti eder."
      },
      {
        "icon": "Shield",
        "title": "Piyano Taşımacılığı Sonrası Akort ve Bakım Süreci Nedir?",
        "content": "Piyanolar, son derece hassas ahşap, çelik tel ve keçe mekanizmalarına sahip enstrümanlardır. Taşınma esnasında ne kadar sarsıntısız ve askılı sistemlerle taşınsa dahi, ortamdaki nem oranı, sıcaklık değişimi ve taşınma hareketi piyanoların akort ayarlarının bozulmasına yol açar. Bu nedenle piyanonuz yeni yerine taşındıktan sonra akort ayarının hemen yapılması doğru değildir. Piyanonun yeni odanın nem ve hava koşullarına uyum sağlayabilmesi için en az 10-15 gün beklenmesi ve ardından profesyonel bir akort ustası (tuner) tarafından kalibre edilmesi gerekmektedir."
      },
      {
        "icon": "Shield",
        "title": "Ağır Kasa Taşımacılığında Zemin Koruma Önlemleri Nedir?",
        "content": "300 kg ile 800 kg arasında değişen çelik kasaların taşınması sırasında en büyük risk bina içi koridor zeminlerinin, mermerlerin ve laminat parkelerin ezilmesi, kırılması veya derin çiziklerle hasar görmesidir. Uzman Eller Nakliyat olarak, ağır kasa taşımacılığında zeminleri korumak amacıyla taşıma güzergahının tamamına kalın kauçuk zemin matları ve özel dağıtıcı kontrplak levhalar yerleştiriyoruz. Kasa bu levhalar üzerinde hidrolik transpaletler yardımıyla kaydırılarak taşındığı için bina zeminlerine ve daire içi laminat parkelere sıfır baskı uygulanır ve çizilmelerin önüne kesin olarak geçilir."
      },
      {
        "icon": "Shield",
        "title": "Sanat Eseri, Sergi ve Galeri Lojistiği Nedir?",
        "content": "Mersin Uzman Eller Nakliyat, Müzeler, sanat galerileri ve kişisel koleksiyoncular için resim tabloları, heykeller ve antikaların taşınması yüksek hassasiyet gerektirir. Bu tarz eserlerin nakliyesinde iklimlendirmeli (ısı ve nem ayarlı) kapalı kasa araçlar kullanmaktayız. Eserlerin ambalajlanmasında doğrudan asitsiz müzecilik kağıtları ve darbeleri yutan özel şok emici polietilen köpükler tercih edilmektedir. Taşınma süreci baştan sona özel sigorta poliçesiyle korunarak uzman gözetiminde tamamlanır."
      }
    ],
    "table": null,
    "hasMatrix": true,
    "faqs": [
      {
        "question": "Kuyruklu veya duvar piyanolarını taşırken nasıl önlemler alıyorsunuz?",
        "answer": "Piyanoları kalın koruyucu kadife keçeler ve çizilmeyi önleyici balonlu naylon ambalaj malzemeleriyle sarıyoruz. Taşımada özel yapım piyano askı takımları, kaydırmaz tekerlekli kızaklar ve merdiven tırmanıcı özel transpalet aparatları kullanıyoruz."
      },
      {
        "question": "Çelik para kasası taşımacılığı kaç personel ile yapılıyor?",
        "answer": "Para kasasının ağırlığına bağlı olarak (200 kg ile 800 kg arası değişen kasa tipleri için) özel hidrolik transpaletler, liftli araçlarımız ve ağır yük taşıma alanında uzmanlaşmış en az 4 ile 6 kişilik profesyonel taşıma ekibi görevlendirilir."
      },
      {
        "question": "Dev boyutlu ev akvaryumlarını da taşıyor musunuz?",
        "answer": "Evet. Kalın camlı, ağır tonajlı büyük ev akvaryumlarının de-montajını yapıyor, taşınırken çatlama ve esneme risklerini sıfırlayan vakumlu endüstriyel vantuzlar ve özel ahşap palet destekleri yardımıyla hizmet vermektedir."
      },
      {
        "question": "Antika mobilya ve sanat eserlerinin ambalajlama standardı nasıldır?",
        "answer": "Antika ve tarihi eserler sıradan patpat ambalajlarla taşınmaz. Asitsiz ipek beyaz kağıt korumasından sonra kalın strafor köpük levhalar ve en dış katmanda darbelere karşı koruyucu ahşap sandıklar (crating) üreterek hizmet vermektedir."
      },
      {
        "question": "Piyano ve kasa taşıma hizmeti sigorta kapsamında mıdır?",
        "answer": "Evet. Uzman Eller Nakliyat bünyesinde taşıdığımız her değerli ve ağır enstrüman/kasayı, taşınma öncesinde eşyanın net beyan edilen güncel piyasa değerine göre özel emtia sigortası kapsamına alarak yola çıkarıyoruz."
      },
      {
        "question": "Ağır eşya taşıma fiyatları nasıl hesaplanmaktadır?",
        "answer": "Eşyanın net kilogram ağırlığına, taşınacağı katların seviyesine (asansör açısı veya kaç kat merdiven kullanılacağı), adresler arası mesafeye ve kullanılacak vinç/lift gibi ek lojistik ekipman ihtiyaçlarına göre belirlenir."
      }
    ]
  },
  "profesyonel-esya-paketleme": {
    "slug": "profesyonel-esya-paketleme",
    "name": "Profesyonel Eşya Paketleme",
    "title": "Profesyonel Eşya Paketleme Hizmeti | Uzman Eller Nakliyat",
    "description": "Mersin",
    "introSubtitle": "SIFIR HASAR HEDEFİ",
    "introParagraph": "Eşyalarınızın yolda darbe almasını engelleyen, Kraft karton ve hava kabarcıklı ambalajlama standartlarımız.",
    "sections": [
      {
        "icon": "Shield",
        "title": "Ev Taşırken Paketlemede Hangi Ambalaj Malzemeleri Kullanılır?",
        "content": "Mersin Uzman Eller Nakliyat ambalajlama işlemlerinde kalın patpat olarak adlandırılan çift katlı balonlu naylonlar, Kraft koruma kağıtları ve 5 katmanlı oluklu mukavva koliler kullanmaktadır. Bu özel malzemeler, beyaz eşya saclarının çizilmesini ve ahşap mobilya köşelerinin ezilmesini engeller."
      },
      {
        "icon": "Shield",
        "title": "Elbise ve Kıyafetlerin Taşınma Standardı Nedir?",
        "content": "Mersin Uzman Eller Nakliyat, Kıyafetlerin kırışmadan taşınması amacıyla nakliye ekiplerimiz adresinize portatif askılı koli dolaplar getirmektedir. Takım elbise, abiye ve ceket gibi hassas kıyafetleriniz kendi askılarıyla birlikte bu kilitli dolapların içine asılarak ütüsü bozulmadan taşınır."
      }
    ],
    "table": null,
    "hasMatrix": true,
    "faqs": []
  },
  "sehirici-evden-eve-nakliyat": {
    "slug": "sehirici-evden-eve-nakliyat",
    "name": "Şehiriçi Evden Eve Nakliyat",
    "title": "Mersin Şehir İçi Ev Taşıma | Uzman Eller Nakliyat",
    "description": "Mersin merkez ilçelerinde aynı gün içinde asansörlü, sigortalı ve marangoz montaj dahil şehir içi evden eve nakliyat hizmeti. Hemen sabit fiyat alın.",
    "introSubtitle": "AYNI GÜN HIZLI TESLİMAT",
    "introParagraph": "Yenişehir, Mezitli, Toroslar ve Akdeniz başta olmak üzere Mersin içi sorunsuz ev taşıma çözümleri.",
    "sections": [
      {
        "icon": "Shield",
        "title": "Şehir İçi Ev Taşıma Süresi Kaç Saattir?",
        "content": "Mersin Uzman Eller Nakliyat şehir içi taşımaları {FACTS.cityMoveHours} saatte tamamlanır. Sabah saat 08:00'de başlayan demontaj ve paketleme işlemleri, öğleden sonra asansörlü yükleme ve yeni eve montaj aşamalarıyla aynı gün içinde sonuçlanır. Demontaj, gardırop ve yatak odası takımı gibi büyük mobilyaların taşınabilir parçalara ayrılması işlemidir."
      },
      {
        "icon": "Shield",
        "title": "Yenişehir ve Mezitli Arası Taşıma Fiyatı Nasıl Belirlenir?",
        "content": "Yenişehir ve Mezitli arasındaki 1 ev taşıma fiyatı, dairenizin oda sayısına, binaların kat yüksekliklerine ve asansör kurulum durumlarına göre belirlenmektedir. Kat yüksekliği arttıkça işçilik ve dış cephe asansör kurulum maliyeti toplam fiyata yansıtılır."
      }
    ],
    "table": {
      "headers": [
        "Oda Sayısı",
        "Tahmini Fiyat Aralığı"
      ],
      "rows": [
        [
          "1+1 Şehir İçi Taşıma",
          "{FACTS.priceMin.toLocaleString('tr-TR')} TL - 21.000 TL"
        ],
        [
          "2+1 Şehir İçi Taşıma",
          "21.000 TL - 20.000 TL"
        ],
        [
          "3+1 Şehir İçi Taşıma",
          "21.000 TL - {FACTS.priceMax.toLocaleString('tr-TR')} TL"
        ]
      ]
    },
    "hasMatrix": true,
    "faqs": []
  },
  "sehirlerarasi-evden-eve-nakliyat": {
    "slug": "sehirlerarasi-evden-eve-nakliyat",
    "name": "Şehirlerarası Evden Eve Nakliyat",
    "title": "Mersin Şehirlerarası Ev Taşıma | Uzman Eller Nakliyat",
    "description": "Mersin",
    "introSubtitle": "TÜRKİYE GENELİ LOJİSTİK",
    "introParagraph": "Mersin'den 81 ile emtia nakliyat sigortalı ve marangoz montaj dahil yasal şehirlerarası eşya taşımacılığı.",
    "sections": [
      {
        "icon": "Shield",
        "title": "Şehirlerarası Ev Taşıma Sigortası Neleri Kapsar?",
        "content": "Mersin Uzman Eller Nakliyat şehirlerarası ev taşıma hizmetlerinde, eşyalarınızın tamamı {FACTS.insurer} emtia nakliyat sigortasıyla yangın, kaza ve doğal afet hasarlarına karşı güvence altına alınmaktadır. Emtia nakliyat sigortası, eşyaların taşıma esnasında karşılaşabileceği kaza, yangın ve hırsızlık gibi riskleri yasal teminat altına alan poliçe türüdür. Bu sigorta poliçesi, kamyonun seyir halindeyken karşılaşabileceği fiziksel hasarları yasal olarak tazmin eder."
      },
      {
        "icon": "Shield",
        "title": "Sıkça Hizmet Verdiğimiz Şehirlerarası Nakliyat Rotaları Nelerdir?",
        "content": "Mersin Uzman Eller Nakliyat merkezli olarak Türkiye genelinde en çok sefer düzenlediğimiz popüler şehirlerarası 81 il nakliyat hatlarımızı aşağıda bulabilirsiniz. İlgili bağlantılara tıklayarak rota detayları, kilometre mesafeleri, sürüş süreleri ve güncel fiyat listelerine erişebilirsiniz:"
      }
    ],
    "table": {
      "headers": [
        "Şehirlerarası Nakliyat Hizmet Kapsamı",
        "Durum"
      ],
      "rows": [
        [
          "Şehirlerarası Yolda Emtia Nakliyat Sigortası",
          "Dahil"
        ],
        [
          "Köprü ve Otoyol Geçiş Ücretleri",
          "Dahil"
        ],
        [
          "Mobilya Demontaj ve Yeni Evde Kurulum",
          "Dahil"
        ],
        [
          "Yeni Eve Avize ve Korniş Montajı",
          "Hariç"
        ]
      ]
    },
    "hasMatrix": true,
    "faqs": []
  },
  "ucretsiz-ekspertiz": {
    "slug": "ucretsiz-ekspertiz",
    "name": "Ücretsiz Ekspertiz",
    "title": "Ücretsiz Ekspertiz Hizmeti | Uzman Eller Nakliyat",
    "description": "Mersin",
    "introSubtitle": "DOĞRU MALİYET PLANLAMASI",
    "introParagraph": "Taşınma gününde sürpriz masraflarla karşılaşmamanız için sunduğumuz yerinde ve dijital keşif analizimiz.",
    "sections": [
      {
        "icon": "Shield",
        "title": "Nakliye Ekspertiz Raporu Neden Önemlidir?",
        "content": "Mersin Uzman Eller Nakliyat firmasının ücretsiz ekspertiz hizmeti, taşınma gününde eşyalarınızın kamyona sığmaması veya ek ücret talep edilmesi gibi riskleri ortadan kaldırmaktadır. Ekspertiz sırasında eşya hacmi, gereken ambalaj malzemesi miktarı, çalışacak personel sayısı ve asansör şasisi açısı net olarak raporlanır."
      },
      {
        "icon": "Shield",
        "title": "Görüntülü Ekspertiz Nasıl Yapılır?",
        "content": "Mersin Uzman Eller Nakliyat, Yerinde keşif imkanı bulunmayan durumlarda, WhatsApp veya benzeri kanallar üzerinden görüntülü ekspertiz hizmeti vermekteyiz. Odalarınızı, gardırop içlerini ve binanızın dış cephe cephesini görüntülü arama ile ekiplerimize göstererek kısa sürede yazılı fiyat teklifi alabilirsiniz."
      }
    ],
    "table": null,
    "hasMatrix": true,
    "faqs": []
  }
};
