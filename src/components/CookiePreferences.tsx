"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { ConsentState } from "@/lib/cookies";

interface Props {
  onSave: (consent: ConsentState) => void;
  onClose: () => void;
}

export default function CookiePreferences({ onSave, onClose }: Props) {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  return (
    <>
      <motion.div
        key="pref-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 10000,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
        }}
      />

      <motion.div
        key="pref-modal"
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.3 }}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10001,
          background: "#13131f",
          border: "1px solid #1e1e2e",
          borderRadius: "1rem",
          padding: "2rem",
          width: "min(28rem, calc(100vw - 2rem))",
          boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            color: "#e8e8f2",
            fontSize: "1.125rem",
            fontWeight: 600,
            marginBottom: "0.375rem",
          }}
        >
          Preferencias de cookies
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            color: "#8888aa",
            fontSize: "0.8rem",
            marginBottom: "1.75rem",
            lineHeight: 1.6,
          }}
        >
          Activá solo las categorías que aceptás.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <CategoryRow
            title="Necesarias"
            description="Guardan tu decisión sobre cookies. Siempre activas."
            enabled={true}
            locked
          />
          <CategoryRow
            title="Analíticas"
            description="Google Analytics — mide tráfico y comportamiento en el sitio."
            enabled={analytics}
            onChange={setAnalytics}
          />
          <CategoryRow
            title="Marketing"
            description="Meta Pixel — permite mostrar anuncios relevantes en Instagram y Facebook."
            enabled={marketing}
            onChange={setMarketing}
          />
        </div>

        <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem" }}>
          <button onClick={onClose} style={btnGhost}>
            Cancelar
          </button>
          <button
            onClick={() => onSave({ analytics, marketing })}
            style={btnPrimary}
          >
            Guardar preferencias
          </button>
        </div>
      </motion.div>
    </>
  );
}

function CategoryRow({
  title,
  description,
  enabled,
  locked,
  onChange,
}: {
  title: string;
  description: string;
  enabled: boolean;
  locked?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "1rem",
        background: "#0d0d14",
        borderRadius: "0.625rem",
        border: "1px solid #1e1e2e",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            color: "#e8e8f2",
            fontSize: "0.875rem",
            fontWeight: 500,
            marginBottom: "0.25rem",
          }}
        >
          {title}
          {locked && (
            <span
              style={{
                marginLeft: "0.5rem",
                fontSize: "0.7rem",
                color: "#8888aa",
                fontWeight: 400,
              }}
            >
              Siempre activa
            </span>
          )}
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            color: "#8888aa",
            fontSize: "0.775rem",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>

      <button
        onClick={() => !locked && onChange?.(!enabled)}
        aria-checked={enabled}
        role="switch"
        style={{
          flexShrink: 0,
          width: "2.75rem",
          height: "1.5rem",
          borderRadius: "9999px",
          background: enabled ? "#4f46e5" : "#2e2e44",
          border: "none",
          cursor: locked ? "not-allowed" : "pointer",
          position: "relative",
          transition: "background 0.2s",
          opacity: locked ? 0.6 : 1,
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "0.2rem",
            left: enabled ? "1.35rem" : "0.2rem",
            width: "1.1rem",
            height: "1.1rem",
            borderRadius: "50%",
            background: "#ffffff",
            transition: "left 0.2s",
          }}
        />
      </button>
    </div>
  );
}

const base: React.CSSProperties = {
  flex: 1,
  fontFamily: "var(--font-body)",
  fontSize: "0.875rem",
  fontWeight: 500,
  padding: "0.65rem 0",
  borderRadius: "0.5rem",
  cursor: "pointer",
};

const btnGhost: React.CSSProperties = {
  ...base,
  background: "transparent",
  color: "#8888aa",
  border: "1px solid #1e1e2e",
};

const btnPrimary: React.CSSProperties = {
  ...base,
  background: "#4f46e5",
  color: "#ffffff",
  border: "none",
};
