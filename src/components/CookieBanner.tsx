"use client";

import { motion } from "framer-motion";

interface Props {
  onAccept: () => void;
  onReject: () => void;
  onCustomize: () => void;
}

export default function CookieBanner({ onAccept, onReject, onCustomize }: Props) {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center px-4 z-[9998]">
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 120, opacity: 0 }}
        transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
        className="w-full max-w-4xl flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl p-5 sm:p-5"
        style={{
          background: "#13131f",
          border: "1px solid #1e1e2e",
          boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
        }}
      >
        <p
          className="flex-1 text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-body)", color: "#8888aa", margin: 0 }}
        >
          Usamos cookies propias y de terceros para analizar el tráfico y
          personalizar la publicidad.{" "}
          <a href="/legal/cookies" style={{ color: "#4f46e5", textDecoration: "underline" }}>
            Más información
          </a>
          .
        </p>

        <div className="flex gap-2 w-full sm:w-auto">
          <button onClick={onCustomize} className="flex-1 sm:flex-none" style={btnGhost}>
            Personalizar
          </button>
          <button onClick={onReject} className="flex-1 sm:flex-none" style={btnOutline}>
            Rechazar
          </button>
          <button onClick={onAccept} className="flex-1 sm:flex-none" style={btnPrimary}>
            Aceptar
          </button>
        </div>
      </motion.div>
    </div>
  );
}

const base: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "0.875rem",
  fontWeight: 500,
  padding: "0.6rem 1rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
  whiteSpace: "nowrap",
};

const btnGhost: React.CSSProperties = {
  ...base,
  background: "transparent",
  color: "#8888aa",
  border: "1px solid #1e1e2e",
};

const btnOutline: React.CSSProperties = {
  ...base,
  background: "transparent",
  color: "#e8e8f2",
  border: "1px solid #2e2e44",
};

const btnPrimary: React.CSSProperties = {
  ...base,
  background: "#4f46e5",
  color: "#ffffff",
  border: "none",
};
