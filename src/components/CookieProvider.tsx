"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
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

function loadGA(id: string) {
  if (document.getElementById("ga-script")) return;
  const s = document.createElement("script");
  s.id = "ga-script";
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  s.async = true;
  document.head.appendChild(s);
  s.onload = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
    gtag("js", new Date());
    gtag("config", id);
  };
}

function loadPixel(id: string) {
  if (document.getElementById("pixel-script")) return;
  const n: any = (window as any).fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!(window as any)._fbq) (window as any)._fbq = n;
  n.push = n; n.loaded = true; n.version = "2.0"; n.queue = [];
  const s = document.createElement("script");
  s.id = "pixel-script";
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  s.async = true;
  document.head.appendChild(s);
  n("init", id);
  n("track", "PageView");
}

export default function CookieProvider() {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [ready, setReady] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const saved = getConsent();
    setConsent(saved);
    setReady(true);
    if (saved?.analytics && GA_ID) loadGA(GA_ID);
    if (saved?.marketing && PIXEL_ID) loadPixel(PIXEL_ID);
  }, []);

  function apply(next: ConsentState) {
    saveConsent(next);
    setConsent(next);
    setShowPreferences(false);
    if (next.analytics && GA_ID) loadGA(GA_ID);
    if (next.marketing && PIXEL_ID) loadPixel(PIXEL_ID);
  }

  const showBanner = ready && consent === null;

  return (
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
  );
}
