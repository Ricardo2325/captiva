"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "664636976";

export default function FloatingCallButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Llamar ahora"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 9999,
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "50%",
          background: "#4f46e5",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(79,70,229,0.5)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </motion.button>

      {/* Modal de confirmación */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 10000,
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(4px)",
              }}
            />

            {/* Dialog */}
            <motion.div
              key="dialog"
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 16 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.3 }}
              style={{
                position: "fixed",
                bottom: "6rem",
                right: "2rem",
                zIndex: 10001,
                background: "#13131f",
                border: "1px solid #1e1e2e",
                borderRadius: "1rem",
                padding: "1.5rem",
                width: "18rem",
                boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
              }}
            >
              {/* Icono */}
              <div
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "50%",
                  background: "rgba(79,70,229,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  color: "#e8e8f2",
                  fontSize: "1rem",
                  fontWeight: 500,
                  marginBottom: "0.25rem",
                }}
              >
                ¿Quieres llamar?
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  color: "#8888aa",
                  fontSize: "0.85rem",
                  marginBottom: "1.25rem",
                }}
              >
                {PHONE}
              </p>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    flex: 1,
                    padding: "0.6rem 0",
                    borderRadius: "0.5rem",
                    border: "1px solid #1e1e2e",
                    background: "transparent",
                    color: "#8888aa",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    cursor: "pointer",
                  }}
                >
                  Cancelar
                </button>
                <a
                  href={`tel:${PHONE}`}
                  onClick={() => setOpen(false)}
                  style={{
                    flex: 1,
                    padding: "0.6rem 0",
                    borderRadius: "0.5rem",
                    background: "#4f46e5",
                    color: "#ffffff",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Llamar
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
