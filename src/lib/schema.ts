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
    'hasMap': SITE.gbpUrl,
    'logo': {
      '@type': 'ImageObject',
      'url': `${SITE.url}/img/logo.png`,
      'width': '200',
      'height': '60'
    },
    'image': `${SITE.url}/img/slayt-1.jpg`,
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
    'foundingDate': FACTS.foundedYear.toString(),
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
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'TRY',
      'price': basePrice,
      'priceSpecification': {
        '@type': 'UnitPriceSpecification',
        'price': basePrice,
        'priceCurrency': 'TRY',
        'unitText': 'Hizmet Başlangıç'
      }
    },
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
