'use client';

import React, { useEffect, Suspense } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useReportWebVitals } from 'next/web-vitals';
import ConsentBanner from './ConsentBanner';

function WebVitalsReporter() {
  useReportWebVitals((metric: any) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });
  return null;
}

function RouteChangeListener({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      (window as any).gtag('config', gaId, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, gaId]);

  return null;
}

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  if (!gaId && !clarityId) return null;

  return (
    <>
      {/* 1. Google Analytics 4 with Consent Mode v2 Default Settings */}
      {gaId && (
        <>
          <Script id="google-analytics-consent" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Load saved consent state or default to denied
              const savedConsent = typeof window !== 'undefined' ? localStorage.getItem('cookie_consent') : null;
              const hasConsent = savedConsent === 'granted';
              
              gtag('consent', 'default', {
                'ad_storage': hasConsent ? 'granted' : 'denied',
                'ad_user_data': hasConsent ? 'granted' : 'denied',
                'ad_personalization': hasConsent ? 'granted' : 'denied',
                'analytics_storage': hasConsent ? 'granted' : 'denied'
              });
            `}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
          <Suspense fallback={null}>
            <RouteChangeListener gaId={gaId} />
          </Suspense>
          <WebVitalsReporter />
        </>
      )}

      {/* 2. Microsoft Clarity */}
      {clarityId && (
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","${clarityId}");
          `}
        </Script>
      )}

      {/* 3. Cookie Consent Banner */}
      <ConsentBanner />
    </>
  );
}
