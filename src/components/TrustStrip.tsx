import React from 'react';
import { ShieldCheck, CalendarRange, ArrowUpCircle } from 'lucide-react';
import { FACTS } from '@/lib/facts';

export default function TrustStrip() {
  const yearsServed = new Date().getFullYear() - FACTS.foundedYear;

  return (
    <section className="py-12 bg-white border-b border-border-light" id="hakkimizda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Stat 1 */}
          <div className="flex gap-4 items-start p-4 hover:bg-border-light/30 rounded-lg transition-colors">
            <div className="bg-brand-primary/5 p-3 rounded-lg text-brand-primary">
              <ShieldCheck className="w-8 h-8 text-brand-primary" />
            </div>
            <div>
              <div className="font-display font-black text-brand-primary text-2xl md:text-3xl">100.000 TL</div>
              <div className="text-brand-accent-dark font-bold text-xs uppercase tracking-wider mt-1">Sigorta Güvencesi</div>
              <p className="text-charcoal text-sm leading-relaxed mt-2">
                Anadolu Sigorta poliçesiyle tüm eşyalarınız şehir içi ve şehirlerarası taşımada teminat altındadır.
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex gap-4 items-start p-4 hover:bg-border-light/30 rounded-lg transition-colors">
            <div className="bg-brand-primary/5 p-3 rounded-lg text-brand-primary">
              <CalendarRange className="w-8 h-8 text-brand-primary" />
            </div>
            <div>
              <div className="font-display font-black text-brand-primary text-2xl md:text-3xl">{yearsServed} Yıl</div>
              <div className="text-brand-accent-dark font-bold text-xs uppercase tracking-wider mt-1">Mersin Yerel Tecrübesi</div>
              <p className="text-charcoal text-sm leading-relaxed mt-2">
                {FACTS.foundedYear} yılından beri Yenişehir merkezli olarak Mersin'in tüm bölgelerinde güvenli taşıma yapıyoruz.
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex gap-4 items-start p-4 hover:bg-border-light/30 rounded-lg transition-colors">
            <div className="bg-brand-primary/5 p-3 rounded-lg text-brand-primary">
              <ArrowUpCircle className="w-8 h-8 text-brand-primary" />
            </div>
            <div>
              <div className="font-display font-black text-brand-primary text-2xl md:text-3xl">25. Kat</div>
              <div className="text-brand-accent-dark font-bold text-xs uppercase tracking-wider mt-1">Mobil Asansör Ulaşımı</div>
              <p className="text-charcoal text-sm leading-relaxed mt-2">
                Dış cephe asansör araçlarımızla, dar sokaklarda bile yüksek katlara hasarsız kurulum sağlıyoruz.
              </p>
            </div>
          </div>

        </div>

        {/* Written Guarantee Banner */}
        <div className="bg-brand-primary rounded-xl p-6 md:p-8 mt-12 text-center relative overflow-hidden shadow-xl border border-white/5">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <span className="text-brand-accent font-bold text-xs tracking-widest">
              SÖZLEŞMELİ FİYAT GÜVENCESİ
            </span>
            <p className="text-white text-base md:text-lg lg:text-xl font-bold font-display leading-relaxed">
              "Fiyatımız nettir. Yol bittiğinde, eşya kamyona yüklendiğinde ekstra ücret talep etmeyeceğimizi sözleşmeyle taahhüt ediyoruz."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
