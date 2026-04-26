import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Captiva — Webs y automatizaciones para negocios locales",
  description:
    "Creamos webs a medida y automatizamos procesos para que tu negocio crezca sin depender de ti. Especializados en entrenadores personales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        <Nav />
        {children}
      </body>
    </html>
  );
}
