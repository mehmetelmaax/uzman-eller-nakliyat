import { SITE, SERVICES, DISTRICTS } from './site-config';
import { FACTS } from './facts';
import { estimatePriceFromForm } from './pricing';

export function organizationSchema() {
  const socialFiltered = (Object.values(SITE.social) as string[])
    .filter((value) => value && value.trim() !== '');

  // 1+1 standard move price estimate as base price representation
  const basePrice1to1 = estimatePriceFromForm('1+1', 'hayir', 'Mersin', 'Mersin').min;

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    '@id': `${SITE.url}/#organization`,
    'name': SITE.name,
    'alternateName': SITE.shortName,
    'url': SITE.url,
    'sameAs': [
      ...socialFiltered,
      ...(SITE.gbpUrl ? [SITE.gbpUrl] : [])
    ],
    ...(SITE.gbpUrl ? { 'hasMap': SITE.gbpUrl } : {}),
    'logo': {
      '@type': 'ImageObject',
      'url': `${SITE.url}/img/logo.png`,
      'width': '400',
      'height': '400'
    },
    'image': [
      `${SITE.url}/img/logo.png`,
      `${SITE.url}/img/slayt-1.jpg`,
      `${SITE.url}/img/slayt-2.jpg`,
      `${SITE.url}/img/slayt-3.jpg`
    ],
    'telephone': SITE.phone,
    'email': SITE.email,
    'description': `${SITE.name}, Mersin genelinde K3 yetki belgesi ve mobil dış cephe asansörleri ile ${FACTS.foundedYear} yılından bu yana sabit fiyat garantili ve sigortalı evden eve taşımacılık hizmeti sunmaktadır.`,
    'slogan': 'Sabit fiyat garantisiyle sigortalı ve asansörlü evden eve nakliyat.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': SITE.address.street,
      'addressLocality': SITE.address.locality,
      'addressRegion': SITE.address.region,
      'postalCode': SITE.address.postalCode,
      'addressCountry': SITE.address.country,
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': SITE.geo.lat.toString(),
      'longitude': SITE.geo.lng.toString(),
    },
    'serviceArea': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': SITE.geo.lat,
        'longitude': SITE.geo.lng
      },
      'geoRadius': '150000'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': SITE.hours.opens,
      'closes': SITE.hours.closes,
    },
    'areaServed': DISTRICTS.map((district) => ({
      '@type': 'AdministrativeArea',
      'name': `${district.name}, Mersin`
    })),
    'priceRange': SITE.priceRange,
    'currenciesAccepted': 'TRY',
    'paymentAccepted': 'Nakit, Kredi Kartı, Havale/EFT',
    'knowsAbout': [
      'evden eve nakliyat',
      'asansörlü nakliyat',
      'eşya paketleme',
      'ofis taşımacılığı',
      'şehirlerarası nakliyat',
      'parça eşya taşıma',
      'piyano ve kasa taşıma',
      'eşya depolama',
      'ücretsiz ekspertiz'
    ],
    'makesOffer': SERVICES.map((service) => {
      // Calculate dynamic price spec for each service type if applicable
      const basePrice = estimatePriceFromForm('1+1', 'hayir', 'Mersin', 'Mersin').min;
      return {
        '@type': 'Offer',
        'priceCurrency': 'TRY',
        'price': basePrice,
        'priceSpecification': {
          '@type': 'UnitPriceSpecification',
          'price': basePrice,
          'priceCurrency': 'TRY',
          'unitText': 'Hizmet Başlangıç'
        },
        'itemOffered': {
          '@type': 'Service',
          'name': service.name,
          'description': service.description,
          'url': `${SITE.url}/hizmetler/${service.slug}`
        }
      };
    }),
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Uzman Eller Nakliyat Hizmetleri',
      'itemListElement': SERVICES.map((service) => ({
        '@type': 'Offer',
        'priceCurrency': 'TRY',
        'price': basePrice1to1,
        'priceSpecification': {
          '@type': 'UnitPriceSpecification',
          'price': basePrice1to1,
          'priceCurrency': 'TRY',
          'unitText': 'Hizmet Başlangıç'
        },
        'itemOffered': {
          '@type': 'Service',
          'name': service.name,
          'description': service.description,
          'url': `${SITE.url}/hizmetler/${service.slug}`
        }
      }))
    }
  };

  return organization;
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    'url': SITE.url,
    'name': SITE.name,
    'publisher': {
      '@id': `${SITE.url}/#organization`
    },
    'inLanguage': 'tr-TR'
  };
}

export function serviceSchema({ name, description, slug, areaName }: { name: string; description: string; slug: string; areaName?: string }) {
  const cleanSlug = slug.startsWith('/') ? slug : `/${slug}`;
  const basePrice = estimatePriceFromForm('1+1', 'hayir', 'Mersin', 'Mersin').min;
  
  const hasVariablePricing = slug.includes('esya-depolama') || slug.includes('piyano-ve-kasa-tasima') || slug.includes('ucretsiz-ekspertiz');

  const offers = hasVariablePricing ? {
    '@type': 'Offer',
    'url': `${SITE.url}/teklif-al`,
    'availability': 'https://schema.org/InStock',
    'priceCurrency': 'TRY'
  } : {
    '@type': 'AggregateOffer',
    'priceCurrency': 'TRY',
    'lowPrice': basePrice.toString(),
    'highPrice': FACTS.priceMax.toString(),
    'offerCount': '10'
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Moving Services',
    'name': name,
    'description': description,
    'provider': {
      '@id': `${SITE.url}/#organization`
    },
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': areaName ? `${areaName}, Mersin` : 'Mersin'
    },
    'offers': offers,
    'url': `${SITE.url}${cleanSlug}`
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, idx) => {
      const cleanUrl = item.url.startsWith('http') 
        ? item.url 
        : `${SITE.url}${item.url.startsWith('/') ? item.url : `/${item.url}`}`;
      return {
        '@type': 'ListItem',
        'position': idx + 1,
        'name': item.name,
        'item': cleanUrl
      };
    })
  };
}

export function faqSchema(faqsList: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqsList.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'mainEntity': {
      '@id': `${SITE.url}/#organization`
    }
  };
}

export function organizationRef(omitAddress = false) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    '@id': `${SITE.url}/#organization`,
    'name': SITE.name,
    'alternateName': SITE.shortName,
    'url': SITE.url,
    'telephone': SITE.phone,
    'logo': `${SITE.url}/img/logo.png`,
    'image': `${SITE.url}/img/slayt-1.jpg`,
    ...(!omitAddress ? {
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': SITE.address.street,
        'addressLocality': SITE.address.locality,
        'addressRegion': SITE.address.region,
        'postalCode': SITE.address.postalCode,
        'addressCountry': SITE.address.country,
      }
    } : {})
  };
}

export function webPageSchema({ url, datePublished, dateModified, image }: { url: string; datePublished?: string; dateModified?: string; image?: string }) {
  const cleanUrl = url.startsWith('/') ? `${SITE.url}${url}` : url.startsWith('http') ? url : `${SITE.url}/${url}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${cleanUrl}/#webpage`,
    'url': cleanUrl,
    'isPartOf': {
      '@id': `${SITE.url}/#website`
    },
    'about': {
      '@id': `${SITE.url}/#organization`
    },
    'primaryImageOfPage': {
      '@type': 'ImageObject',
      'url': image || `${SITE.url}/img/slayt-1.jpg`
    },
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['h1', '.speakable']
    },
    ...(datePublished ? { 'datePublished': datePublished } : {}),
    ...(dateModified ? { 'dateModified': dateModified } : {})
  };
}

export function getPageSchemas({
  url,
  datePublished,
  dateModified,
  image,
  nodes = []
}: {
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  nodes?: any[];
}) {
  const isRegionPage = url.includes('/bolgeler/');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...nodes,
      organizationRef(isRegionPage),
      websiteSchema(),
      webPageSchema({ url, datePublished, dateModified, image })
    ]
  };
}

export function howToMovingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'Mersin Evden Eve Nakliyat Nasıl Yapılır? (Adım Adım Taşıma Aşamaları)',
    'description': 'Mersin Uzman Eller Nakliyat ile profesyonel, asansörlü ve marangozlu ev taşıma sürecinin adım adım rehberi.',
    'totalTime': 'PT6H',
    'step': [
      {
        '@type': 'HowToStep',
        'name': 'Ücretsiz Ekspertiz ve Fiyat Planlaması',
        'text': 'Taşınma öncesinde daire oda sayısı, asansör kurulum açısı ve sevk mesafesi incelenerek sabit fiyat belirlenir.',
        'url': `${SITE.url}/teklif-al`
      },
      {
        '@type': 'HowToStep',
        'name': 'Profesyonel Eşya Paketleme ve Ambalajlama',
        'text': 'Beyaz eşyalar ve mobilyalar çift kat balonlu naylon malzemelerle sarılır, kırılacak cam eşyalar Kraft kutulara paketlenir.',
        'url': `${SITE.url}/hizmetler/profesyonel-esya-paketleme`
      },
      {
        '@type': 'HowToStep',
        'name': 'Dış Cephe Eşya Asansörü ile Güvenli Yükleme',
        'text': 'Yüksek katlı binalar için bina dış cephesine kurulan mobil asansörle eşyalar doğrudan nakliye kamyonuna indirilir.',
        'url': `${SITE.url}/hizmetler/asansorlu-evden-eve-nakliyat`
      },
      {
        '@type': 'HowToStep',
        'name': 'Kapalı Kasa Kamyonla Transfer',
        'text': 'Özel kapalı çelik kasa araçlarla eşyalar sarsıntı ve yol risklerine karşı emtia nakliyat sigortalı olarak yeni adrese sevk edilir.',
        'url': `${SITE.url}/hizmetler/sehirici-evden-eve-nakliyat`
      },
      {
        '@type': 'HowToStep',
        'name': 'Kurulum ve Yerleştirme',
        'text': 'Yeni adrese asansörle çıkarılan eşyalar uzman marangozumuz tarafından de-monte yerlerinde yeniden kurulur ve yerleştirilir.'
      }
    ]
  };
}
