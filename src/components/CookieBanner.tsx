"use client";

import { motion } from "framer-motion";

interface Props {
  onAccept: () => void;
  onReject: () => void;
  onCustomize: () => void;
}

export default function CookieBanner({ onAccept, onReject, onCustomize }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 9998,
        padding: "0 1rem",
      }}
    >
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 120, opacity: 0 }}
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
      style={{
        width: "min(56rem, 100%)",
        background: "#13131f",
        border: "1px solid #1e1e2e",
        borderRadius: "1rem",
        padding: "1.25rem 1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "1.5rem",
        boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
        flexWrap: "wrap",
      }}
    >
      <p
        style={{
          flex: 1,
          minWidth: "16rem",
          fontFamily: "var(--font-body)",
          color: "#8888aa",
          fontSize: "0.875rem",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        Usamos cookies propias y de terceros para analizar el tráfico y
        personalizar la publicidad.{" "}
        <a
          href="/cookies"
          style={{ color: "#4f46e5", textDecoration: "underline" }}
        >
          Más información
        </a>
        .
      </p>

      <div style={{ display: "flex", gap: "0.625rem", flexShrink: 0, flexWrap: "wrap" }}>
        <button onClick={onCustomize} style={btnGhost}>
          Personalizar
        </button>
        <button onClick={onReject} style={btnOutline}>
          Rechazar
        </button>
        <button onClick={onAccept} style={btnPrimary}>
          Aceptar todo
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
  padding: "0.55rem 1rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
  border: "none",
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
};
