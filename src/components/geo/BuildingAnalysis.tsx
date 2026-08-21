import React from 'react';
import { DISTRICTS } from '@/lib/site-config';

interface BuildingAnalysisProps {
  districtName: string;
}

interface DistrictBuildingData {
  buildingType: string;
  typicalFloors: string;
  elevatorRequirement: string;
  streetWidth: string;
  specialCondition: string;
}

const DISTRICT_BUILDING_MAP: Record<string, DistrictBuildingData> = {
  'Yenişehir': {
    buildingType: 'Eski Apartmanlar ve Yeni Rezidanslar',
    typicalFloors: '5 - 15 Kat',
    elevatorRequirement: 'Çok Yüksek (%85 dış cephe asansör kullanımı)',
    streetWidth: 'Dar ve Yoğun Araç Parklı Sokaklar',
    specialCondition: 'Ağaç dalları ve elektrik telleri asansör kurulum açısına göre temizlenmelidir.'
  },
  'Mezitli': {
    buildingType: 'Yüksek Rezidanslar ve Lüks Konut Blokları',
    typicalFloors: '10 - 25 Kat',
    elevatorRequirement: 'Çok Yüksek (%95 teleskopik asansör zorunludur)',
    streetWidth: 'Geniş Bulvarlar ve Orta Sokaklar',
    specialCondition: 'Peyzaj ve yeşil alan zeminlerine koruyucu kauçuk plaka serilmesi zorunludur.'
  },
  'Toroslar': {
    buildingType: 'Eski Yerleşim Apartmanları ve Müstakiller',
    typicalFloors: '3 - 8 Kat',
    elevatorRequirement: 'Orta (%50 asansör kurulum ihtiyacı)',
    streetWidth: 'Dar ve Bitişik Nizam Sokaklar',
    specialCondition: 'Bina içi dar merdiven boşlukları nedeniyle taşımada ekstra dikkat gösterilmelidir.'
  },
  'Akdeniz': {
    buildingType: 'Yeni TOKİ Konutları ve Modern Bloklar',
    typicalFloors: '5 - 12 Kat',
    elevatorRequirement: 'Yüksek (%80 dış cephe asansörü kurulumu)',
    streetWidth: 'Geniş Sokaklar ve Bulvarlar',
    specialCondition: 'Yeni sitelerde bina asansörü yasakları nedeniyle dış cephe asansörü şarttır.'
  },
  'Tarsus': {
    buildingType: 'Çok Katlı Apartmanlar ve Siteler',
    typicalFloors: '4 - 8 Kat',
    elevatorRequirement: 'Orta (%60 dış cephe asansör kurulumu)',
    streetWidth: 'Orta ve Geniş caddeler',
    specialCondition: 'Geniş caddelerde rüzgar hızı kontrol edilerek asansör kurulmalıdır.'
  },
  'Erdemli': {
    buildingType: 'Tarihi Konutlar ve Yeni Apartmanlar',
    typicalFloors: '3 - 6 Kat',
    elevatorRequirement: 'Orta (%45 dış cephe asansörü kullanımı)',
    streetWidth: 'Dar Tarihi Sokaklar ve Yeni Caddeler',
    specialCondition: 'Dar sokaklarda kamyon yanaşma rezervasyonu 1 gün önceden yapılmalıdır.'
  },
  'Silifke': {
    buildingType: 'Yayla Evleri ve Betonarme Apartmanlar',
    typicalFloors: '2 - 5 Kat',
    elevatorRequirement: 'Düşük-Orta (%30 asansör ihtiyacı)',
    streetWidth: 'Dar ve Eğimli Yayla Sokakları',
    specialCondition: 'Kış geçişlerinde kar ve buzlanmaya karşı kar lastikleri hazır bulundurulur.'
  },
  'Anamur': {
    buildingType: 'Yazlık Apartmanlar, Villalar ve Muz Serası Konutları',
    typicalFloors: '2 - 6 Kat',
    elevatorRequirement: 'Orta-Yüksek (%55 asansör ihtiyacı)',
    streetWidth: 'Orta Genişlikte Sahil ve Sera Yolları',
    specialCondition: 'Sera yolları dar geçişleri ve deniz kıyısı rüzgar faktörü kurulum esnasında gözetilir.'
  },
  'Mut': {
    buildingType: 'Müstakil Konutlar ve Az Katlı Apartmanlar',
    typicalFloors: '1 - 4 Kat',
    elevatorRequirement: 'Düşük (%20 asansör kurulum ihtiyacı)',
    streetWidth: 'Dar ve Rampalı İç Toros Yolları',
    specialCondition: 'Toroslar dağ yolları ve rampaları nedeniyle eşyaların araç içinde mükemmel sabitlenmesi gerekir.'
  },
  'Gülnar': {
    buildingType: 'Müstakil Köy Evleri ve Taş Konutlar',
    typicalFloors: '1 - 3 Kat',
    elevatorRequirement: 'Çok Düşük (%10 mobil asansör kurulumu)',
    streetWidth: 'Dar, Virajlı ve Taşlık Dağ Sokakları',
    specialCondition: 'Taşlık yollar ve engebeli arazide araç tekerlek takozları ve güvenlik sabitlemeleri şarttır.'
  },
  'Aydıncık': {
    buildingType: 'Müstakil Bahçeli Evler ve Yeni Yazlık Bloklar',
    typicalFloors: '1 - 4 Kat',
    elevatorRequirement: 'Düşük-Orta (%25 asansör kurulumu)',
    streetWidth: 'Dar ve Eğimli Sahil Sokakları',
    specialCondition: 'Kıyı şeridi nemli iklimi nedeniyle elektronik cihazların özel paketlenmesi gerekir.'
  },
  'Bozyazı': {
    buildingType: 'Müstakil Konutlar ve Yazlık Siteler',
    typicalFloors: '2 - 5 Kat',
    elevatorRequirement: 'Orta (%30 asansör ihtiyacı)',
    streetWidth: 'Orta Genişlikte Sahil Yolları',
    specialCondition: 'Yazlık sitelerin bahçe içi dar geçişlerinde kompakt asansör kurulumu planlanır.'
  },
  'Çamlıyayla': {
    buildingType: 'Yayla Evleri, Villalar ve Ahşap Konutlar',
    typicalFloors: '1 - 3 Kat',
    elevatorRequirement: 'Çok Düşük (%5 asansör ihtiyacı)',
    streetWidth: 'Dar, Rampalı ve Yokuşlu Yayla Yolları',
    specialCondition: 'Bölgenin dik rampaları ve yayla arazisinde taşımada ekstra askı takımları kullanılır.'
  }
};

export default function BuildingAnalysis({ districtName }: BuildingAnalysisProps) {
  // Normalize district name to prevent lookup issues
  const cleanName = districtName.trim();
  const info = DISTRICT_BUILDING_MAP[cleanName];

  if (!info) return null;

  return (
    <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-6 text-charcoal">
      <h3 className="font-display font-bold text-brand-primary text-lg md:text-xl border-b border-border-light pb-2">
        {cleanName} İlçesi Bina Yapısı ve Nakliye Analiz Tablosu
      </h3>
      <p className="text-xs md:text-sm leading-relaxed text-charcoal/90">
        Mersin Uzman Eller Nakliyat tarafından {cleanName} ilçesinde gerçekleştirilen ev taşıma süreçlerinde, ilçenin yerleşim mimarisi ve bina yapı durumlarına göre belirlenen lojistik analiz tablosu şu şekildedir:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs md:text-sm">
          <caption>{cleanName} Bölgesi Konut Mimarisi ve Asansör İhtiyaç Analizi</caption>
          <thead>
            <tr className="bg-brand-primary text-white">
              <th scope="col" className="p-3 rounded-tl-lg">Kriter</th>
              <th scope="col" className="p-3 rounded-tr-lg">Analiz ve Tespit Sonucu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light">
            <tr className="hover:bg-surface-muted/50">
              <th scope="row" className="p-3 font-bold text-brand-primary">Mecra / Yapı Tipi</th>
              <td className="p-3">{info.buildingType}</td>
            </tr>
            <tr className="hover:bg-surface-muted/50">
              <th scope="row" className="p-3 font-bold text-brand-primary">Ortalama Kat Seviyeleri</th>
              <td className="p-3">{info.typicalFloors}</td>
            </tr>
            <tr className="hover:bg-surface-muted/50">
              <th scope="row" className="p-3 font-bold text-brand-primary">Dış Cephe Asansör İhtiyacı</th>
              <td className="p-3 text-green-600 font-bold">{info.elevatorRequirement}</td>
            </tr>
            <tr className="hover:bg-surface-muted/50">
              <th scope="row" className="p-3 font-bold text-brand-primary">Sokak ve Ulaşım Durumu</th>
              <td className="p-3">{info.streetWidth}</td>
            </tr>
            <tr className="hover:bg-surface-muted/50">
              <th scope="row" className="p-3 font-bold text-brand-primary">Özel Lojistik Tedbirleri</th>
              <td className="p-3 font-medium text-brand-accent-dark">{info.specialCondition}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
