import { FACTS } from './facts';

export interface PriceInput {
  rooms: '1+1' | '2+1' | '3+1' | '4+1+';
  fromFloor: number;
  toFloor: number;
  fromElevator: boolean;
  toElevator: boolean;
  distanceType: 'sehirici' | 'ilceler' | 'sehirlerarasi';
  distanceKm?: number;
  packing: boolean;
  carpentry: boolean;
  storage: boolean;
}

export interface PriceEstimate {
  min: number;
  max: number;
  breakdown: {
    base: number;
    floorSurcharge: number;
    elevatorFee: number;
    packingFee: number;
    distanceFee: number;
    storageFee: number;
  };
  disclaimer: string;
}

/**
 * Mersin Uzman Eller Nakliyat Fiyat Hesaplama Motoru.
 * Bu fonksiyon, daire oda sayısı, kat bilgileri, asansör durumları ve ek lojistik gereksinimleri
 * baz alarak tamamen yan etkisiz (pure) ve tutarlı bir fiyat aralığı hesaplar.
 */
export function estimatePrice(input: PriceInput): PriceEstimate {
  // Baz fiyatlar oda sayısına göre 15.000 TL - 31.000 TL aralığında belirlenir.
  let baseMin = 15000;
  let baseMax = 20000;
  if (input.rooms === '2+1') {
    baseMin = 18000;
    baseMax = 23000;
  } else if (input.rooms === '3+1') {
    baseMin = 21000;
    baseMax = 26000;
  } else if (input.rooms === '4+1+') {
    baseMin = 25000;
    baseMax = 31000;
  }

  // Kat artış yevmiyesi: Her kat yükseldiğinde personelin iş gücü katlandığı için kat başına 150 TL ek maliyet eklenir.
  const floorSurcharge = (input.fromFloor + input.toFloor) * 150;

  // Dış cephe asansör kurulum ücreti: Asansör kurulumu başına 2.500 TL yansıtılır.
  let elevatorFee = 0;
  if (input.fromElevator) elevatorFee += 2500;
  if (input.toElevator) elevatorFee += 2500;

  // Profesyonel paketleme ve patpat naylon sarım bedeli (oda durumuna göre malzeme sarfiyatı değişir)
  let packingFee = 0;
  if (input.packing) {
    if (input.rooms === '1+1') packingFee = 1500;
    else if (input.rooms === '2+1') packingFee = 2500;
    else if (input.rooms === '3+1') packingFee = 3500;
    else packingFee = 4500;
  }

  // Yol mesafesi katsayıları
  let distanceFee = 0;
  if (input.distanceType === 'ilceler') {
    distanceFee = 4000; // Mersin dış ilçeler gidiş-dönüş yakıt farkı
  } else if (input.distanceType === 'sehirlerarasi') {
    // Şehirlerarası km başına 35 TL üzerinden dinamik hesaplanır.
    const km = input.distanceKm || 500; // Mesafe belirtilmediyse varsayılan 500 km
    distanceFee = km * 35;
  }

  // Aylık kiralık eşya depolama opsiyonu
  let storageFee = 0;
  if (input.storage) {
    if (input.rooms === '1+1') storageFee = 3000;
    else if (input.rooms === '2+1') storageFee = 4500;
    else storageFee = 6000;
  }

  const min = baseMin + floorSurcharge + elevatorFee + packingFee + distanceFee + storageFee;
  // Sezon dalgalanması ve bütçe esneklik payı için maksimum aralık %20 daha fazlası olarak ayarlanır.
  const max = baseMax + floorSurcharge + elevatorFee + packingFee + distanceFee + storageFee;

  const disclaimer = 'Bu tahmini bir hesaplamadır, kesin fiyat ücretsiz ekspertiz sonrası verilir.';

  return {
    min,
    max,
    breakdown: {
      base: baseMin,
      floorSurcharge,
      elevatorFee,
      packingFee,
      distanceFee,
      storageFee
    },
    disclaimer
  };
}

/**
 * Müşteri teklif formu parametreleri ile ortak fiyat tahmini yapan adaptör fonksiyon.
 * Hem client tarafındaki QuoteForm hem de server tarafındaki /api/teklif ucu bu fonksiyonu kullanır.
 */
export function estimatePriceFromForm(rooms: string, elevator: string, fromDistrict: string, toDistrict: string): { min: number; max: number } {
  let basePrice = 15000;
  if (rooms === '2+1') basePrice = 18000;
  else if (rooms === '3+1') basePrice = 21000;
  else if (rooms === '4+1+') basePrice = 25000;
  else if (rooms === 'ofis') basePrice = 15000;

  if (elevator === 'evet') {
    basePrice += 2500;
  }

  const isIntercity = toDistrict.includes('Şehirlerarası') || 
                      fromDistrict.includes('Şehirlerarası') ||
                      toDistrict.includes('İl Dışı') ||
                      fromDistrict.includes('İl Dışı');

  if (isIntercity) {
    return { min: basePrice + 17500, max: basePrice + 32000 };
  }

  return { min: basePrice, max: basePrice + 5000 };
}

