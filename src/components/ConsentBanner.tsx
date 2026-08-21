'use client';

import React, { useState, useEffect } from 'react';

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'granted');
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 md:left-auto md:right-8 md:max-w-md bg-white text-charcoal p-6 rounded-2xl shadow-2xl border border-border-light z-50 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-5">
      <div className="space-y-1">
        <h5 className="font-bold text-sm text-brand-primary animate-pulse">Çerez Tercihleri</h5>
        <p className="text-xs text-charcoal/80 leading-relaxed">
          Size daha iyi bir hizmet sunabilmek amacıyla yasal düzenlemelere uygun olarak sitemizde güvenli çerezler kullanıyoruz.
        </p>
      </div>
      <div className="flex gap-2 justify-end">
        <button onClick={() => setShow(false)} className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-charcoal cursor-pointer">
          Reddet
        </button>
        <button onClick={handleAccept} className="px-5 py-2.5 text-xs font-bold bg-brand-accent hover:bg-brand-accent-dark text-white rounded-xl shadow cursor-pointer transition-colors">
          Kabul Et
        </button>
      </div>
    </div>
  );
}
