import type { Metadata } from 'next';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Servicios — Captiva',
  description: 'Webs a medida y automatizaciones para entrenadores y negocios locales. Planes desde 797€.',
};

export default function ServiciosPage() {
  return (
    <>
      <main className="pt-16">
        <Services />
      </main>
      <Footer />
    </>
  );
}
