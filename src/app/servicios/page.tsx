import type { Metadata } from 'next';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Servicios — Baifo Studio',
  description: 'Webs a medida y automatizaciones para negocios locales. Planes desde 797€.',
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
