"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import {
  getConsent,
  saveConsent,
  ACCEPT_ALL,
  REJECT_ALL,
  type ConsentState,
} from "@/lib/cookies";
import CookieBanner from "./CookieBanner";
import CookiePreferences from "./CookiePreferences";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function CookieProvider() {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [ready, setReady] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    setConsent(getConsent());
    setReady(true);
  }, []);

  function apply(next: ConsentState) {
    saveConsent(next);
    setConsent(next);
    setShowPreferences(false);
  }

  const showBanner = ready && consent === null;

  return (
    <>
      {/* Google Analytics */}
      {consent?.analytics && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}</Script>
        </>
      )}

      {/* Meta Pixel */}
      {consent?.marketing && PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
          n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','${PIXEL_ID}');
          fbq('track','PageView');
        `}</Script>
      )}

      <AnimatePresence>
        {showBanner && !showPreferences && (
          <CookieBanner
            onAccept={() => apply(ACCEPT_ALL)}
            onReject={() => apply(REJECT_ALL)}
            onCustomize={() => setShowPreferences(true)}
          />
        )}
        {showPreferences && (
          <CookiePreferences
            onSave={apply}
            onClose={() => setShowPreferences(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
