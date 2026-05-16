import Link from "next/link";

interface Props {
  title: string;
  updated?: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, updated = "Mayo 2026", children }: Props) {
  return (
    <main
      style={{
        maxWidth: "52rem",
        margin: "0 auto",
        padding: "8rem 1.5rem 6rem",
      }}
    >
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
          fontFamily: "var(--font-body)",
          fontSize: "0.875rem",
          color: "#8888aa",
          textDecoration: "none",
          marginBottom: "3rem",
        }}
      >
        ← Volver al inicio
      </Link>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 700,
          color: "#e8e8f2",
          marginBottom: "0.5rem",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h1>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          color: "#8888aa",
          marginBottom: "3rem",
        }}
      >
        Última actualización: {updated}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {children}
      </div>
    </main>
  );
}

export function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.125rem",
          fontWeight: 600,
          color: "#e8e8f2",
          marginBottom: "1rem",
          paddingBottom: "0.625rem",
          borderBottom: "1px solid #1e1e2e",
        }}
      >
        <span style={{ color: "#4f46e5", marginRight: "0.5rem" }}>{number}.</span>
        {title}
      </h2>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.9375rem",
          color: "#8888aa",
          lineHeight: 1.75,
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        {children}
      </div>
    </section>
  );
}

export function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#13131f",
        border: "1px solid #1e1e2e",
        borderLeft: "3px solid #4f46e5",
        borderRadius: "0.5rem",
        padding: "1.25rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.375rem",
        fontFamily: "var(--font-body)",
        fontSize: "0.9rem",
        color: "#8888aa",
        lineHeight: 1.7,
      }}
    >
      {children}
    </div>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
      {items.map((item, i) => (
        <li key={i} style={{ color: "#8888aa", fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}
