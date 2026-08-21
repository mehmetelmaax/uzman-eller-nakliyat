import React from 'react';
import { FACTS } from '@/lib/facts';

export default function PricingMatrix() {
  return (
    <div className="bg-white p-8 rounded-xl border border-border-light shadow-sm space-y-6 overflow-hidden text-charcoal">
      <h2 className="font-display font-bold text-brand-primary text-xl md:text-2xl border-b border-border-light pb-3">
        Mersin Ev Taşıma Oda, Mesafe ve Kat Fiyat Matrisi
      </h2>
      <p className="text-xs md:text-sm text-charcoal leading-relaxed">
        Mersin genelindeki evden eve nakliyat operasyonlarında tahmini maliyet aralıkları daire büyüklüğüne (oda sayısına), gidilecek yol mesafesine ve kat yüksekliklerine göre belirlenmektedir. Aşağıda, Mersin Uzman Eller Nakliyat tarafından sunulan 2026 yılı güncel lojistik fiyat aralıkları listelenmiştir:
      </p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs md:text-sm">
          <caption>Mersin Ev Taşıma Fiyat Tarifeleri Matrisi (2026)</caption>
          <thead>
            <tr className="bg-brand-primary text-white">
              <th scope="col" className="p-3 font-display rounded-tl-lg">Daire Tipi</th>
              <th scope="col" className="p-3 font-display">Şehiriçi (Yenişehir/Mezitli)</th>
              <th scope="col" className="p-3 font-display">İlçeler Arası (Erdemli/Tarsus vb.)</th>
              <th scope="col" className="p-3 font-display rounded-tr-lg">Şehirlerarası (300 Km)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light">
            <tr className="hover:bg-surface-muted/50">
              <th scope="row" className="p-3 font-bold text-brand-primary">1+1 Daire</th>
              <td className="p-3">₺{FACTS.priceMin.toLocaleString('tr-TR')} - ₺20.000</td>
              <td className="p-3">₺18.000 - ₺22.000</td>
              <td className="p-3 font-semibold text-brand-accent-dark">₺25.000 - ₺30.000</td>
            </tr>
            <tr className="hover:bg-surface-muted/50">
              <th scope="row" className="p-3 font-bold text-brand-primary">2+1 Daire</th>
              <td className="p-3">₺18.000 - ₺23.000</td>
              <td className="p-3">₺22.000 - ₺26.000</td>
              <td className="p-3 font-semibold text-brand-accent-dark">₺29.000 - ₺34.000</td>
            </tr>
            <tr className="hover:bg-surface-muted/50">
              <th scope="row" className="p-3 font-bold text-brand-primary">3+1 Daire</th>
              <td className="p-3">₺21.000 - ₺26.000</td>
              <td className="p-3">₺25.000 - ₺30.000</td>
              <td className="p-3 font-semibold text-brand-accent-dark">₺32.000 - ₺38.000</td>
            </tr>
            <tr className="hover:bg-surface-muted/50">
              <th scope="row" className="p-3 font-bold text-brand-primary">4+1 Daire</th>
              <td className="p-3">₺25.000 - ₺{FACTS.priceMax.toLocaleString('tr-TR')}</td>
              <td className="p-3">₺30.000 - ₺36.000</td>
              <td className="p-3 font-semibold text-brand-accent-dark">₺38.000 - ₺45.000</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p className="text-[10px] text-charcoal/70 italic border-l-2 border-brand-accent pl-3">
        * Fiyatlar Ağustos 2026 itibarıyla tahminî aralıklardır; kesin fiyat ücretsiz ekspertiz sonrası sabitlenir. Tablodaki fiyatlar normal eşya yoğunluğuna sahip binalardaki asansör kurulumlarını kapsamaktadır. Giriş kat veya 1. kat taşımalarında asansör kurulmadığı için fiyatlar daha düşük seviyede uygulanır.
      </p>
    </div>
  );
}
