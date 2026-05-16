export type ConsentState = {
  analytics: boolean;
  marketing: boolean;
};

const KEY = "baifo_cookie_consent";

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

export function saveConsent(consent: ConsentState): void {
  localStorage.setItem(KEY, JSON.stringify(consent));
}

export const ACCEPT_ALL: ConsentState = { analytics: true, marketing: true };
export const REJECT_ALL: ConsentState = { analytics: false, marketing: false };
